import React from "react";
import { Link } from "react-router-dom";

function ItemNavbar({ title, categories, type }) {
  return (
    <div>
      <p
        className="uppercase tracking-wider text-gray-500 
    font-medium text-13px]"
      >
        {title}
      </p>
      <ul className="mt-3 text-[15px]">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              to={`${type}/${category.url}`}
              className="block p-2 -mx-2 
              rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
              hover:to-pink 50 hover:via-black-50 transition ease-in-out 
              duration-300 text-gray-800 font-semibold
              hover:text-indigo-600"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemNavbar;
