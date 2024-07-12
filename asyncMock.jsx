const products = [
  {
    id: "1",
    name: "Harley Davidson Sportster",
    price: 14599,
    category: "harley",
    img: "https://www.motorcyclespecs.co.za/Gallery_A-L_16/Harley-Roadster-19_02.jpg",
    stock: 30,
    description: "Harley Davidson XL 1200R Sportster Rodaster 2016",
  },
  {
    id: "2",
    name: "Honda CBR1000RR",
    price: 16699,
    category: "honda",
    img: "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/trims/trim-main/cbr1000rr/2024/2024-cbr1000rr-grand_prix_red-650x380.png",
    stock: 30,
    description: "Honda CBR1000RR 2024 1000cc",
  },
  {
    id: "3",
    name: "Yamaha YZF-R1M",
    price: 27399,
    category: "yamaha",
    img: "https://yamahamotorsports.com/media/images_products/2024-yzf-r1m/1200px/24-YZF1000M-BWM-360-03-36.JPG.webp",
    stock: 30,
    description: "Yamaha YZF-R1M 2024 1000cc",
  },
  {
    id: "4",
    name: "Kawasaki ZX10R",
    price: 17799,
    category: "kawasaki",
    img: "https://content2.kawasaki.com/ContentStorage/KMC/Products/9093/b81726fe-97ba-4fba-a307-19add955e0fa.png?w=675",
    stock: 30,
    description: "Kawasaki ZX10R 2024 1000cc",
  },
  {
    id: "5",
    name: "Suzuki GSX-R1000",
    price: 17799,
    category: "suzuki",
    img: "https://images.carandbike.com/bike-images/colors/suzuki/gsx-r1000/suzuki-gsx-r1000-metallic-triton-blue.png?v=1",
    stock: 30,
    description: "Suzuki GSX-R1000 2024",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    });
  });
};
