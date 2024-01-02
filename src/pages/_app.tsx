import Providers from "@src/components/providers/providers";
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
            {getLayout(
                <main className={montserrat.className}>
                    <Component {...pageProps} />
                </main>,
            )}
        </Providers>
    );
};

export default App;
