import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";

import axios from "@/data/axios";
import BlockManager from "@/components/shared/BlockManager";
import { getLocalizedParams } from "@/utils/localize";
import { Course } from "@/types/course";

function CoursePage({
  course,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <BlockManager blocks={course.blocks} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  course: Course;
}> = async (context) => {
  const { slug } = getLocalizedParams(context.params);
  const { data } = await axios.get<{ payload: Course }>(
    `/api/course-by-slug/${slug}`
  );

  return {
    props: {
      course: data.payload,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<string[]>(`/api/courses-slugs`);

  const paths = data.map((slug) => ({
    params: { slug },
  }));

  return { paths: paths, fallback: false };
};

export default CoursePage;
