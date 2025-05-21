import { ResizableNavbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <>
            <ResizableNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
