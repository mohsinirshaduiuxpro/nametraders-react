import { useEffect } from "react";
import MainHeader from "./components/MainHeader";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Faqs from "./Pages/Faqs";
import DomainForSale from "./Pages/DomainForSale";
import ContactUs from "./Pages/ContactUs";
import Nopage from "./Pages/Nopage";
import MainFooter from "./components/MainFooter";
import MakeOffer1 from "./Pages/MakeOffer2";
import MakeOffer2 from "./Pages/MakeOffer1";
import MakeOffer3 from "./Pages/MakeOffer3";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sticky = document.querySelector(".sticky");
      const scroll = window.pageYOffset;

      if (scroll >= 50) {
        sticky?.classList.add(
          "shadow",
          "bg-danger",
          "bg-primary",
          "border-b-r-24",
          "pb-2"
        );
      } else {
        sticky?.classList.remove(
          "shadow",
          "bg-danger",
          "bg-primary",
          "border-b-r-24",
          "pb-2"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader></MainHeader>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/index" element={<Home></Home>}></Route>
            <Route path="/Faqs" element={<Faqs></Faqs>}></Route>
            <Route
              path="/MakeOffer1"
              element={<MakeOffer1></MakeOffer1>}
            ></Route>
            <Route
              path="/MakeOffer"
              element={<MakeOffer2></MakeOffer2>}
            ></Route>
            <Route
              path="/MakeOffer2"
              element={<MakeOffer3></MakeOffer3>}
            ></Route>
            <Route
              path="/DomainForSale"
              element={<DomainForSale></DomainForSale>}
            ></Route>
            <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="*" element={<Nopage></Nopage>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;
