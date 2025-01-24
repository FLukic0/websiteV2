import { headerData } from "@/data/headerData";

export type SectionName = (typeof headerData)[number]["name"];
export type SectionHref = (typeof headerData)[number]["hash"];
