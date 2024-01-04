import Providers from "@src/components/providers/providers";
import SideNav from "@src/components/sideNav/sideNav";
import "@src/styles/globals.scss";
import { NextPageWithLayout } from "@src/types/page";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { FC } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout ?? ((page) => page);
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Providers>
                <main
                    className={`${montserrat.className} flex w-full flex-col lg:flex-row`}
                >
                    <SideNav />
                    {getLayout(<Component {...pageProps} />)}
                </main>
            </Providers>
        </>
    );
};

export default App;
