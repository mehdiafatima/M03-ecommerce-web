"use client";

import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          {/* Logo Image */}
          <Image
            src="/logo.png" // Replace with the actual path to your logo image
            alt="Furniro Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          {/* Logo Text */}
          <span className="text-xl font-bold text-black">Furniro</span>
        </div>

  
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 gap-8">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-black font-medium">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
            Contact
          </Link>
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 text-gray-600 gap-3">

          <Link href="/login">
            <User className="text-lg hover:text-black cursor-pointer" />
          </Link>
          <Search className="text-lg hover:text-black cursor-pointer" />
          <Heart className="text-lg hover:text-black cursor-pointer" />
          <div className="flex flex-col -mt-4">
            <p className="text-xs"><span className="font-semibold">0</span> items</p>
         <p><Link href="/cartpage">
            <ShoppingCart className="text-lg hover:text-black cursor-pointer " />
          </Link> </p> </div>
        </div>
      </div>


 
    </header>
  );
};

export default Header;
