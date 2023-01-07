import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CardFeature from "./components/CardFeature";
import DownloadSection from "./components/DownloadSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#178066]">
      <NavBar />
      <Hero />
      <div className="flex justify-around mt-12">
        <CardFeature
          title={"Thread"}
          description="Create a thread that allows others to comments, likes, and following your thread"
          icon={"/public/icon/pencil.png"}
        />
        <CardFeature
          title={"Bookmark"}
          description="Save thread that you want to read again in other time"
          icon={"/public/icon/book.png"}
        />
        <CardFeature
          title={"Space Group"}
          description="Explore and share knowledge based on certain topics which you want"
          icon={"/public/icon/people.png"}
        />
      </div>
      <DownloadSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
