"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "@/components/icons/Cart";
import Bar2 from "@/components/icons/Bar2";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          hello , {userName}
        </Link>

        <button onClick={() => signOut()} className="bg-primary rounded-full
            text-white px-4 py-2">
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/register'} className="bg-primary rounded-full
            text-white px-4 py-2">
          Register
        </Link>
        <Link href={'/login'}>Login</Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const [mobileNav, setMobileNav] = useState(false)
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext)
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header>
      <div className="flex md:hidden justify-between items-center">
        <Link className="text-primary font-semibold
        text-2xl" href={"/"}>Flavor Bistro</Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <span className=" -top-2 -right-4 bg-primary text-white text-xs
          py-1 px-1 rounded-full leading-3">
              {cartProducts.length}
            </span>
            <ShoppingCart />
          </Link>
          <button className="p-1 border" onClick={() => setMobileNav(prev => !prev)}>
            <Bar2 />
          </button>
        </div>
      </div>
      {mobileNav && (
        <div
          onClick={() => setMobileNav(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2
        text-center">
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className=" items-center
      justify-between hidden md:flex">
        <nav className="flex gap-6 items-center text-black-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>flavor Bistro</Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-3 text-gray-500
        font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <span className=" -top-2 -right-4 bg-primary text-white text-xs
                  py-1 px-1 rounded-full leading-3">
              {cartProducts.length}
            </span>
            <ShoppingCart />

          </Link>
        </nav>
      </div>


    </header>
  );
}