import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const onClickButton = () => {
        router.push("/test");
    };
    return <>
        <header>
            <Link href={'/'}>index</Link>
            &nbsp;
            <Link href={'/search'}>search</Link>
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