type PageHeroProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export function PageHero({ title, description, imageUrl }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sumi text-white">
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/85 to-sumi/40" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kin">
          {title === "販売中の錦鯉" ? "Stock" : "Itsukaichi Nishikigoi Center"}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/78">{description}</p>
      </div>
    </section>
  );
}
