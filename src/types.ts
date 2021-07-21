export type Key = string | number
export type Type = string | FunctionComponent
export type Props = Record<string, any>
export interface ExpElement<P extends Props = {}, T extends Type = Type> {
  type: T
  props: P
  key: Key | null
}

export type ExpText = string | number
export type ExpChild = ExpElement | ExpText
export interface ExpNodeArray extends Array<ExpNode> {}
export type ExpFragment = {} | ExpNodeArray
export type ExpNode = ExpChild | ExpFragment | null

export type FunctionComponent<P extends Props = {}> = (props: P) => ExpNode
export interface Fiber<T extends Type = Type> {
  key?: Key | null
  type: T
  child: Fiber | null
  sibling: Fiber | null
  return: Fiber | null
}
