import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

export default async function Posts() {
  return (
    <main>
      <Container>
        <Intro secondaryTitle="thoughts" />
        list of posts
      </Container>
    </main>
  );
}
