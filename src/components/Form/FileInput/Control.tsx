'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-useless-return
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}

export default Control
