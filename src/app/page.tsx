import ContactTag from "./components/ContactTag";
import FooterBox from "./components/FooterBox/FooterBox";
import TopNav from "./components/TopNav/TopNav";
import AboutBox from "./home/AboutBox";
import HeadBox from "./home/HeadBox";
import SkillBox from "./home/SkillBox";
import TimeBox from "./home/TimeBox";

const Home = () => {
  return (
    <main className="grid gap-40 h-full md-screen:gap-28 sm-screen:gap-20">
      <section className="grid gap-28 md-screen:gap-14 sm-screen:gap-8">
        <TopNav />
        <HeadBox />
      </section>

      {/* <StepBox /> */}

      <AboutBox />

      <SkillBox />

      <TimeBox />

      <FooterBox />

      <ContactTag />
    </main>
  );
}

export default Home;