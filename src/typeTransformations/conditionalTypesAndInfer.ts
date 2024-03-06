/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Extends } from 'ts-toolbelt/out/Any/Extends'

// Add Conditional Logic to a Type Helper
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'

// Refine Conditional Logic in a Type Helper with nested ternaries
type YouSayGoodbyeAndISayHelloOrNever<T> = T extends 'hello' | 'goodbye'
  ? T extends 'hello'
    ? 'goodbye'
    : 'hello'
  : never

// Introducing infer for Conditional Logic
type GetDataValue<T> = T extends {
  data: infer TData
}
  ? TData
  : never

// GetDataValue<{ data: "hello" }> should return  "hello"
// GetDataValue<{ data: { name: "hello" } }> should return { name: "hello" }

type Example = GetDataValue<{ data: 'hello' }>
type Example2 = GetDataValue<{ data: { name: 'hello' } }>

// Extract Type Arguments to Another Type Helper
interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event
  getContext: () => Context
  getName: () => Name
  getPoint: () => Point
}

type Example3 = MyComplexInterface<
  'click',
  'window',
  'my-event',
  { x: 12; y: 14 }
>

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never

// GetPoint<Example3> should return { x: 12; y: 14 }
type Example4 = GetPoint<Example3>

// Extract Parts of a String with a Template Literal
type Names = [
  'Matt Pocock',
  'Jimi Hendrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
]

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never

type Example5 = GetSurname<Names[1]> // Hendrix

// Extract the Result of an Async Function
const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json: { title: string } = await data.json()
  return {
    props: {
      json,
    },
  }
}

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer TProps
}>
  ? TProps
  : never

type InferedProps = InferPropsFromServerSideFunction<typeof getServerSideProps> // { json: { title: string }}

// Extract the Result From Several Possible Function Shapes
const parser1 = {
  parse: () => 1,
}

const parser2 = () => '123'

const parser3 = {
  extract: () => true,
}

type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult
    }
  | (() => infer TResult)
  | {
      extract: () => infer TResult
    }
  ? TResult
  : never

type NumberExample = GetParserResult<typeof parser1>
type StringExample = GetParserResult<typeof parser2>
type BooleanExamle = GetParserResult<typeof parser3>
