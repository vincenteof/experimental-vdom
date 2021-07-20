import { Fiber } from './types'

let nextUnitOfWork: Fiber | null = null

function workLoop() {
  while (nextUnitOfWork !== null) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
}

function performUnitOfWork(workInProgress: Fiber) {
  let next = beginWork(workInProgress)
  if (next === null) {
    next = completeUnitOfWork(workInProgress)
  }
  return next
}

function beginWork(workInProgress: Fiber) {
  return workInProgress.child
}

function completeUnitOfWork(workInProgress: Fiber) {
  while (true) {
    let returnFiber = workInProgress.return
    let siblingFiber = workInProgress.sibling

    nextUnitOfWork = completeWork(workInProgress)

    if (siblingFiber !== null) {
      return siblingFiber
    } else if (returnFiber !== null) {
      workInProgress = returnFiber
    } else {
      return null
    }
  }
}

function completeWork(workInProgress: Fiber) {
  return null
}
