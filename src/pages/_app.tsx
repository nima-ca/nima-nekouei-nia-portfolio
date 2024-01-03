import Providers from "@src/components/providers/providers";
import SideNav from "@src/components/sideNav/sideNav";
import "@src/styles/globals.scss";
import { NextPageWithLayout } from "@src/types/page";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { FC } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <Providers>
            <main
                className={`${montserrat.className} flex w-full flex-col lg:flex-row`}
            >
                <SideNav />
                {getLayout(<Component {...pageProps} />)}
            </main>
        </Providers>
    );
};

export default App;
