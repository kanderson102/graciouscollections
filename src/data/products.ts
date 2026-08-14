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
    id: "1940s-bridal-nightgown",
    name: "1940s Bridal Puff Sleeve Nightgown",
    price: 185,
    category: "Lingerie",
    image: "/images/dress_1.png",
    images: ["/images/dress_1.png"],
    sizes: ["S", "M", "L"],
    description: "An exquisite 1940s liquid silk satin bridal nightgown. Features breathtaking sheer lace inserts, romantic puffed sleeves with delicate elasticized cuffs, a sweetheart neckline, and a flowing skirt that sweeps gracefully. A rare piece of history in beautiful vintage condition.",
    details: [
      "Circa 1940s",
      "100% Liquid Silk Satin",
      "Sheer floral lace paneling",
      "Best fit sizes: Small to Medium",
      "Hand wash with care"
    ]
  },
  {
    id: "1970s-lace-slip-dress",
    name: "1970s Lace Silk Slip Dress",
    price: 110,
    category: "Lingerie",
    image: "/images/dress_2.png",
    images: ["/images/dress_2.png"],
    sizes: ["XS", "S", "M"],
    description: "A romantic 1970s cream slip dress with soft satin thin straps, scalloped lace trim along the bust and hemline, and a bias-cut skirt that drapes beautifully. Extremely soft and luxurious, perfect for modern loungewear or styling as an elegant day dress.",
    details: [
      "Circa 1970s",
      "Silk blend fabric with scalloped nylon lace",
      "Adjustable delicate shoulder straps",
      "Excellent vintage condition",
      "Model is 5'7\" wearing size S"
    ]
  },
  {
    id: "victorian-high-neck-gown",
    name: "Victorian Silk High-Neck Gown",
    price: 620,
    category: "Vintage Bridal",
    image: "/images/dress_3.png",
    images: ["/images/dress_3.png"],
    sizes: ["S"],
    description: "A stunning authentic Victorian silk gown dating back to the late 19th century. Features an elegant high collar, intricate lace overlay detailing on the bodice and cuffs, voluminous sleeves, and a flowing train. A true collector's heirloom in remarkable vintage condition.",
    details: [
      "Circa late 1890s",
      "Raw silk and antique handmade lace",
      "Delicate hook-and-eye closures at the back",
      "Museum-quality collector item",
      "Recommended size: Small (vintage size)"
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
