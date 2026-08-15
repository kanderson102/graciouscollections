export interface Product {
  id: string;
  name: string;
  price: number; // in USD
  category: string;
  image: string;
  images: string[];
  sizes: string[];
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "classic-linen-dress",
    name: "Son de Flor Classic Linen Dress",
    price: 195,
    category: "Vintage Dresses",
    image: "/images/dress_2.jpg",
    images: ["/images/dress_2.jpg"],
    sizes: ["XS", "S", "M"],
    description: "A timeless, vintage-inspired sky blue linen day dress. Features a fitted short-sleeve bodice with button-down front detailing, a rounded Peter Pan collar, and a signature romantic full-circle skirt with hidden side pockets. Made from softened Baltic linen, perfect for pastoral wanders or sunny days.",
    details: [
      "100% Softened Baltic Linen",
      "Short sleeves with Peter Pan collar",
      "Elegant button-front bodice",
      "Signature full-circle skirt with side pockets",
      "Breathable, durable, and natural",
      "Model is wearing size S"
    ]
  },
  {
    id: "victorian-linen-dress",
    name: "Son de Flor Victorian Linen Dress",
    price: 260,
    category: "Vintage Gowns",
    image: "/images/dress_3.jpg",
    images: ["/images/dress_3.jpg"],
    sizes: ["S", "M"],
    description: "A breathtaking Victorian-inspired long-sleeve gown in softened magnolia white linen. Features an elegant high ruffled collar, detailed lace inserts at the neckline and cuffs, a buttoned bodice, and a sash tie at the back waist that flows into a full-circle skirt. Soft, breathable, and timeless.",
    details: [
      "100% Softened Baltic Linen",
      "Victorian high collar with lace details",
      "Button-down front bodice",
      "Adjustable back sash waist tie",
      "Feminine full-circle skirt",
      "Model is wearing size S"
    ]
  },
  {
    id: "1940s-bridal-nightgown",
    name: "1940s Silk Puff Sleeve Nightgown",
    price: 185,
    category: "Lingerie",
    image: "/images/dress_1.png",
    images: ["/images/dress_1.png"],
    sizes: ["S", "M", "L"],
    description: "An exquisite 1940s liquid silk satin nightgown. Features breathtaking sheer lace inserts, romantic puffed sleeves with delicate elasticized cuffs, a sweetheart neckline, and a flowing skirt that sweeps gracefully.",
    details: [
      "Circa 1940s",
      "100% Liquid Silk Satin",
      "Sheer floral lace paneling",
      "Best fit sizes: Small to Medium",
      "Hand wash with care"
    ]
  },
  {
    id: "embroidered-tulle-veil",
    name: "Embroidered Tulle Bridal Veil",
    price: 145,
    category: "Veils & Accessories",
    image: "/images/veil_1.png",
    images: ["/images/veil_1.png"],
    sizes: ["One Size"],
    description: "A delicate cathedral-length bridal veil crafted from soft tulle, featuring fine floral lace embroidery around the scalloped edges. Flows beautifully and pairs perfectly with antique or vintage-inspired wedding dresses.",
    details: [
      "Cathedral length (approx. 3 meters)",
      "Soft ivory illusion tulle",
      "Intricate floral lace embroidery trim",
      "Includes silver metal comb attached",
      "Brand new vintage-inspired accessory"
    ]
  }
];
