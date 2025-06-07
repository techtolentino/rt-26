import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 pr-18">
        <div className="pr-24">
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <div className="mb-4 md:mb-2 text-md">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
