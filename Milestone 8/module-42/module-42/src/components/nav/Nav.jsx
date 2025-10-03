import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
//Nav, Dynamic Nav, Nav using props

const navItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Products", url: "/products" },
  { id: 5, name: "Contact", url: "/contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((item) => <Link key={item.id} item={item}></Link>);
  return (
    <nav>
      <ul className="flex justify-between mx-10 text-black">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul className={`md:hidden absolute duration-1000
            ${open ? 'top-8' : '-top-40'}
             bg-amber-200`}>{links}</ul>
        </span>
        {/* <h3>My Navbar</h3> */}
      </ul>

      <ul className="hidden md:flex md:justify-between md:mx-10">
        {/* <h3>My Navbar</h3> */}

        {links}
      </ul>

      {/* Mobile Nav vs Web Nav */}
      {/* <ul className="md:hidden flex justify-center">
        <span className="">
          <Menu className="mr-2"></Menu>
          <ul className="absolute bg-green-400">{links}</ul>
        </span>
        <h3>My Navbar</h3>
      </ul>

      <ul className="hidden md:flex md:justify-between md:mx-10">
        <h3>My Navbar</h3>

        {links}
      </ul> */}

      {/* Nav using props */}
      {/* <ul className="flex justify-between mx-10">
        <Menu></Menu>
        <h3>My Navbar</h3>
        
        {navItems.map((item) => (
          <Link key={item.id} item={item}></Link>
        ))}
      </ul> */}

      {/* Dynamic Nav */}
      {/* <ul>
        {navItems.map((item) => (
          <li className="mr-10">
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul> */}

      {/* Nav */}
      {/* <ul className="flex">
                <li className="mr-10">Home</li>
                <li className="mr-10">About</li>
                <li className="mr-10">Contact</li>
            </ul> */}
    </nav>
  );
};

export default Nav;
