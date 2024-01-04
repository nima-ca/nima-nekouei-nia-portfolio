import { Button } from "@nextui-org/react";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";
import Link from "next/link";

const NotFoundPage: NextPageWithLayout = () => {
    return (
        <div className="grid place-items-center w-full lg:w-2/3">
            <div className="flex flex-col gap-5 items-center">
                <h2 className="text-2xl lg:text-3xl">Page Not Found!</h2>
                <Link href="/">
                    <Button variant="ghost">Home Page &#x2192;</Button>
                </Link>
            </div>
        </div>
    );
};

NotFoundPage.getLayout = (page) => {
    const title = "Nima Nekouei Nia - Not found!";
    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default NotFoundPage;
