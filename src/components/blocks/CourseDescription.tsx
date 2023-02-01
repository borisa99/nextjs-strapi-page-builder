import { useState } from 'react'
import IconCalendar from '../icons/IconCalendar'

export default function CourseDescription() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="grid grid-cols-2 text-white">
      <div>
        <h1 className="mb-10 text-5xl font-semibold  text-white">
          About the course
        </h1>
        <div
          className={`relative mb-10 ${
            !showMore && 'max-h-[22.5rem] overflow-y-hidden'
          }`}
        >
          {!showMore && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[50%] bg-gradient-to-t from-gray-800 to-transparent"></div>
          )}
          <p className="text-lg text-gray-300">
            Using Unity 2020.1, we’ll show you how to include two essential game
            mechanics, dialogue and quests, in your games.
            <br /> <br /> This highly acclaimed series was over 200% funded on
            Kickstarter, and is designed for intermediate users of Unity. We
            recommend you take at least the first half of our Complete Unity
            Developer 2D or 3D, or equivalent, as a prerequisite. <br /> <br />{' '}
            You can use the dialogue and quest systems together or independently
            in any game or project you build. We’ll be using an RPG as an
            example. You do not need to have completed the previous parts of the
            RPG Series (the RPG Core Combat and Inventory Systems courses) but
            it will give you an advantage if you already have. <br /> <br />{' '}
            We’ll provide the RPG project created so far in the series so that
            you can practice integrating to an existing complex project. Every
            element of the project we touch will be <br /> <br /> fully
            explained and no knowledge of the project will be required.
          </p>
        </div>
        <button
          className="bg-gray-800 text-turquoise-500"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Hide' : 'Show More'}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div></div>
        <div className="rounded border border-white-7">
          <div className="flex w-[28.5rem] items-center border-b border-white-7 p-6">
            <span className="mr-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700">
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="mb-1 text-gray-100">Lifetime Access</span>
              <span className="text-md text-gray-300">
                Earn a Certificate upon completion
              </span>
            </div>
          </div>
          <div className="flex items-center border-b border-white-7 p-6">
            <span className="mr-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700">
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="mb-1 text-gray-100">Lifetime Access</span>
              <span className="text-md text-gray-300">
                Earn a Certificate upon completion
              </span>
            </div>
          </div>
          <div className="flex items-center border-b border-white-7 p-6">
            <span className="mr-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700">
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="mb-1 text-gray-100">Lifetime Access</span>
              <span className="text-md text-gray-300">
                Earn a Certificate upon completion
              </span>
            </div>
          </div>
          <div className="flex items-center border-b border-white-7 p-6">
            <span className="mr-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700">
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="mb-1 text-gray-100">Lifetime Access</span>
              <span className="text-md text-gray-300">
                Earn a Certificate upon completion
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
