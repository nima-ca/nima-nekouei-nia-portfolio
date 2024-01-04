import profileImg from "@img/nima-profile.jpg";
import { Button, Link as NextUILink } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import GithubIcon from "../ui/icons/github";
import LinkedinIcon from "../ui/icons/linkedin";
import ThemeToggle from "../ui/themeToggle/themeToggle";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = () => {
    return (
        <section className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-1/3 border-r-1 justify-between light:border-neutral-100 dark:border-neutral-800 py-10 md:py-20 px-5 xl:p-20 gap-4">
            <div className="h-full max-w-2xl grid-rows-5 gap-4 mx-auto lg:grid lg:gap-10 w-full">
                <div className="flex flex-col row-span-4 gap-4 lg:gap-8">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image
                                src={profileImg}
                                alt="Nima's picture"
                                className="rounded-full w-20 h-2w-20"
                            />
                        </Link>
                        <ThemeToggle />
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                            Nima Nekouei Nia
                        </h1>
                        <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">
                            Front-End Developer
                        </p>
                    </div>

                    <div className="flex gap-1.5">
                        <NextUILink
                            className="cursor-pointer text-neutral-900 dark:text-white"
                            underline="hover"
                            href="/documents/nima-nekouei-nia-cv.pdf"
                            download={true}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </NextUILink>
                        <p className="opacity-70">or</p>
                        <NextUILink
                            href="mailto:nekoueinima@gmail.com"
                            className="cursor-pointer text-neutral-900 dark:text-white"
                            underline="hover"
                        >
                            Get in touch!
                        </NextUILink>
                    </div>
                </div>

                <div className="flex gap-1.5 row-start-5 pt-8">
                    <NextUILink
                        href="https://www.linkedin.com/in/nima-nekouei-nia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            isIconOnly
                            aria-label="linkedin link"
                            className="bg-transparent text-sm"
                        >
                            <LinkedinIcon className="text-2xl opacity-70" />
                        </Button>
                    </NextUILink>
                    <NextUILink
                        href="https://github.com/nima-ca"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            isIconOnly
                            aria-label="github link"
                            className="bg-transparent text-sm"
                        >
                            <GithubIcon className="text-2xl opacity-70" />
                        </Button>
                    </NextUILink>
                </div>
            </div>
        </section>
    );
};

export default SideNav;
