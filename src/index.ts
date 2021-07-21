import { Type, ExpElement, Props, ExpChild } from './types'

export function createElement<P extends Props = Props>(
  type: Type,
  props: P,
  ...children: ExpChild[]
): ExpElement {
  const { key, ...restProps } = props
  const newProps: Props = restProps

  if (children.length === 1) {
    newProps.children = children[0]
  } else if (children.length > 0) {
    newProps.children = children
  }

  return {
    type,
    props: newProps,
    key,
  }
}
