import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <main className="bg-cream-pale px-6 py-16 text-navy sm:px-10 sm:py-20">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
                <section>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">
                        Get in Touch
                    </p>

                    <h1 className="mt-3 font-heading text-5xl leading-tight sm:text-6xl">
                        Let&apos;s Make Something Sweet
                    </h1>

                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy/75">
                        Questions about the menu, allergens, availability, or an
                        upcoming celebration? Reach out and Athena Pastry Co.
                        will follow up.
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <label className="sm:col-span-2">
                            <span className="text-sm font-bold">
                                {" "}
                                Full Name{" "}
                            </span>
                            <input
                                required
                                type="text"
                                name="fullName"
                                autoComplete="name"
                                className="form-input"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-bold"> Email </span>
                            <input
                                required
                                type="email"
                                name="email"
                                autoComplete="email"
                                className="form-input"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-bold"> Phone </span>
                            <input
                                required
                                type="tel"
                                name="phone"
                                autoComplete="tel"
                                className="form-input"
                            />
                        </label>

                        <label className="sm:col-span-2">
                            <span className="text-sm font-bold">
                                Notes
                            </span>
                            <textarea
                                name="notes"
                                rows={4}
                                placeholder="Please enter any questions, details, or comments here! We will get back to you as soon as possible."
                                className="form-input resize-y"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-navy px-6 py-3.5 text-cream hover:bg-navy-dark"
                    >
                        Submit
                    </button>
                </section>

                <section className="border border-navy/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,53,88,0.08)] sm:p-9">
                    <h2 className="font-heading text-3xl">How Can We Help?</h2>

                    <p className="mt-2 leading-relaxed text-navy/65">
                        For detailed pastry requests, use the custom-order form
                        so we can collect everything in one place.
                    </p>

                    <div className="mt-8 grid gap-4">
                        <Link
                            to="/custom-orders"
                            className="bg-navy px-7 py-3.5 text-center text-cream hover:bg-navy-dark"
                        >
                            Start a Custom Order
                        </Link>

                        <Link
                            to="/menu"
                            className="border border-navy px-7 py-3.5 text-center hover:bg-cream"
                        >
                            Browse the Menu
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ContactPage;
