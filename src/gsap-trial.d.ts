declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: Element | Element[] | NodeListOf<Element> | string | object,
      vars?: Record<string, unknown>
    );
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
