import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'

import Benefits from '@/components/blocks/Benefits'
import CourseDescription from '@/components/blocks/CourseDescription'
import CourseHero from '@/components/blocks/CourseHero'
import Curriculum from '@/components/blocks/Curriculum'
import Instructor from '@/components/blocks/Instructor'
import SupportImagery from '@/components/blocks/SupportImagery'
import BlockManager from '@/components/shared/BlockManager'
import axios from '@/data/axios'
import { Course } from '@/types/course'
import { getLocalizedParams } from '@/utils/localize'

function CoursePage({
  course,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col gap-y-28">
      <CourseHero />
      <Benefits />
      <CourseDescription />
      <SupportImagery />
      <Instructor />
      <Curriculum />
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
