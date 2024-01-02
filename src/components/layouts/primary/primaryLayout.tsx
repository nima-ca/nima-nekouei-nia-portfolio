import Head from "next/head";
import { FC, PropsWithChildren } from "react";

export interface IPrimaryLayoutProps {
    pageTitle: string;
}

const PrimaryLayout: FC<PropsWithChildren<IPrimaryLayoutProps>> = ({
    pageTitle,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {children}
        </>
    );
};

export default PrimaryLayout;
