import hero from "../Assets/images/cookie-collection.jpeg";

const Introduction = () => {
    return (
        <section className="grid items-stretch md:grid-cols-[2fr_3fr]">
            {/* Left column */}
            <div className="flex flex-col justify-center gap-6 bg-cream-dark px-12 py-20 text-navy">
                <p className="text-xs uppercase tracking-[0.25em] text-navy/70">
                    Sweet moments, a brighter tomorrow
                </p>

                <h1 className="max-w-[14ch] font-heading text-7xl leading-[1.05] text-navy">
                    A Taste of Greece, Made with Love.
                </h1>

                <p className="max-w-[46ch] leading-relaxed text-navy/80">
                    Handcrafted pastries for everyday moments and life's biggest
                    celebrations. From traditional favorites to custom
                    creations, Athena Pastry Co. brings a little more sweetness
                    to your story.
                </p>

                <a
                    href="/custom-orders"
                    className="inline-flex w-fit items-center gap-4 bg-navy px-8 py-4 text-cream"
                >
                    Place a Custom Order <span aria-hidden="true">&rarr;</span>
                </a>
            </div>

            {/* Right column — image. */}
            <div className="relative min-h-[420px] bg-navy/10">
                <img
                    src={hero}
                    alt="Cookie Collection"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <p className="absolute right-10 top-1/2 z-10 w-[5ch] -translate-y-1/2 font-script text-3xl leading-tight text-white after:mt-4 after:block after:w-12 after:border-t after:border-white/70">
                    Good Things Are Baked Here
                </p>
            </div>
        </section>
    );
};

export default Introduction;
