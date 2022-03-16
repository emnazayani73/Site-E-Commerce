import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./css/footerheader.css";
import AccueilClient from "../Pages/Client/AccueilClient";
import Cart from "../Pages/Cart";
import Favorite from "../Pages/Favorite";
import DropdownHome from "./DropdownHome";
import DropdownUser from "./DropdownUser";
function Header(props) {
  return (
    <div className="header">
      <div className="flex flex-row justify-between  w-screen">
        {/*ligne header*/}

        <div className="flex flex-col  w-[1000px] ">
          <img src={logo} className="flex  rounded-full w-32" />
        </div>

        <div className="flex flex-col m-auto justify-between w-60 ">
          {/*ligne les icons*/}
          <div className="flex flex-col">
            <div className=" flex flex-row justify-around h-28 text-violet-100">
              <DropdownHome color="white" />

              <DropdownUser color="white" />

              <boutton className="text-3xl p-4 cursor-pointer text-[white] ">
                <Link to={Cart} />
                <FaShoppingCart />
              </boutton>

              <boutton className="text-3xl p-4 cursor-pointer text-[white]">
                <Link to={Favorite} />
                <MdFavorite />
              </boutton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
