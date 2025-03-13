interface IsLastItemProps<T> {
  list: T[]
  index?: number
}

export function isLastItem<T>({ list, index }: IsLastItemProps<T>): boolean {
  const lastItemIndex = list.length - 1

  return index === lastItemIndex
}
