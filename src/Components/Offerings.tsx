import baklava from "../Assets/images/baklava.jpeg";
import sugarCookie from "../Assets/images/sugar-cookie.jpeg";
import cookieCollection from "../Assets/images/cookie-collection.jpeg";
import chocBaklava from "../Assets/images/choc-baklava.jpeg";

const offerings = [
    {
        title: "Traditional Pastries",
        picture: baklava,
        paragraphs: ["Classic Greek favorites, made with authentic flavors."],
        redirect: "View Menu",
    },
    {
        title: "Cookies & Treats",
        picture: sugarCookie,
        paragraphs: ["A variety of handcrafted goodies for every sweet tooth."],
        redirect: "View Menu",
    },
    {
        title: "Seasonal Specialties",
        picture: cookieCollection,
        paragraphs: ["Curated treats for the holidays and special occasions."],
        redirect: "View Menu",
    },
    {
        title: "Custom Orders",
        picture: chocBaklava,
        paragraphs: ["Cakes, pastry boxes, and more for your special moments."],
        redirect: "Place a Custom Order",
    },
];

const Offerings = () => {
    return (
        <div className="bg-cream-pale text-navy py-16">
            <div className="flex items-center justify-center gap-6">
                <span className="h-px w-12 bg-navy/40" />
                <h2 className="text-xl uppercase tracking-[0.25em] text-navy">
                    Our Offerings
                </h2>
                <span className="h-px w-12 bg-navy/40" />
            </div>
            <div 
                className="grid grid-cols-1 gap-6 px-6 pt-10 text-center md:grid-cols-2 lg:grid-cols-4 lg:px-8"
            >
                {offerings.map(({ title, picture, paragraphs, redirect }) => {
                    return (
                        <div
                            key={title}
                            className="flex flex-col overflow-hidden bg-white shadow-[0_4px_18px_rgba(23,38,58,0.1)]"
                        >
                            <img
                                src={picture}
                                alt={title}
                                className="h-64 w-full object-cover"
                            />
                            <div className="flex flex-1 flex-col items-center px-6 py-5">
                                <h3 className="font-heading text-2xl text-navy">
                                    {title}
                                </h3>
                                {paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="mt-2 flex-1 leading-snug text-navy/80"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                                <a
                                    href="/menu"
                                    className="mt-4 inline-flex items-center justify-center gap-3 text-navy underline-offset-4 hover:underline"
                                >
                                    {redirect} <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Offerings;
