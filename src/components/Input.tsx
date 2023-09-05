import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export const Prefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export const Control = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export const Root = (props: InputRootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}
