import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

interface IProvidersProps {}

const Providers: FC<PropsWithChildren<IProvidersProps>> = ({ children }) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
};

export default Providers;
