import Expandable, { ExpandableProps } from '@/components/shared/Expandable'

interface CurriculumItemProps extends Omit<ExpandableProps, 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
}
export default function CurriculumItem({
  index,
  title,
  items,
}: CurriculumItemProps) {
  return (
    <Expandable index={index} title={title}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative ml-14 flex items-center justify-between py-2 text-sm text-gray-300"
        >
          <div>
            {index + 1}. {item.title}
          </div>
          <div className="flex">
            <span className="mr-3">{item.duration}</span>
            <span className="mr-5">i</span>
            <span>i</span>
          </div>
        </div>
      ))}
    </Expandable>
  )
}
