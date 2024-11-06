import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import WhatsAppButton from "@/pages/shopping-view/whatsapp";
import Footer from "@/pages/shopping-view/footer";
function ShoppingLayout() {
  return (
    <>
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <WhatsAppButton/>
    </div>
    <Footer/>
    </>
  );
}

export default ShoppingLayout;
