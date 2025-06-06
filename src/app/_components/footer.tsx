import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row">
          <h3 className="text-s font-bold leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            randytolentino.com
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
