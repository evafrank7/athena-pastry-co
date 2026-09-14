import banner from "../Assets/images/everything-sweeter-banner-hd.png";
const Story = () => {
    return (
        <div>
            <section className="grid md:grid-cols-[3fr_2fr]">
                {/* Left column */}
                <div className="relative min-h-[210px] md:min-h-[360px]">
                    <img
                        src={banner}
                        alt="Everything Sweeter Banner"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* Right column */}
                <div className="flex flex-col justify-center gap-6 bg-cream-dark px-12 py-20 text-navy">
                    <p className="text-xs uppercase tracking-[0.25em]">
                        Our Story
                    </p>

                    <div>
                        <h1 className="max-w-[14ch] font-heading text-5xl leading-[1.05]">
                            Baked with Tradition. Shared with You.
                        </h1>
                        <p className="mt-3 leading-relaxed">
                            Athena Pastry Co. was born from a love of baking and
                            a belief in the power of small, sweet moments.
                            Inspired by Greek tradition, creativity, and a touch
                            of Mediterranean warmth, we craft every treat with
                            care - for the celebrations, the everyday, and
                            everything in between.
                        </p>
                        <a className="mt-5 inline-flex items-center justify-center gap-2 text-navy underline-offset-4 hover:underline">
                            Learn More <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Story;
