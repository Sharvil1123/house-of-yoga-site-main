import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {intro && (
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">{intro}</p>
        )}
      </div>
    </section>
  );
}
