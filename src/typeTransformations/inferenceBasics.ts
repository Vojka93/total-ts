/* eslint-disable @typescript-eslint/no-unused-vars */

// Get the Return Type of a Function
const myFunc = () => {
  return 'hello'
}

type MyFunc = typeof myFunc
type MyFuncReturn = ReturnType<MyFunc>

// Extract Function Parameters Into A Type
const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: {
      [key: string]: string
    }
    body?: string
  }
) => {}

type MakeQuery = typeof makeQuery
type MakeQueryParameters = Parameters<MakeQuery>
type MakeQueryParametersSecondArgument = MakeQueryParameters[1]

// Extract The Awaited Result of a Promise
const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  })
}

type ReturnValue = Awaited<ReturnType<typeof getUser>>

// Create a Union Type From an Object’s Keys
const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
}

type TestingFramework = keyof typeof testingFrameworks // keyof only operates on types
