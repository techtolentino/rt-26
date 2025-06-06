import { AUTHOR_NAME } from "@/lib/constants";
import Link from "next/link";

type IntroProps = {
  title: string;
};

export function Intro({ title = "ran" }: IntroProps) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href={"/blog"}>work</Link> & <Link href={"/blog"}>thoughts</Link>{" "}
        | {AUTHOR_NAME}
      </h4>
    </section>
  );
}
