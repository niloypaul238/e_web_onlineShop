"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { CreatCont } from "@/app/Context";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname()
  const [whiteListData, setWhiteListData] = useContext(CreatCont)
  const [cart, setCart] = useContext(CreatCont)


  return (
    <nav className="bg-white shadow-md static top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Left Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            <Link href="/">DressShop</Link>
          </div>

          {/* Right Menu (Desktop) */}
          <div className="hidden items-center md:flex space-x-9">
            <Link href="/" className={`hover:text-indigo-600 ${pathName == "/" && "text-indigo-600 font-semibold"}`}>Home</Link>
            <Link href="/shoping" className={`hover:text-indigo-600 ${pathName == "/shoping" && "text-indigo-600 font-semibold"}`}>Shop</Link>
            <Link href="/contuct" className={`hover:text-indigo-600 ${pathName == "/contuct" && "text-indigo-600 font-semibold"}`}>Contuct</Link>

          </div>
          <div className="hidden items-center md:flex space-x-6">

            <Link href="/cart" className="relative"><ShoppingCart /><span className="absolute top-[-9] bg-blue-700 rounded-full text-white w-4  flex justify-center items-center h-4 text-sm right-[-9]">{cart.length}</span></Link>

            <Link href="/whitelist" className="relative"><Heart /><span className="absolute top-[-9] bg-blue-700 rounded-full text-white w-4  flex justify-center items-center h-4 text-sm right-[-9]">{whiteListData.length}</span></Link>
            
            <Link href="/login" className="bg-indigo-600 text-white px-6 py-1 rounded hover:bg-indigo-700">
              Login
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/shop" className="block">Shop</Link>
          <Link href="/men" className="block">Men</Link>
          <Link href="/women" className="block">Women</Link>
          <Link href="/cart" className="block"><ShoppingCart /></Link>
          <Link href="/login" className="block text-indigo-600 font-semibold">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
