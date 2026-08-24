import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Wope",
    category: "Web Development · Framer",
    desc: "Designed and shipped Wope's production marketing site in Framer, owning the full pipeline from Figma handoff to live launch.",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    name: "Anuva Wealth",
    category: "Web Development · Webflow",
    desc: "Built and launched Anuva Wealth's site in Webflow, working directly with stakeholders through revisions to deployment.",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    name: "Givingly",
    category: "Web Development · Webflow/Framer",
    desc: "Took Givingly from Figma concept to a live, responsive site, handling build, interactions, and launch end-to-end.",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    name: "Moureya Concepts",
    category: "Web Development · Framer",
    desc: "Designed and delivered Moureya Concepts' production site, owning client revisions and the full path to deployment.",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    name: "CB Moureya",
    category: "Performance Marketing",
    desc: "Planned and executed Meta & Google ad campaigns with end-to-end influencer partnerships for a real estate brand.",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    name: "Thunder Hospitality",
    category: "Social & Campaign Management",
    desc: "Managed social media and paid campaigns across Thunder Hospitality's venue portfolio, including Mithai Mahal, Skyroot, Tof, 404.",
    image: "/images/placeholder.webp",
    link: "#",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: () => `+=${translateX}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: () => -translateX,
    ease: "none",
  });

  const onLoad = () => {
    setTranslateX();
    ScrollTrigger.refresh();
  };
  window.addEventListener("load", onLoad);

  // Clean up (optional, good practice)
  return () => {
    window.removeEventListener("load", onLoad);
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>What I did</h4>
                <p>{project.desc}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link === "#" ? undefined : project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
