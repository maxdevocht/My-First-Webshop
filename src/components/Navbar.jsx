import { ChevronLeft, Search, ShoppingBasket, User } from "lucide-react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useState } from "react";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, isLoggedIn, navigate } =
    useContext(ShopContext);

  const handleUserClick = () => {
    if (isLoggedIn) {
      // Navigate to the dropdown menu options if logged in
      // You might want to do something else to show the dropdown here
    } else {
      // Redirect to the login page if not logged in
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium mb-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" width={36} />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-peach-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-peach-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-peach-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-peach-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Search
          className="cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Link to="/login">
              <User className="cursor-pointer" onClick={handleUserClick} />
            </Link>
          </DropdownMenuTrigger>
          {isLoggedIn && ( // Only show dropdown if logged in
            <DropdownMenuContent className="mt-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <Link to="/cart" className="relative">
          <ShoppingBasket className="cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 leading-4 text-center bg-peach-600 text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar menu for small screens */}
      <div
        className={`absolute h-screen overflow-hidden top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-400">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3 cursor-pointer"
          >
            <ChevronLeft />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-t"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-t"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-t"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
