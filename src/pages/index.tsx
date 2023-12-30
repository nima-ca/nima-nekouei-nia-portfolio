import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";

const HomePage: NextPageWithLayout = () => {
    return <></>;
};

HomePage.getLayout = (page) => {
    const title = "Nima Nekouei Nia - Front-End developer";
    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
