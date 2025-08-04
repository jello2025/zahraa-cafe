export type MenuItemTypes = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export const menu: MenuItemTypes[] = [
  {
    id: 1,
    name: "Something Else Latte",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/742/327/small_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png",
    description:
      "A smooth and creamy latte with a unique twist that'll surprise your taste buds.",
  },
  {
    id: 2,
    name: "Wow Affogato",
    image:
      "https://png.pngtree.com/png-clipart/20240325/original/pngtree-watercolor-affogato-coffee-png-image_14672225.png",
    description:
      "Bold espresso poured over vanilla ice cream — a dessert and coffee in one.",
  },
  {
    id: 3,
    name: "Too good to be drunk Macchiato",
    image:
      "https://png.pngtree.com/png-clipart/20240314/original/pngtree-espresso-macchiato-coffee-drink-with-foamed-milk-png-image_14593671.png",
    description:
      "A bold espresso shot softened with a dollop of velvety milk foam.",
  },
  {
    id: 4,
    name: "Not Your Usual Cappuccino",
    image: "https://pngimg.com/d/cappuccino_PNG61.png",
    description:
      "Classic cappuccino, elevated with extra froth and unexpected flavors.",
  },
  {
    id: 5,
    name: "Drama Queen Espresso",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/095/748/non_2x/shot-of-rich-espresso-with-a-creamy-top-png.png",
    description:
      "A rich, intense shot of espresso with a flair for the dramatic — just like you.",
  },
];
