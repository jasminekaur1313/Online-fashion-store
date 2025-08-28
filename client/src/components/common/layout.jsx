import { Outlet } from "react-router-dom";
import ShoppingHeader from "../shopping-view/header";
import ShoppingHome from "@/pages/shopping-view/home";

function CommonLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <ShoppingHome/>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;