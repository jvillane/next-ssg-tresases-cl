import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Proficiency from "../components/proficiency";
import Focus from "../components/focus";
import Services from "../components/services";
import Footer from "../components/footer";
import Schedule from "../components/schedule";

export default function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <main>
        <Hero/>
        <Proficiency/>
        <Focus/>
        <Services/>
        {/*<Stats/>*/}
        <Schedule/>
      </main>
      <Footer/>
    </div>
  )
}
