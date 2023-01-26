import Button, { ButtonProps } from "./Button";
import Hero, { HeroProps } from "./Hero";

export const blocks = {
  "blocks.button": Button,
  "blocks.hero": Hero,
};

export type blockKey = keyof typeof blocks;

export type BlockProps = ButtonProps & HeroProps;
