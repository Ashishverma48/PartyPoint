import React from "react";
import logo from "../../assets/logo.png";
import { Input, Tooltip, Button } from "antd";
import { FloatButton } from "antd";
import { Link, NavLink } from "react-router-dom";

import {
  PhoneTwoTone,
  ShoppingCartOutlined,
  MailFilled,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  EnvironmentOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
function Header() {
  return (
    <header>
      <div className=" bg-purple-600 hidden  px-5 py-1 sm:flex justify-between items-center text-[14px] text-white">
        <div className="flex gap-2 ">
          <PhoneTwoTone rotate={90} />
          <p>+91 9833889933</p>
        </div>
        <div className="flex gap-3">
          <MailFilled />
          <p>abcdef@gmail.com</p>
        </div>
        <div className="flex gap-5">
          <FloatButton
            className="static"
            icon={<FacebookFilled className="text-primary" />}
          />
          <FloatButton
            className="static"
            icon={<InstagramFilled className="text-pink-500" />}
          />
          <FloatButton
            className="static"
            icon={<TwitterOutlined className="text-blue-900" />}
          />
          <FloatButton
            className="static"
            icon={<YoutubeFilled className="text-rose-600" />}
          />
        </div>
        <div className="uppercase flex gap-2">
          <div>
            <EnvironmentOutlined />
            <p className="border-r pr-2 inline-block ml-2">Noida</p>
          </div>
          <p className="border-r pr-2">vendor </p>
          <p>customers</p>
        </div>
      </div>
      <div className="  flex items-center justify-between shadow-md md:px-10 px-4">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="" className="w-60" />
          </div>
          <div>
            <ul className="flex gap-5 font-semibold text-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  OUR SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  OUR GALLARY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/videos"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  VIDEOS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-inher"}`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-7">
          <FloatButton
            badge={{ count: 12 }}
            className="static"
            icon={<ShoppingCartOutlined />}
          />
          <button className="border py-2 font-semibold px-5 w-max text-primary  rounded-md shadow-lg  hover:shadow-sm duration-200">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
