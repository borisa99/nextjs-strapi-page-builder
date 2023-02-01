import Image from 'next/image'

import IconSignal from '@/components/icons/IconSignal'
import IconTimer from '@/components/icons/IconTimer'

export default function RelatedCourses() {
  return (
    <div>
      <h1 className="mb-14 text-center text-6xl font-semibold text-white">
        Related Courses
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <div>
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded bg-red-100">
            <Image
              src="https://cdn.player.one/sites/player.one/files/styles/scale_lg/public/2019/07/23/astroneer-tether.jpg"
              alt="Course image"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-xl text-white">Beginner Unity Bundle</h4>
            <div className="flex items-center gap-x-8 text-sm text-gray-50">
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconSignal />
                </span>
                <span>Beginner</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconTimer />
                </span>
                <span>24h</span>
              </div>
            </div>
            <h5 className="text-sm text-gray-300">Sam Pattuzzi</h5>
            <div className="text-xl font-semibold">
              <span className="mr-3 text-turquoise-600">$35.98</span>
              <span className="text-gray-400 line-through">$239.85</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded bg-red-100">
            <Image
              src="https://cdn.player.one/sites/player.one/files/styles/scale_lg/public/2019/07/23/astroneer-tether.jpg"
              alt="Course image"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-xl text-white">Beginner Unity Bundle</h4>
            <div className="flex items-center gap-x-8 text-sm text-gray-50">
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconSignal />
                </span>
                <span>Beginner</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconTimer />
                </span>
                <span>24h</span>
              </div>
            </div>
            <h5 className="text-sm text-gray-300">Sam Pattuzzi</h5>
            <div className="text-xl font-semibold">
              <span className="mr-3 text-turquoise-600">$35.98</span>
              <span className="text-gray-400 line-through">$239.85</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded bg-red-100">
            <Image
              src="https://cdn.player.one/sites/player.one/files/styles/scale_lg/public/2019/07/23/astroneer-tether.jpg"
              alt="Course image"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-xl text-white">Beginner Unity Bundle</h4>
            <div className="flex items-center gap-x-8 text-sm text-gray-50">
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconSignal />
                </span>
                <span>Beginner</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconTimer />
                </span>
                <span>24h</span>
              </div>
            </div>
            <h5 className="text-sm text-gray-300">Sam Pattuzzi</h5>
            <div className="text-xl font-semibold">
              <span className="mr-3 text-turquoise-600">$35.98</span>
              <span className="text-gray-400 line-through">$239.85</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded bg-red-100">
            <Image
              src="https://cdn.player.one/sites/player.one/files/styles/scale_lg/public/2019/07/23/astroneer-tether.jpg"
              alt="Course image"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-xl text-white">Beginner Unity Bundle</h4>
            <div className="flex items-center gap-x-8 text-sm text-gray-50">
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconSignal />
                </span>
                <span>Beginner</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 fill-gray-400">
                  <IconTimer />
                </span>
                <span>24h</span>
              </div>
            </div>
            <h5 className="text-sm text-gray-300">Sam Pattuzzi</h5>
            <div className="text-xl font-semibold">
              <span className="mr-3 text-turquoise-600">$35.98</span>
              <span className="text-gray-400 line-through">$239.85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
