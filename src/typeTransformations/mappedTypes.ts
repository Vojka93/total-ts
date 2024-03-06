/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Map Over a Union to Create an Object
type Route = '/' | '/about' | '/admin' | '/admin/users'

/*
    map to this:

    {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
    }
*/

type RoutesObject = {
  [K in Route]: K
}

// Mapped Types with Objects
interface Attributes {
  firstName: string
  lastName: string
  age: number
}

// generic
// type AttributeGetters<T> = {
//   [Property in keyof T]: () => T[Property]
// }

// type AttributeGetters = {
//   [Property in keyof Attributes]: () => Attributes[Property]
// }

// Transforming Object Keys in Mapped Types
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
}

// Conditionally Extract Properties from Object
interface Example {
  name: string
  age: number
  id: string
  organisationId: string
  groupId: string
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${'id' | 'Id'}${string}`
    ? K
    : never]: T[K]
}
type Eg = OnlyIdKeys<Example>

// Map a Discriminated Union to an Object
type Route2 =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} }

type RoutesObject2 = {
  [R in Route2['route']]: Extract<Route2, { route: R }>['search']
}

type RoutesObject3 = {
  [R in Route2 as R['route']]: R['search']
}

// Map an Object to a Union of Tuples
interface Values {
  email: string
  firstName: string
  lastName: string
  age: number
}

type KeyOfValues = Values[keyof Values]

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]] // ["email", string] | ["firstName", string] | ["lastName", string]
}[keyof Values]

// Transform an Object into a Union of Template Literals
interface FruitMap {
  apple: 'red'
  banana: 'yellow'
  orange: 'orange'
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap] // "apple:red" | "banana:yellow" | "orange:orange"

// Transform a Discriminated Union into a Union
type Fruit =
  | {
      name: 'apple'
      color: 'red'
    }
  | {
      name: 'banana'
      color: 'yellow'
    }
  | {
      name: 'orange'
      color: 'orange'
    }

type TransformedFruit2 = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`
}[Fruit['name']]

// "apple:red" | "banana:yellow" | "orange:orange"
