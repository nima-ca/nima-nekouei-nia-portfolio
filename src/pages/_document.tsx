import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const DocumentPage: FC = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <meta
                    name="description"
                    content="Hi, I am a Front-End developer!"
                />
            </Head>
            <body className="dark:bg-neutral-900 light:bg-neutral-50">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default DocumentPage;
