// import React from "react";
import { BsApple } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

// import { useNavigate } from "react-router-dom";   //is a function,that u can create whatever routing functions that u require

import { NavLink } from "react-router-dom"; //link this point to a specific route

const NavbarItem = ({path, name }) => {
  return (
    <p className="px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out">
      <NavLink to={path}>{name}</NavLink> 
    </p>
  );
};

function Navbar() {
  return (
    <div className="fixed w-full p-4 text-gray-100 bg-gray-800 flex flex-row gap-10 justify-between items-center shadow-md">
      <BsApple />
      {/* <NavLink to="/store">Store</NavLink> */}
      <div className="flex flex-row gap-10">
        <NavbarItem path="/store" name="Store" />
        <NavbarItem path="/social" name="Social" />
        <NavbarItem path="/contact" name="Contact" />
        <NavbarItem path="/help" name="Help" />
        <NavbarItem path="/login" name="Login" />
      </div>

      <div className="flex flex-row gap-3">
        <BsSearch />
        <FiShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
