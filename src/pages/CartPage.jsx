import CartTotal from "@/components/CartTotal";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShopContext } from "@/context/ShopContext";
import { Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const CartPage = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      // 'itemId' for each product's ID
      for (const size in cartItems[itemId]) {
        // 'size' for each size in the cart
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR "} text2={"CART"} />
      </div>

      {/* Check if cartData is empty and display the message if true */}
      {cartData.length === 0 ? (
        <p className="text-center text-lg mt-5 text-gray-500 italic">
          Your cart is empty...
        </p>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt="image"
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>

                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 rounded-xl bg-peach-100 text-peach-900">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <Input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === 0
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border rounded-xl max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
                <Trash2
                  color="#f5503e"
                  className="cursor-pointer mr-4"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Only show CartTotal if there are items in the cart */}
      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />

            <div className="w-full text-end">
              <Button
                onClick={() => navigate("/place-order")}
                className="rounded-xl text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
