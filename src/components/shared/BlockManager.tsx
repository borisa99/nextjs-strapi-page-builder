import React from 'react'

import { Block } from '@/types/course'
import { BlockProps, blocks } from '../blocks'

const getBlockComponent = ({ __component, id, ...rest }: Block) => {
  const Block = blocks[__component]
  const props = { ...(rest as BlockProps) }

  return <Block key={__component + '_' + id} {...props} />
}

export default function BlockManager({ blocks }: { blocks: Block[] }) {
  return <div>{blocks.map(getBlockComponent)}</div>
}
