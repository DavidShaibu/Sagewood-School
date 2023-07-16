import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Default/Hero";
import HeroHome from "../components/Hero/Home/HeroHome";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";


export default function RootLayout() {

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
