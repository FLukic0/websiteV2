import { SectionHref } from "@/types/types";
import $ from "jquery";

export const scrollToSection = (e: any, href: SectionHref): void => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: ($(href) as any).offset().top - 80,
    },
    "slow"
  );
};
