import { useState } from 'react'

import IconExpandMore from '../icons/IconExpandMore'

export interface ExpandableProps {
  index: number
  title: string
  children: React.ReactNode
}
export default function Expandable({
  index,
  title,
  children,
}: ExpandableProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-2 rounded bg-gray-700 p-4">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded bg-gray-600 text-white">
            {index + 1}
          </div>
          <span className="text-lg text-gray-50">{title}</span>
        </div>
        <span className={`transition-all ${open ? 'rotate-180' : ''}`}>
          <IconExpandMore />
        </span>
      </div>
      {open && <div>{children}</div>}
    </div>
  )
}
