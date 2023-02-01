import CurriculumItem from '@/components/course/CurriculumItem'

export default function Curriculum() {
  return (
    <div className="m-auto w-full max-w-[58.5rem]">
      <h1 className="mb-10 text-5xl font-semibold text-white">Curriculum</h1>
      <div className="flex flex-col">
        <CurriculumItem
          index={0}
          title="Let’s Get Started"
          items={[
            { id: 1, title: 'Ut donec enim at', duration: '13:35' },
            { id: 2, title: 'Nunc laoreet libero', duration: '13:35' },
            { id: 3, title: 'Nunc nec leo', duration: '13:35' },
            { id: 4, title: 'Egestas ullamcorper', duration: '13:35' },
          ]}
        />
        <CurriculumItem index={1} title="2nd section" items={[]} />
        <CurriculumItem index={2} title="Third section" items={[]} />
      </div>
    </div>
  )
}
