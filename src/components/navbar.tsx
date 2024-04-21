"use client";
import Link from "next/link";
import Cart from "./cart";
import { useState } from "react";

const Navbar = () => {
  const [showCart, setShowCart] = useState(true);

  return (
    <div className={`navbar fixed top-0 left-0 z-10 w-full bg-[#F6AC1C]`}>
      <div className="navbar-wrapper flex justify-between items-center gap-2 py-3 px-4 sm:px-10 max-w-[90rem] mx-auto">
        <Link href="/">
          <img src="images/logo.png" alt="LOGO" />
        </Link>
        {showCart ? (
          <button
            type="button"
            className="text-white"
            onClick={() => setShowCart(false)}>
            <svg className="fill-white h-6 w-6">
              <use xlinkHref="/icons.svg#icon-clear"></use>
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="text-white"
            onClick={() => setShowCart(true)}>
            <svg className="fill-white h-6 w-6">
              <use xlinkHref="/icons.svg#icon-cart"></use>
            </svg>
          </button>
        )}
      </div>
      <Cart showCart={showCart} />
    </div>
  );
};

export default Navbar;
