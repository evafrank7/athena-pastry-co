import baklavaImage from "../Assets/images/baklava.jpeg";

const AboutPage = () => {
  return (
    <main className="bg-cream-pale px-6 py-16 text-navy sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/65">
            Our Story
          </p>

          <h1 className="mt-4 font-heading text-5xl leading-tight sm:text-6xl">
            Baked with Tradition. Shared with You.
          </h1>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy/80">
            <p>
              Athena Pastry Co. was born from a love of baking and a belief in
              the power of small, sweet moments.
            </p>

            <p>
              Inspired by Greek tradition, creativity, and Mediterranean warmth,
              every treat is made with care.
            </p>
          </div>
        </section>

        <section className="relative">
          <div
            className="absolute -bottom-4 -left-4 h-full w-full border-2 border-gold"
            aria-hidden="true"
          />

          <img
            src={baklavaImage}
            alt="Handmade pastries from Athena Pastry Co."
            className="relative h-[28rem] w-full object-cover sm:h-[34rem]"
          />
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
