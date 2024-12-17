

const menuData = [
    {
      id:1,
      title: "Combo 1",
      description: "Tacos chillis supreme + 100g de papas + 1 bebida de 300ml. ",
      price: 7990,
      options: ["pollo", "vegetariano", "vegano"],
      category: "combos",
      image: "/images/combos/combo1.jpg",
      stock: 10
    },
    {
      id:2,
      title: "Combo 2",
      description: "1 burrito clásico + 100g de papas + 1 bebida de 300ml.",
      price: 8990,
      options: ["pollo", "vegetariano", "vegano"],
      category: "combos",
      image: "/images/combos/combo2.jpg",
      stock:15
    },
    {
      id:3,
      title: "Flautas de Pollo",
      description: "4 flautas. Tortillas de trigo fritas, rellenas de pollo mechado y queso gouda. Acompañadas de salsa de la casa.",
      price: 5790,
      category: "aperitivos",
      image: "/images/aperitivos/flautas-de-pollo.jpg",
      stock: 15
    },
    {
      id:4,
      title: "Nachos chili-carne",
      description: "Nachos con porotos y carne molida, bañados en queso fundido.",
      price: 6990,
      category: "aperitivos",
      image: "/images/aperitivos/nachos-chili-carne.jpg",
      stock: 12
    },
    {
      id:5,
      title: "Tacos chillis supreme",
      description: "2 tacos, 100g de chili con carne, tomate, cebolla, guacamole, lechuga, salsa de la casa y queso fundido, servidos en tortillas de maíz crujiente.",
      price: 7790,
      category: "tacos",
      image: "/images/tacos/tacos-chillis-supreme.jpg",
      stock: 18
    },
    {
      id:6,
      title: "Tacos clásicos",
      description: "2 tacos, 100g de proteína (carne, mixto, pollo o veggie) lechuga, pico de gallo o pebre, guacamole y salsa de la casa, servidos en tortillas de trigo.",
      price: 6490,
      category: "tacos",
      image: "/images/tacos/tacos-clasicos.jpg",
      stock: 8
    },
    {
      id:7,
      title: "Burritos chillis supreme",
      description: "100g de chili con carne, tomate, cebolla, guacamole, salsa de la casa, nachos y queso fundido, envuelto en tortilla de trigo. Acompañado de nachos.",
      price: 8990,
      category: "burritos",
      image: "/images/burritos/burritos-chillis-supreme.jpg",
      stock: 20
    },
    {
      id:8,
      title: "Burritos clásicos",
      description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla y salsa de la casa, envuelto en tortilla de trigo.",
      price: 7890,
      category: "burritos",
      image: "/images/burritos/burritos-clasicos.jpg",
      stock: 13
    },
  ];
  
  export const fetchMenuData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.1;

            if (shouldFail) {
                reject(new Error("Hubo un error al obtener los datos del menú"));
            } else {
                resolve(menuData);
            }
        }, 3000);
    });
};


export const fetchOneMenuData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const shouldFail = Math.random() < 0.1;
      if (shouldFail) {
        reject(new Error("Hubo un error al obtener el plato seleccionado"));
      } else {
        
        const menuItem = menuData.find((item) => item.id == id);

        if (menuItem) {
          resolve(menuItem);
        } else {
         
          reject(new Error(`No se encontró ningún elemento con el ID: ${id}`));
        }
      }
    }, 2000); 
  });
};





