import { Link } from "@nextui-org/react";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="px-10 py-5 lg:w-2/3 lg:h-screen xl:px-20 lg:py-40 flex justify-center">
            <div className="flex flex-col max-w-4xl gap-9">
                <h2 className="text-2xl font-semibold">
                    As a Front-End developer with almost 3 years of experience,
                    I specialize in creating web applications with cutting-edge
                    technologies. Mainly using Typescript, React, Next.js and
                    NestJS to develop all sorts of applications.
                </h2>

                <p className="font-medium text-neutral-700 dark:text-neutral-200">
                    Available for after-hours freelance software development.{" "}
                    <Link
                        className="font-bold dark:text-neutral-50 text-neutral-800"
                        underline="always"
                        href="mailto:nekoueinima@gmail.com"
                    >
                        Get in touch!
                    </Link>
                </p>

                <hr className="border-1 dark:border-neutral-700 border-neutral-200" />
            </div>
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Nima Nekouei Nia - Front-End developer";
    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
