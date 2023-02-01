import IconLanguage from '@/components/icons/IconLanguage'
import IconSchool from '@/components/icons/IconSchool'
import IconSignal from '@/components/icons/IconSignal'
import IconTimer from '@/components/icons/IconTimer'

const courseContentDetails: Array<{
  icon: React.ReactNode
  label: string
}> = [
  {
    icon: <IconSchool />,
    label: 'Lectures',
  },
  {
    icon: <IconTimer />,
    label: 'Length',
  },
  {
    icon: <IconSignal />,
    label: 'Level',
  },
  {
    icon: <IconLanguage />,
    label: 'Language',
  },
]

export default function CourseHero() {
  return (
    <div className="flex h-[38.375rem] gap-x-[3.25rem] ">
      <div className="flex flex-1 flex-col bg-blue-100">
        <div className="mb-4 flex-1 bg-yellow-100">Main image</div>
        <div className="h-[7.5rem] bg-pink-100">Carousel</div>
      </div>
      <div className="flex-1">
        <h1 className="mb-4 text-5xl font-semibold text-white">
          Unity Dialogue & Quests: Intermediate C# Game Coding
        </h1>
        <h2 className="mb-8 text-lg text-gray-300">
          Implement a Dialogue Editor and Quest System and integrate it into an
          RPG project.
        </h2>
        <div className="mb-5 grid grid-cols-2 rounded border-b border-l border-white-7">
          {courseContentDetails.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center border-t border-r border-white-7 p-6 text-sm text-white"
            >
              <span className="mr-3">{icon}</span>
              <span className="mr-2 text-gray-300">{label}:</span>
              <span className="text-gray-200">{label}</span>
            </div>
          ))}
        </div>
        <div className="rounded border border-white-7 px-8 pt-9 pb-3">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-4xl font-semibold">
              <span className="mr-3 text-turquoise-600">$35.98</span>
              <span className="text-gray-400 line-through">$239.85</span>
            </div>
            <div className="flex items-center justify-center rounded-full bg-gray-500 px-3 py-2">
              <span className="text-xs text-gray-300">Save 45%</span>
            </div>
          </div>
          <button className="w-full rounded-lg bg-turquoise-600 py-4 text-center font-semibold text-gray-700">
            Buy now
          </button>
        </div>
      </div>
    </div>
  )
}
