import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import axios from '@/data/axios'
import BlockManager from '@/components/shared/BlockManager'
import CourseHero from '@/components/blocks/CourseHero'
import Benefits from '@/components/blocks/Benefits'
import CourseDescription from '@/components/blocks/CourseDescription'
import SupportImagery from '@/components/blocks/SupportImagery'
import Instructor from '@/components/blocks/Instructor'
import { getLocalizedParams } from '@/utils/localize'
import { Course } from '@/types/course'

function CoursePage({
  course,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex min-h-screen flex-col gap-y-28 bg-gray-800 px-3">
      <CourseHero />
      <Benefits />
      <CourseDescription />
      <SupportImagery />
      <Instructor />
      <BlockManager blocks={course.blocks} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  course: Course
}> = async (context) => {
  const { slug } = getLocalizedParams(context.params)
  const { data } = await axios.get<{ payload: Course }>(
    `/api/course-by-slug/${slug}`
  )

  return {
    props: {
      course: data.payload,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<string[]>(`/api/courses-slugs`)

  const paths = data.map((slug) => ({
    params: { slug },
  }))

  return { paths: paths, fallback: false }
}

export default CoursePage
