/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Introducing Type Helpers
type ReturnWhatIPassIn<T> = T

type Something = ReturnWhatIPassIn<'Something'>

// Creating a Maybe Type Helper
type Maybe<T> = T | null | undefined

type Example = Maybe<12>

// Ensure Type Safety in a Type Helper
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`

// Create a Reusable Type Helper
type CreateDataShape<
  TData extends string | number | boolean,
  TError = undefined
> = {
  data: TData
  error: TError
}

// Functions as Constraints for Type Helpers
type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>
  returnValue: ReturnType<T>
}
type Hi = GetParametersAndReturnType<(n: number, b: boolean) => number>

// Constraining Types for Anything but null or undefined

export type Maybe2<T extends {}> = T

// Constraining Type Helpers to Non-Empty Arrays
type NonEmptyArray<T> = [T, ...T[]]
export const makeEnum = (values: NonEmptyArray<string>) => {}
makeEnum(['a'])
makeEnum(['a', 'b'])
makeEnum([])
