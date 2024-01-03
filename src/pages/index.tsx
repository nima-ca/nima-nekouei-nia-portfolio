import { Link } from "@nextui-org/react";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import TechnologiesIcons from "@src/components/technologiesIcons/technologiesIcons";
import { NextPageWithLayout } from "@src/types/page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="px-5 sm: pb-20 lg:w-2/3 xl:px-20 lg:py-40 flex justify-center">
            <div className="flex flex-col max-w-4xl gap-9">
                <h2 className="text-base lg:text-2xl font-semibold">
                    As a Front-End developer with almost 3 years of experience,
                    I love making complex, beautiful, and performant web
                    applications with cutting-edge technologies and solving
                    computer science problems. I specialize in Typescript,
                    React, Next.js and NestJS to develop all sorts of
                    applications.
                </h2>

                <p className="text-sm lg:text-base font-medium text-neutral-700 dark:text-neutral-200">
                    Available for after-hours freelance software development.{" "}
                    <Link
                        className="font-bold dark:text-neutral-50 text-neutral-800 text-sm lg:text-base"
                        underline="always"
                        href="mailto:nekoueinima@gmail.com"
                    >
                        Get in touch!
                    </Link>
                </p>

                <hr className="border-1 dark:border-neutral-700 border-neutral-200" />

                <p className="text-sm lg:text-base font-medium">
                    I started to become a software engineer in January 2021 and
                    have been focusing more on developer relations to improve my
                    people skills and get out of my coding comfort zone. In my
                    free time, I like to challenge myself to be more creative
                    and improve my tech skills by participating in coding
                    meetings and listening to tech-related podcasts and do some
                    freelance projects!
                </p>

                <hr className="border-1 dark:border-neutral-700 border-neutral-200" />

                <h5 className="text-xl font-bold">Tech stack:</h5>
                <TechnologiesIcons />
            </div>
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Nima Nekouei Nia - Front-End developer";
    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
