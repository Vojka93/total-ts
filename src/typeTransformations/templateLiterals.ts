/* eslint-disable @typescript-eslint/no-unused-vars */
import { S } from 'ts-toolbelt'
// Only Allow Specified String Patterns
type Route = `/${string}`

export const goToRoute = (route: Route) => {}

// Should succeed:
goToRoute('/users')
goToRoute('/')

// Extract Union Strings Matching a Pattern
type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id'

type DynamicRoutes = Extract<Routes, `${string}/:${string}`>

// Create a Union of Strings with All Possible Permutations of Two Unions
type BreadType = 'rye' | 'brown' | 'white'
type Filling = 'cheese' | 'ham' | 'salami'

type Sandwich = `${BreadType} sandwitch with ${Filling}`

// Splitting A String into a Tuple
type Path = 'Users/John/Documents/notes.txt'

type SplitPath = S.Split<Path, '/'>

// Create an Object Whose Keys Are Derived From a Union
type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`

type ObjectOfKeys = Record<TemplateLiteralKey, string>

// Transform String Literals To Uppercase
type Event = `log_in` | 'log_out' | 'sign_up'

type ObjectOfKeysUppercase = Record<Uppercase<Event>, string>
