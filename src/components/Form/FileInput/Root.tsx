'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContext = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext<FileInputContext>({} as FileInputContext)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
