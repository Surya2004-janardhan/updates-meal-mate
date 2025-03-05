import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_14 from "./food_14.png";
import food_15 from "./food_15.png";
import food_16 from "./food_16.png";
import food_17 from "./food_17.png";
import food_18 from "./food_18.png";
import food_19 from "./food_19.png";
import food_20 from "./food_20.png";
import food_21 from "./food_21.png";
import food_22 from "./food_22.png";
import food_23 from "./food_23.png";
import food_24 from "./food_24.png";
import food_25 from "./food_25.png";

export const food_list = [
    { _id: "1", name: "Cheese Burger", image: food_1, price: 10, category: "Burger" },
    { _id: "2", name: "Chicken Burger", image: food_2, price: 12, category: "Burger" },
    { _id: "3", name: "Veggie Burger", image: food_3, price: 14, category: "Burger" },
    { _id: "4", name: "BBQ Burger", image: food_4, price: 16, category: "Burger" },
    { _id: "5", name: "Double Patty Burger", image: food_5, price: 18, category: "Burger" },

    { _id: "6", name: "Pasta Alfredo", image: food_6, price: 15, category: "Pasta" },
    { _id: "7", name: "Pasta Carbonara", image: food_7, price: 17, category: "Pasta" },
    { _id: "8", name: "Pesto Pasta", image: food_8, price: 19, category: "Pasta" },
    { _id: "9", name: "Mac & Cheese", image: food_9, price: 14, category: "Pasta" },
    { _id: "10", name: "Lasagna", image: food_10, price: 22, category: "Pasta" },

    { _id: "11", name: "Hakka Noodles", image: food_11, price: 13, category: "Noodles" },
    { _id: "12", name: "Chow Mein", image: food_12, price: 15, category: "Noodles" },
    { _id: "13", name: "Pad Thai", image: food_13, price: 20, category: "Noodles" },
    { _id: "14", name: "Spicy Ramen", image: food_14, price: 18, category: "Noodles" },
    { _id: "15", name: "Udon Noodles", image: food_15, price: 21, category: "Noodles" },

    { _id: "16", name: "Margherita Pizza", image: food_16, price: 14, category: "Pizza" },
    { _id: "17", name: "Pepperoni Pizza", image: food_17, price: 18, category: "Pizza" },
    { _id: "18", name: "BBQ Chicken Pizza", image: food_18, price: 22, category: "Pizza" },
    { _id: "19", name: "Veggie Supreme Pizza", image: food_19, price: 20, category: "Pizza" },
    { _id: "20", name: "Four Cheese Pizza", image: food_20, price: 19, category: "Pizza" },

    { _id: "21", name: "Chicken Biryani", image: food_21, price: 25, category: "Biryani" },
    { _id: "22", name: "Mutton Biryani", image: food_22, price: 30, category: "Biryani" },
    { _id: "23", name: "Veg Biryani", image: food_23, price: 20, category: "Biryani" },
    { _id: "24", name: "Hyderabadi Biryani", image: food_24, price: 28, category: "Biryani" },
    { _id: "25", name: "Dum Biryani", image: food_25, price: 27, category: "Biryani" }
].map(food => ({
    ...food,
    description: "Food provides essential nutrients for overall health and well-being"
}));
// Compare this snippet from frontend/frontend/src/assets/assets.js: