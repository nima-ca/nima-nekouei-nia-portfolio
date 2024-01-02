import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import SideNav from "@src/components/sideNav/sideNav";
import { NextPageWithLayout } from "@src/types/page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="w-full">
            <SideNav />
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Nima Nekouei Nia - Front-End developer";
    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
