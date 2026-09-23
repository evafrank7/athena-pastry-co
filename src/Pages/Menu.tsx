import { useState } from "react";
import { useCart } from "../context/CartContext";
import { initialMenuItems } from "../data/menuItems";

function formatPrice(priceInCents: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(priceInCents / 100);
}

const Menu = () => {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState<Record<string, number>>(
        Object.fromEntries(initialMenuItems.map((item) => [item.id, 1])),
    );
    const [flavors, setFlavors] = useState<Record<string, string>>({
        "baklava-nests": "Walnut",
    });
    const [addedItem, setAddedItem] = useState<string | null>(null);

    function changeQuantity(id: string, amount: number) {
        setQuantities((current) => ({
            ...current,
            [id]: Math.max(1, (current[id] ?? 1) + amount),
        }));
    }

    return (
        <main className="bg-cream-pale text-navy">
            <section className="border-y border-border bg-cream px-6 py-16 text-center sm:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">
                    Traditional recipes, timeless flavors
                </p>
                <h1 className="mt-3 font-heading text-5xl sm:text-6xl">Our Menu</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-navy/75">
                    Handcrafted Greek pastries made in small batches for everyday
                    moments, celebrations, and everything in between.
                </p>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
                <div className="mb-10 flex items-center justify-center gap-5">
                    <span className="h-px w-12 bg-navy/35" />
                    <h2 className="text-sm font-bold uppercase tracking-[0.28em]">
                        Greek Pastries
                    </h2>
                    <span className="h-px w-12 bg-navy/35" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {initialMenuItems.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col overflow-hidden bg-white shadow-[0_5px_24px_rgba(23,38,58,0.09)]"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-64 w-full object-cover"
                            />

                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <h2 className="font-heading text-3xl leading-none">
                                        {item.name}
                                    </h2>
                                    <p className="shrink-0 font-semibold">
                                        {item.price > 0
                                            ? `${formatPrice(item.price)} / ${item.unit}`
                                            : "Pricing soon"}
                                    </p>
                                </div>

                                <p className="mt-3 flex-1 leading-relaxed text-navy/70">
                                    {item.description}
                                </p>

                                {item.flavorOptions && (
                                    <label className="mt-5 block text-xs font-bold uppercase tracking-[0.2em]">
                                        Flavor
                                        <select
                                            value={flavors[item.id] ?? item.flavorOptions[0]}
                                            onChange={(event) =>
                                                setFlavors((current) => ({
                                                    ...current,
                                                    [item.id]: event.target.value,
                                                }))
                                            }
                                            className="mt-2 w-full border border-border bg-cream-pale px-4 py-3 font-body text-base normal-case tracking-normal text-navy outline-none focus:border-blue"
                                        >
                                            {item.flavorOptions.map((flavor) => (
                                                <option key={flavor}>{flavor}</option>
                                            ))}
                                        </select>
                                    </label>
                                )}

                                <div className="mt-5 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                                            Quantity
                                        </p>
                                        <div className="mt-2 inline-flex items-center border border-border bg-cream-pale">
                                            <button
                                                type="button"
                                                aria-label={`Decrease ${item.name} quantity`}
                                                onClick={() => changeQuantity(item.id, -1)}
                                                className="px-4 py-2 text-xl hover:bg-cream-dark"
                                            >
                                                &minus;
                                            </button>
                                            <span className="min-w-10 text-center">
                                                {quantities[item.id] ?? 1}
                                            </span>
                                            <button
                                                type="button"
                                                aria-label={`Increase ${item.name} quantity`}
                                                onClick={() => changeQuantity(item.id, 1)}
                                                className="px-4 py-2 text-xl hover:bg-cream-dark"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            addToCart(
                                                item,
                                                quantities[item.id] ?? 1,
                                                flavors[item.id],
                                            );
                                            setAddedItem(item.id);
                                        }}
                                        className="bg-navy px-6 py-3 text-cream transition-colors hover:bg-navy-dark"
                                    >
                                        {addedItem === item.id ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Menu;
