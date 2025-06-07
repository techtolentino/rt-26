import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-12 text-center md:text-left max-w-6xl">
      {children}
    </h1>
  );
}