// const menuData = [
//   {
//     id:1,
//     title: "Combo 1",
//     description: "Tacos chillis supreme + 100g de papas + 1 bebida de 300ml. ",
//     price: 7990,
//     options: ["pollo", "vegetariano", "vegano"],
//     category: "combo",
//     image: "/images/combos/combo1.jpg",
//     stock: 10
//   },
//   {
//     id:2,
//     title: "Combo 2",
//     description: "1 burrito clásico + 100g de papas + 1 bebida de 300ml.",
//     price: 8990,
//     options: ["pollo", "vegetariano", "vegano"],
//     category: "combo",
//     image: "/images/combos/combo2.jpg"
//   },
//   {
//     id:3,
//     title: "Combo 3",
//     description: "2 tacos clásicos + 1 burrito clásico + 100g de papas + 1 bebida.",
//     price: 14990,
//     options: ["pollo", "vegetariano", "vegano"],
//     category: "combo",
//     image: "/images/combos/combo3.jpg",
//     stock: 10
//   },
//   {
//     id:4,
//     title: "Combo 4",
//     description: "2 tacos clásicos + 1 burrito clásico + 1 quesadilla + 200g papas + 2 bebidas de 300ml.",
//     price: 21990,
//     options: ["pollo", "vegetariano"],
//     category: "combo",
//     image: "/images/combos/combo4.jpg",
//     stock: 10
//   },
//   {
//     id:5,
//     title: "Combo Cheese",
//     description: "1 quesadilla + 100g de papas + 1 bebida.",
//     price: 9190,
//     options: ["pollo", "vegetariano"],
//     category: "combo",
//     image: "/images/combos/combo-cheese.jpg",
//     stock: 10
//   },
//   {
//     id: 6,
//     title: "Mega Combo",
//     description: "4 tacos clásicos + 2 burritos clásicos + 1 quesadilla + 200g de papas + bebida 2 l.",
//     price: 33990,
//     options: ["pollo", "vegetariano"],
//     category: "combo",
//     image: "/images/combos/mega-combo.jpg",
//     stock: 10
//   },
//   {
//     title: "Mega Combo",
//     description: "4 tacos clásicos + 2 burritos clásicos + 1 quesadilla + 200g de papas + bebida 2 l.",
//     price: 33990,
//     options: ["pollo", "vegetariano"],
//     category: "combo",
//     image: "/images/combos/mega-combo.jpg",
//     stock: 10
//   },
//   {
//     title: "Súper Combo",
//     description: "4 tacos clásicos + 1 burrito clásico + 1 quesadilla + 200g de papas + bebida 2 l.",
//     price: 26990,
//     options: ["pollo", "vegetariano"],
//     category: "combo",
//     image: "/images/combos/super-combo.webp",
//     stock: 10
//   },
//   {
//     title: "Flautas de Pollo",
//     description: "4 flautas. Tortillas de trigo fritas, rellenas de pollo mechado y queso gouda. Acompañadas de salsa de la casa.",
//     price: 5790,
//     category: "aperitivo",
//     image: "/images/aperitivos/flautas-de-pollo.jpg",
//     stock: 10
//   },
//   {
//     title: "Nachos chili-carne",
//     description: "Nachos con porotos y carne molida, bañados en queso fundido.",
//     price: 6990,
//     category: "aperitivo",
//     image: "/images/aperitivos/nachos-chili-carne.jpg",
//     stock: 10
//   },
//   {
//     title: "Nachos con guacamole",
//     description: "Nachos con guacamole y queso fundido.",
//     price: 5150,
//     category: "aperitivo",
//     image: "/images/aperitivos/nachos-con-guacamole.jpg",
//     stock: 10
//   },
//   {
//     title: "Nachos supreme",
//     description: "Nachos con guacamole, chili con carne y pico de gallo, bañados en queso fundido.",
//     price: 7990,
//     category: "aperitivo",
//     image: "/images/aperitivos/nachos-supreme.jpg",
//     stock: 10
//   },
//   {
//     title: "Tacos chillis supreme",
//     description: "2 tacos, 100g de chili con carne, tomate, cebolla, guacamole, lechuga, salsa de la casa y queso fundido, servidos en tortillas de maíz crujiente.",
//     price: 7790,
//     category: "tacos",
//     image: "/images/tacos/tacos-chillis-supreme.jpg",
//     stock: 10
//   },
//   {
//     title: "Tacos clásicos",
//     description: "2 tacos, 100g de proteína (carne, mixto, pollo o veggie) lechuga, pico de gallo o pebre, guacamole y salsa de la casa, servidos en tortillas de trigo.",
//     price: 6490,
//     options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
//     category: "tacos",
//     image: "/images/tacos/tacos-clasicos.jpg",
//     stock: 10
//   },
//   {
//     title: "Tacos crispy",
//     description: "100g de pollo apanado con tortilla de trigo, guacamole, pico de gallo, lechuga y salsa de la casa, acompañados de papas rústicas.",
//     price: 7790,
//     category: "tacos",
//     image: "/images/tacos/tacos-crispy.jpg",
//     stock: 10
//   },
//   {
//     title: "Tacos crunch",
//     description: "2 tacos, 100g de proteína (carne, mixto, pollo o veggie) lechuga, pico de gallo o pebre, guacamole y salsa de la casa, servidos sobre tortilla de maíz crujiente y acompañados con nachos.",
//     price: 7990,
//     category: "tacos",
//     image: "/images/tacos/tacos-crunch.jpg",
//     stock: 10
//   },
//   {
//     title: "Burritos chillis supreme",
//     description: "100g de chili con carne, tomate, cebolla, guacamole, salsa de la casa, nachos y queso fundido, envuelto en tortilla de trigo. Acompañado de nachos.",
//     price: 8990,
//     category: "burritos",
//     image: "/images/burritos/burritos-chillis-supreme.jpg",
//     stock: 10
//   },
//   {
//     title: "Burritos clásicos",
//     description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla y salsa de la casa, envuelto en tortilla de trigo.",
//     price: 7890,
//     options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
//     category: "burritos",
//     image: "/images/burritos/burritos-clasicos.jpg",
//     stock: 10
//   },
//   {
//     title: "Burrito Crispy",
//     description: "100g de pollo apanado, tortilla de trigo, lechuga, tomate, cebolla, cilantro y salsa de la casa, acompañado de papas rústicas.",
//     price: 8990,
//     category: "burritos",
//     image: "/images/burritos/burritos-crispy.jpg",
//     stock: 10
//   },
//   {
//     title: "Burritos crunch",
//     description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla, salsa de la casa, nachos y queso fundido envuelto en tortilla de trigo. Acompañado de nachos.",
//     price: 8990,
//     options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
//     category: "burritos",
//     image: "/images/burritos/burritos-crunch.jpg",
//     stock: 10
//   },
//   {
//     title: "Burritos guacamole",
//     description: "100g de proteína (carne, mixto, pollo o veggie) lechuga, tomate, cebolla, salsa de la casa, guacamole y porotos rojos, envuelto en tortilla de trigo. Acompañado de nachos.",
//     price: 8900,
//     options: ["pollo", "mixto", "carne", "vegetariano", "vegano"],
//     category: "burritos",
//     image: "/images/burritos/burritos-guacamole.jpg",
//     stock: 10
//   }
// ];