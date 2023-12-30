import Providers from "@src/components/providers/providers";
import "@src/styles/globals.scss";
import { NextPageWithLayout } from "@src/types/page";
import type { AppProps } from "next/app";
import { FC } from "react";

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout ?? ((page) => page);
    return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
};

export default App;
