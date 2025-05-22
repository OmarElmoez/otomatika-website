import { ResizableNavbar, Footer, ScrollToTop } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <ResizableNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
