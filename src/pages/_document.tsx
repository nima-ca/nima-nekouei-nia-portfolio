import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const DocumentPage: FC = () => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default DocumentPage;
