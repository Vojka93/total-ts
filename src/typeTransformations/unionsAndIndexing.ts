/* eslint-disable @typescript-eslint/no-unused-vars */

// Terminology around unions:

// Discriminated union
type A =
  | {
      type: 'a'
      a: string
    }
  | {
      type: 'b'
      b: string
    }
  | {
      type: 'c'
      c: string
    }

// Union
type B = 'a' | 'b' | 'c'

// Enum
enum C {
  A = 'a',
  B = 'b',
  C = 'c',
}
