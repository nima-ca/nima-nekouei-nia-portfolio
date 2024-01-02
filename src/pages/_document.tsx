import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const DocumentPage: FC = () => {
    return (
        <Html lang="en">
            <Head />
            <body className="dark:bg-neutral-900 light:bg-neutral-50">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default DocumentPage;
