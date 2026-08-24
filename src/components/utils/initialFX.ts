import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Respect users who opt out of motion — show final states directly
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(
      [
        ".landing-info h3",
        ".landing-intro h2",
        ".landing-intro h1",
        ".landing-cycle",
        ".header",
        ".icons-section",
        ".nav-fade",
      ],
      { opacity: 1, clearProps: "transform,filter" }
    );
    return;
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  gsap.fromTo(
    ".landing-cycle",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  new SplitText(".landing-intro h1", TextProps);

  CycleWords();
}

function CycleWords() {
  const track = document.querySelector<HTMLElement>(".landing-cycle-track");
  if (!track) return;

  const count = track.children.length - 1; // last item duplicates the first
  if (count < 2) return;

  // em-based steps: always exactly one slot per slide, resize-proof
  const tl = gsap.timeline({ repeat: -1 });
  for (let i = 0; i < count; i++) {
    tl.to(track, { y: `-=${2.3}em`, duration: 0.9, ease: "power3.inOut" });
    if (i < count - 1) {
      tl.to({}, { duration: 1.6 }); // hold on the current word
    }
  }
  // seamless loop: sitting on the duplicate of word 1, snap to the real one
  tl.set(track, { y: 0 }, "+=0.01");
}

