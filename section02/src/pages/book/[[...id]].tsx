import { useRouter } from "next/router";

export default function Page(){
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    return <h1>Book {id}</h1>
}

// 파일명인 [...id]는 Catch ALL Segment로, 모든 구간에 다 대응하는 페이지를 뜻한다.
// /book/123 -> id: ['123']
// /book/123/456 -> id: ["123", "456"]
// /book/ 요청에서는 반응하지 않는다.

// Optional Catch ALL Segment
// 파일명을 [[...id]]로 지정하면 /book/과 같은 요청에도 반응한다.