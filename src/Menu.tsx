export type MenuItem = {
    id: string,
    name: string,
    price: number,
    quantity: number,
    flavorOptions?: string[],
}


export const initialMenuItems: MenuItem[] = [
    {
        id: "baklava-rolls",
        name: "Baklava Rolls",
        price: 0,
        quantity: 0,
    },
    {
        id: "baklava-nests",
        name: "Baklava Nests (walnut, pistachio or almond)",
        price: 0,
        quantity: 0,
        flavorOptions: ["Walnut", "Pistachio", "Almond"],
    },
    {
        id: "baklava-roses",
        name: "Baklava Roses",
        price: 0,
        quantity: 0,
    },
    {
        id: "koulourakia",
        name: "Koulourakia",
        price: 0,
        quantity: 0,
    },
    {
        id: "finikia",
        name: "Finikia",
        price: 0,
        quantity: 0,
    },
    {
        id: "amygdalota",
        name: "Amygdalota",
        price: 0,
        quantity: 0,
    },
    {
        id: "custom-variety-pack",
        name: "Custom Variety Pack",
        price: 0,
        quantity: 0,
    },
];
