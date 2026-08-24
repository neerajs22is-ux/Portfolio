import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    if (smoother) return; // already created — don't stack instances
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const onNavLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        smoother.scrollTo(section, true, "top top");
      }
    };
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", onNavLinkClick);
    });
    const onResize = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("resize", onResize);
    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", onNavLinkClick);
      });
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Neeraj S
        </a>
        <a
          href="mailto:neeraj2016year@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          neeraj2016year@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
