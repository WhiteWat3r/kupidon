import { defaultGuys } from "./constants";

export const correctMatch = (lookingFor: string) => defaultGuys.find(i => i.name === lookingFor)
