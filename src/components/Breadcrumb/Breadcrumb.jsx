import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function Breadcrumb({content,to}) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-400  to-white  p-8">
      <div className="w-max bg-white  backdrop-blur-md flex items-center gap-3	 md:mx-10 py-2 px-6 rounded-md text-gray-900 shadow-lg font-semibold">
        <Link to="/">
          
          <HomeIcon />
        </Link  >
        <span className="">/</span>
        <Link to={to} >{content}</Link>
      </div>
    </div>
  );
}

export default Breadcrumb;
