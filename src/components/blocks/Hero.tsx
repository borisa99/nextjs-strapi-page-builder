import Button, { ButtonProps } from "./Button";

export interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  button: ButtonProps;
}

export default function Hero({ title, subtitle, button }: HeroProps) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <Button {...button} />
    </div>
  );
}
