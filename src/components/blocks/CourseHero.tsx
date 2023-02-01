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
    <div className="flex h-[38.375rem]">
      <div className="mr-14 flex w-[60%] flex-col">
        <div
          className="mb-4 flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://dlcdnrog.asus.com/rog/media/160050017840.webp')`,
          }}
        ></div>
        <div className="flex h-[7.5rem] gap-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-1 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://dlcdnrog.asus.com/rog/media/160050017840.webp')`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex w-[40%] flex-col">
        <h1 className="mb-4 text-5xl font-semibold text-white">
          Unity Dialogue & Quests: Intermediate C# Game Coding
        </h1>
        <h4 className="mb-8 text-lg text-gray-300">
          Implement a Dialogue Editor and Quest System and integrate it into an
          RPG project.
        </h4>
        <div className="mb-5 grid grid-cols-2 rounded border-b border-l border-white-7">
          {courseContentDetails.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center border-t border-r border-white-7 p-6 text-sm text-white"
            >
              <span className="mr-3 fill-turquoise-500">{icon}</span>
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
          <button className="mb-7 w-full rounded-lg bg-turquoise-600 py-4 text-center font-semibold text-gray-700">
            Buy now
          </button>
          <div className="flex items-center justify-center text-xxs">
            <span className="mr-2 fill-red-500">
              <IconTimer />
            </span>
            <span className="text-gray-50">
              13 hours 12 minutes and 34 seconds
            </span>
            &nbsp;
            <span className="text-gray-300">
              remain in the sale for this course
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
