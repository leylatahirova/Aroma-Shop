
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
   products: [
        {
          id: 1,
          image: "/images/products/product1.png",
          category: "Accessories",
          title: "Quartz Belt Watch",
          price: "$150.00",
          brand: "samsung",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 2,
          image: "/images/products/product2.png",
          category: "Beauty",
          title: "Women Freshwash",
          price: "$140.00",
          brand: "gionee",
          color: "white",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 3,
          image: "/images/products/product3.png",
          category: "Decor",
          title: "Room Flash Light",
          price: "$160.00",
          brand: "asus",
          color: "white",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 4,
          image: "/images/products/product4.png",
          category: "Decor",
          title: "Room Flash Light",
          price: "$190.00",
          brand: "micromax",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 5,
          image: "/images/products/product5.png",
          category: "Accessories",
          title: "Man Office Bag",
          price: "$110.00",
          brand: "apple",
          color: "blackLeather",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 6,
          image: "/images/products/product6.png",
          category: "Kids Toy",
          title: "Charging Car",
          price: "$100.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 7,
          image: "/images/products/product7.png",
          category: "Electronics",
          title: "Blutooth Speaker",
          price: "$120.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 8,
          image: "/images/products/product8.png",
          category: "Accessories",
          title: "Charging Car",
          price: "$160.00",
          brand: "samsung",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 9,
          image: "/images/products/product9.png",
          category: "Accessories",
          title: "Architecture Book",
          price: "$160.00",
          brand: "apple",
          color: "spacegrey",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 10,
          image: "/images/products/product10.png",
          category: "Beauty",
          title: "Tallow Cream",
          price: "$160.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 11,
          image: "/images/products/product11.png",
          category: "Beauty",
          title: "Yuzu Organic Soap",
          price: "$180.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 12,
          image: "/images/products/product12.png",
          category: "Accessories",
          title: "Workout Bottle (16oz)",
          price: "$160.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 13,
          image: "/images/products/product13.png",
          category: "Accessories",
          title: "Signet Ring — 5mm",
          price: "$160.00",
          brand: "apple",
          color: "gold",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 14,
          image: "/images/products/product14.png",
          category: "Accessories",
          title: "iPhone Xs — Case",
          price: "$190.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 15,
          image: "/images/products/product15.png",
          category: "Accessories",
          title: "Minimalist wallet",
          price: "$130.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
        {
          id: 16,
          image: "/images/products/product16.png",
          category: "Accessories",
          title: "Hexagon Pen",
          price: "$140.00",
          brand: "apple",
          color: "black",
          availibility: "In Stock",
          description: "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
        },
      ],
      cart: [],
};


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload], 
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload), 
      };
    default:
      return state;
  }
};

export default productReducer;