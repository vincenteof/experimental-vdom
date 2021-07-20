export interface Fiber {
  child: Fiber | null
  sibling: Fiber | null
  return: Fiber | null
}
