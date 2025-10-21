"use client";

// App Router 버전 -> next/navigation
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?=${search}`);
  };

  return (
    <div>
      <input onChange={onChangeSearch} value={search} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
