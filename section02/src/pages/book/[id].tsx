import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  return {
    props: {
      book,
    },
  };
};

export default function Page({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return "문제가 발생했습니다. 다시 시도하세요.";
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}

// 파일명인 [...id]는 Catch ALL Segment로, 모든 구간에 다 대응하는 페이지를 뜻한다.
// /book/123 -> id: ['123']
// /book/123/456 -> id: ["123", "456"]
// /book/ 요청에서는 반응하지 않는다.

// Optional Catch ALL Segment
// 파일명을 [[...id]]로 지정하면 /book/과 같은 요청에도 반응한다.
