// import { Inter } from "@next/font/google";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Landing from "../components/Landing";
import Roadmap from "../components/Roadmap";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main-content">
      <Landing />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Banner />
      <Section7 />
      <Section8 />
      <Section9 />
      <Roadmap />
      <AboutUs />
    </main>
  );
}
