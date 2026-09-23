import baklava from "../Assets/images/baklava.jpeg";
import chocBaklava from "../Assets/images/choc-baklava.jpeg";
import cookieCollection from "../Assets/images/cookie-collection.jpeg";
import sugarCookie from "../Assets/images/sugar-cookie.jpeg";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  flavorOptions?: string[];
  description: string;
  available?: boolean;
  image: string;
  unit: string;
};

export const initialMenuItems: MenuItem[] = [
  {
    id: "baklava-rolls",
    name: "Baklava Rolls",
    price: 0,
    quantity: 0,
    description: "Crisp phyllo wrapped around a rich nut filling and finished with fragrant syrup.",
    available: true,
    image: chocBaklava,
    unit: "dozen",
  },
  {
    id: "baklava-nests",
    name: "Baklava Nests",
    price: 0,
    quantity: 0,
    flavorOptions: ["Walnut", "Pistachio", "Almond"],
    description: "Delicate coils of golden phyllo filled with your choice of finely chopped nuts.",
    available: true,
    image: baklava,
    unit: "dozen",
  },
  {
    id: "baklava-roses",
    name: "Baklava Roses",
    price: 0,
    quantity: 0,
    description: "Flaky, hand-shaped baklava with a beautiful rose finish and honeyed crunch.",
    available: true,
    image: baklava,
    unit: "dozen",
  },
  {
    id: "koulourakia",
    name: "Koulourakia",
    price: 0,
    quantity: 0,
    description: "Traditional Greek butter cookies with a tender crumb and a hint of vanilla.",
    available: true,
    image: sugarCookie,
    unit: "dozen",
  },
  {
    id: "finikia",
    name: "Finikia",
    price: 0,
    quantity: 0,
    description: "Spiced Greek cookies soaked in honey syrup and topped with crushed walnuts.",
    available: true,
    image: cookieCollection,
    unit: "dozen",
  },
  {
    id: "amygdalota",
    name: "Amygdalota",
    price: 0,
    quantity: 0,
    description: "Soft almond cookies with a lightly crisp exterior and fragrant almond center.",
    available: true,
    image: sugarCookie,
    unit: "dozen",
  },
  {
    id: "custom-variety-pack",
    name: "Custom Variety Pack",
    price: 0,
    quantity: 0,
    description: "A curated assortment of Athena favorites, packaged for sharing or gifting.",
    available: true,
    image: cookieCollection,
    unit: "box",
  },
];
