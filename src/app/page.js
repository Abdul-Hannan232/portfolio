"use client"
import HeroSection from "./component/heroSection"
import Projects from "./component/projects";
import Services from "./component/services";
import Testimonal from "./component/testimonal";
import Contacts from "./component/contacts";
import Process from "./component/process";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
export default function Home() {
  return (
    <div >
      <HeroSection />
      <Process/>
      <Projects />
      <Services />
      <Testimonal  />
      <Contacts/> 
    </div>
  );
}
