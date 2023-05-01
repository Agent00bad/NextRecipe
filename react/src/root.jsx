import { Outlet } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import { useEffect, useState } from "react";
import { fetchApiEdemam } from "./JS/fetchApiEdamam";
import { fetchApiSpoonacular } from "./JS/fetchApiSpoonacular";
export default function Root() {
  return (
    <div className="root">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
