"use client";

import { ReactNode } from "react";

// client component에서 server component를 불러오는 것을 지양하자
// 다만 client component에서 server component를 불러오면 server component를 자동으로 client component로 바꾼다

// 만약 client component에서 server component를 불가피하게 불러와야 한다면 children 속성을 사용하자
export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("client component");
  return <div>{children}</div>;
}
