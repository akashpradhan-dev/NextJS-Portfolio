import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Header from "../components/Header/Header";
import NavControls from "../components/NavControlls";
import Portfolio from "../components/Portfolio";
export default function Home() {
  return (
    <div className='main-content'>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Blogs />
        <Contact />
      </main>
      <NavControls />

      <div class='theme-btn'>
        <i class='fas fa-adjust'></i>
      </div>
    </div>
  );
}
