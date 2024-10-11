import { createContext, useEffect, useState } from "react";
import { products } from "@/assets/assets";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { CircleAlert, CircleCheck } from "lucide-react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "€";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CircleAlert className="mr-2" />
            Please select product size.
          </div>
        ),
      });
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    toast({
      variant: "succes",
      title: (
        <div className="flex items-center">
          <CircleCheck className="mr-2" />
          Item is added to cart.
        </div>
      ),
    });
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error in getCartCount:", error);
        }
      }
    }
    return totalCount; // The return should be placed outside the loop.
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error("Error in getCartAmount:", error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
