import React from 'react'

interface ForProps<T> {
  list: T[]
  fallback?: React.ReactNode
  children: (item: T, index?: number) => React.ReactNode
}

export function For<T>({ list, fallback, children }: ForProps<T>) {
  if (list.length <= 0) return fallback

  return list.map((item, index) => (
    <React.Fragment key={index}>{children(item, index)}</React.Fragment>
  ))
}

/*
  USAGE

  <For list={array} fallback={<Fallback />}>
    {item => <Component {...item} />}
  </For>

 */
