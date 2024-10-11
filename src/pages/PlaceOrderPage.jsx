import { assets } from "@/assets/assets";
import CartTotal from "@/components/CartTotal";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useState } from "react";

const PlaceOrderPage = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY "} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
          <Input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
        </div>

        <Input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
        />
        <Input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
        />

        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
          <Input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <Input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
          <Input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
          />
        </div>
        <Input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded-xl py-1.5 px-3.5 w-full"
        />
      </div>

      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT "} text2={"METHOD"} />
          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="stripe"
                className="h-5 mx-4"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl "
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <Button
              onClick={() => navigate("/orders")}
              className="px-16 py-3 text-sm rounded-xl"
            >
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
