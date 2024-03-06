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

// Extracting Members of a Discriminated Union
export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

type ClickEvent = Extract<Event, { type: 'click' }>
type NonKeyDownEvents = Exclude<Event, { event: KeyboardEvent }>

// Extract Object Properties into Individual Types
export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
}

type FakeDataDefaults = typeof fakeDataDefaults

export type StringType = FakeDataDefaults['String']
export type IntType = FakeDataDefaults['Int']
export type FloatType = FakeDataDefaults['Float']
export type BooleanType = FakeDataDefaults['Boolean']
export type IDType = FakeDataDefaults['ID']

// Extract the Discriminator from a Discriminated Union
type EventType = Event['type'] // "click" | "focus" | "keydown"

// Resolve an Object’s Values as Literal Types
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const

export type GroupProgram = (typeof programModeEnumMap)['GROUP']
export type AnnouncementProgram = (typeof programModeEnumMap)['ANNOUNCEMENT']
export type OneOnOneProgram = (typeof programModeEnumMap)['ONE_ON_ONE']
export type SelfDirectedProgram = (typeof programModeEnumMap)['SELF_DIRECTED']
export type PlannedOneOnOneProgram =
  (typeof programModeEnumMap)['PLANNED_ONE_ON_ONE']
export type PlannedSelfDirectedProgram =
  (typeof programModeEnumMap)['PLANNED_SELF_DIRECTED']

// Create a Union From an Object's Values
export type IndividualProgram1 = (typeof programModeEnumMap)[
  | 'ONE_ON_ONE'
  | 'SELF_DIRECTED'
  | 'PLANNED_ONE_ON_ONE'
  | 'PLANNED_SELF_DIRECTED']

export type IndividualProgram2 = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  'GROUP' | 'ANNOUNCEMENT'
>]

// Get All of an Object’s Values
const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const

type BackendModuleEnum =
  (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap]

// Create Unions out of Array Values
const fruits = ['apple', 'banana', 'orange'] as const

type AppleOrBanana = (typeof fruits)[0 | 1]
type Fruit = (typeof fruits)[number]
