import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FloatButton } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import PhoneIcon from "@mui/icons-material/Phone";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
export default function Footer() {
  return (
    <footer>
      {/* <div className=" 	 text-gray-200 bg-stone-700 w-4/5 translate-y-1/2 mx-auto  flex justify-between md:px-10 p-3  rounded-md shadow-2xl">
        <div className="flex border-r pr-7 items-center gap-5">
          <div className="text-center">
            <GpsFixedIcon color="secondary" />
            <p className="mt-1">Address</p>
          </div>
          <div>a84, Sector 4, Noida Up</div>
        </div>
        <div className="flex border-r pr-7 items-center gap-5">
          <div className="text-center">
            <PhoneIcon color="secondary" />
            <p className="mt-1">Phone Number</p>
          </div>
          <div>
            <p>+91 7437738837</p>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="text-center">
            <ForwardToInboxIcon color="secondary" />
            <p className="mt-1"> Email</p>
          </div>
          <div>
            <p>abcdref@gmail.com</p>
          </div>
        </div>
      </div> */}
      <div className="md:p-12 mt-3  px-5 bg-slate-500  text-gray-300 ">
        <div className="flex flex-col md:flex-row md:gap-7 mb-5">
          <div className="w-full md:w-1/4">
            <img src={logo} className="w-[250px]" alt="" />
            <p>
              We can provide experienced and professional Dhol players, Bhangra
              Dance Group, Russian Dhol for your next event.
            </p>
            <div className="flex gap-5 mt-4">
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
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-bold uppercase text-white after:block after:w-1/5 after:h-[2px] after:mt-1   after:bg-red-600">
              Our Services
            </h4>
            <ul className="md:mt-4 mt-1 uppercase flex flex-col gap-1">
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Punjabi Dhol
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Bhangra Dance Group
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Russian Dhol Playe
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Bagpipe Band in Delhi
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Wedding Safa in Delhi
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-fuchsia-500
fuchsia-500
fuchsia-500 hover:font-semibold "
                >
                  Bhangra Dance Group in Delhi
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-bold uppercase text-white after:block after:w-1/5 after:h-[2px] after:mt-1 after:bg-red-600">
              about us
            </h4>
            <ul
              className="uppercase md:mt-4 mt-1 flex flex-col gap-1
          "
            >
              <li>
                <Link className="hover:text-fuchsia-500 hover:font-semibold ">
                  About{" "}
                </Link>
              </li>
              <li>
                <Link className="hover:text-fuchsia-500 hover:font-semibold ">
                  Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-fuchsia-500 hover:font-semibold ">
                  terms and condiation
                </Link>
              </li>
              <li>
                <Link className="hover:text-fuchsia-500 hover:font-semibold ">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-fuchsia-500 hover:font-semibold ">
                  cancelled and refund
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-full md:w-1/4">
            <div>
              <h4 className="font-bold uppercase text-white after:block after:w-2/5 after:h-[2px] after:mt-1  after:bg-red-600">
                Subscribe to our newsletter
              </h4>
              <p className="mt-2">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div className="mt-3">
              <input
                type="email"
                placeholder="Email"
                className="outline-none placeholder:italic placeholder:text-slate-400 px-4 w-full  bg-transparent rounded-md p-1 focus:ring-secondary ring-white ring-0 md:ring-2 "
              />
              <button className="inline-block  py-2 px-5 mt-3 hover:bg-fuchsia-500 bg-secondary text-white rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p className="text-center py-3">
            Copyright © 2024 Party Point. All Rights Reserved. Design By :
            <a
              href="https://cabbalistic.in/"
              className="text-white font-semibold ml-1"
            >
              Cabbalistic Technologies{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
