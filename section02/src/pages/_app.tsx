import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const onClickButton = () => {
        router.push("/test");
    };

    useEffect(()=>{
        router.prefetch('/test')
    },[])
    return <>
        <header>
            <Link href={'/'}>index</Link>
            &nbsp;
            <Link href={'/search'} prefetch={false}>search</Link>
            &nbsp;
            <Link href={'/book/1'}>book/1</Link>
            <div>
                <button onClick={onClickButton}>/test 페이지로 이동</button>
            </div>
        </header>
        <Component {...pageProps} />
    </>;
}

// push: 페이지 이동
// replace: 뒤로가기 방지 && 페이지 이동
// back: 페이지 뒤로 이동

// prefetch: Next.js는 요청한 페이지의 JS 번들과 현재 페이지에서 이동할 것 같은 페이지(Link 태그, router.prefetch 설정한 페이지)를 백그라운드에서 미리 다운로드한다
// 이로 인해 페이지 간 더 빠른 이동이 가능함