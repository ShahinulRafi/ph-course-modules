import React from "react";

//Nav, Dynamic Nav, Nav using props

const navItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Products", url: "/products" },
  { id: 5, name: "Contact", url: "/contact" },
];

const Nav = () => {
  return (
    <nav>
      
      {/* Nav using props */}

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
