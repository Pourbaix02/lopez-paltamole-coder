

const menuData = [
    {
      title: "Combo 1",
      description: "Tacos chillis supreme",
      price: 7990,
      options: ["pollo", "vegetariano", "vegano"],
      category: "combo",
      image: "/images/combos/combo1.jpg"
    },
    {
      title: "Combo 2",
      description: "1 burrito clásico + 100g de papas + 1 bebida de 300ml.",
      price: 8990,
      options: ["pollo", "vegetariano", "vegano"],
      category: "combo",
      image: "/images/combos/combo2.jpg"
    },
    {
      title: "Combo 3",
      description: "2 tacos clásicos + 1 burrito clásico + 100g de papas + 1 bebida.",
      price: 14990,
      options: ["pollo", "vegetariano", "vegano"],
      category: "combo",
      image: "/images/combos/combo3.jpg"
    },
    {
      title: "Combo 4",
      description: "2 tacos clásicos + 1 burrito clásico + 1 quesadilla + 200g papas + 2 bebidas de 300ml.",
      price: 21990,
      options: ["pollo", "vegetariano"],
      category: "combo",
      image: "/images/combos/combo4.jpg"
    },
    {
      title: "Combo Cheese",
      description: "1 quesadilla + 100g de papas + 1 bebida.",
      price: 9190,
      options: ["pollo", "vegetariano"],
      category: "combo",
      image: "/images/combos/combo-cheese.jpg"
    },
    {
      title: "Mega Combo",
      description: "4 tacos clásicos + 2 burritos clásicos + 1 quesadilla + 200g de papas + bebida 2 l.",
      price: 33990,
      options: ["pollo", "vegetariano"],
      category: "combo",
      image: "/images/combos/mega-combo.jpg"
    },
    {
      title: "Súper Combo",
      description: "4 tacos clásicos + 1 burrito clásico + 1 quesadilla + 200g de papas + bebida 2 l.",
      price: 26990,
      options: ["pollo", "vegetariano"],
      category: "combo",
      image: "/images/combos/super-combo.webp"
    },
    {
      title: "Flautas de Pollo",
      description: "4 flautas. Tortillas de trigo fritas, rellenas de pollo mechado y queso gouda. Acompañadas de salsa de la casa.",
      price: 5790,
      category: "aperitivo",
      image: "/images/aperitivos/flautas-de-pollo.jpg"
    },
    {
      title: "Nachos chili-carne",
      description: "Nachos con porotos y carne molida, bañados en queso fundido.",
      price: 6990,
      category: "aperitivo",
      image: "/images/aperitivos/nachos-chili-carne.jpg"
    },
    {
      title: "Nachos con guacamole",
      description: "Nachos con guacamole y queso fundido.",
      price: 5150,
      category: "aperitivo",
      image: "/images/aperitivos/nachos-con-guacamole.jpg"
    },
    {
      title: "Nachos supreme",
      description: "Nachos con guacamole, chili con carne y pico de gallo, bañados en queso fundido.",
      price: 7990,
      category: "aperitivo",
      image: "/images/aperitivos/nachos-supreme.jpg"
    },
    {
      title: "Tacos chillis supreme",
      description: "2 tacos, 100g de chili con carne, tomate, cebolla, guacamole, lechuga, salsa de la casa y queso fundido, servidos en tortillas de maíz crujiente.",
      price: 7790,
      category: "tacos",
      image: "/images/tacos/tacos-chillis-supreme.jpg"
    },
    {
      title: "Tacos clásicos",
      description: "2 tacos, 100g de proteína (carne, mixto, pollo o veggie) lechuga, pico de gallo o pebre, guacamole y salsa de la casa, servidos en tortillas de trigo.",
      price: 6490,
      options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
      category: "tacos",
      image: "/images/tacos/tacos-clasicos.jpg"
    },
    {
      title: "Tacos crispy",
      description: "100g de pollo apanado con tortilla de trigo, guacamole, pico de gallo, lechuga y salsa de la casa, acompañados de papas rústicas.",
      price: 7790,
      category: "tacos",
      image: "/images/tacos/tacos-crispy.jpg"
    },
    {
      title: "Tacos crunch",
      description: "2 tacos, 100g de proteína (carne, mixto, pollo o veggie) lechuga, pico de gallo o pebre, guacamole y salsa de la casa, servidos sobre tortilla de maíz crujiente y acompañados con nachos.",
      price: 7990,
      category: "tacos",
      image: "/images/tacos/tacos-crunch.jpg"
    },
    {
      title: "Burritos chillis supreme",
      description: "100g de chili con carne, tomate, cebolla, guacamole, salsa de la casa, nachos y queso fundido, envuelto en tortilla de trigo. Acompañado de nachos.",
      price: 8990,
      category: "burritos",
      image: "/images/burritos/burritos-chillis-supreme.jpg"
    },
    {
      title: "Burritos clásicos",
      description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla y salsa de la casa, envuelto en tortilla de trigo.",
      price: 7890,
      options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
      category: "burritos",
      image: "/images/burritos/burritos-clasicos.jpg"
    },
    {
      title: "Burrito Crispy",
      description: "100g de pollo apanado, tortilla de trigo, lechuga, tomate, cebolla, cilantro y salsa de la casa, acompañado de papas rústicas.",
      price: 8990,
      category: "burritos",
      image: "/images/burritos/burritos-crispy.jpg"
    },
    {
      title: "Burritos crunch",
      description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla, salsa de la casa, nachos y queso fundido envuelto en tortilla de trigo. Acompañado de nachos.",
      price: 8990,
      options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
      category: "burritos",
      image: "/images/burritos/burritos-crunch.jpg"
    },
    {
      title: "Burritos guacamole",
      description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla, salsa de la casa, guacamole y porotos rojos, envuelto en tortilla de trigo. Acompañado de nachos.",
      price: 8900,
      options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
      category: "burritos",
      image: "/images/burritos/burritos-guacamole.jpg"
    }
  ];
  
  export const fetchMenuData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.2;
        if (success) {
          resolve(menuData);
        } else {
          reject(new Error("Error al obtener los datos del menú"));
        }
      }, 3000);
    });
  };
  