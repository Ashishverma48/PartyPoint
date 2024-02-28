import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { ABOUT } from "../constant";
function AboutUs() {
  return (
    <section>
      <Breadcrumb content="About Us" to="/about-us" />
      <div className="flex  md:p-16 p-3 bg-[url('src/assets/venue.jpeg')]  justify-center items-center w-full bg-cover bg-center relative">
        <div className="absolute top-0 left-0 w-full h-full  bg-slate-900 bg-opacity-30"></div>
        <div className="w-full text-center h-full md:p-9 p-5 bg-neutral-900 rounded-md bg-opacity-50 backdrop-blur-md text-gray-300">
          <h2 className="font-bold md:text-[40px] text-2xl text-secondary">
            Welcome to PartyPoint
          </h2>
          <p className="mt-10 ">
            HILE FUNCTIONS AND PARTIES ARE FUN EVENTS, PLANNING THEM REQUIRES
            SERIOUS ATTENTION TO DETAILS AND EXCELLENCE IN MANAGEMENT SKILLS. AT
            BOOKTHEPARTY®, WE BRING PROFESSIONAL EXECUTION RHYTHM TO THE
            ENTERTAINMENT QUOTIENT OF EVENTS THAT CAN EITHER BE A CELEBRATION OF
            THE MEMORY OR THE THINGS TO COME IN FUTURE.
          </p>

          <p className="mt-5">
            SINCE THE INCEPTION OF BOOKTHEPARTY®, WE HAVE EVOLVED AS A SERVICE
            PROVIDER TO MATURE INTO A BRAND THAT COMES WITH TRUST AND
            RELIABILITY. WE ASSESS ALL YOUR REQUIREMENTS AND GET YOUR PARTY
            ORGANIZED WITH THE HELP OF A SUITABLE SERVICE PROVIDER THAT IS A
            PART OF OUR UMBRELLA. WE PROVIDE YOU ACCESS TO PROFESSIONALS THAT
            SEE THROUGH YOUR REQUIREMENTS AND MAKE SURE EVERYTHING IS IN PLACE
            BEFORE THE PARTY STARTS.
          </p>
          <p className="mt-5">
            WE ENSURE EVERYTHING RIGHT FROM THE DÉCOR TO ACTIVITIES AND
            TAKEAWAYS HAVE BEEN PLANNED WITH YOUR FEASIBILITY IN MIND. ANY
            COLLATERAL DURING THE ORGANIZING OF THE EVENT WITH REGARDS TO THE
            SERVICE IS TAKEN CARE OF BY THE COMPANY. TILL DATE, WE HAVE
            SUCCESSFULLY CATERED TO THE NEEDS OF OUR CLIENTS AND AIM TO DO SO IN
            THE FUTURE AS WELL. OUR SCREENING PROCESS FOR SELECTION OF THE
            SERVICE PROVIDERS IS VERY PRECISE AND BASED ON DETAILS. WE ENSURE
            THAT ANY PARTY ORGANIZED BY THE COMPANIES TEAMED UP WITH US SERVE
            OUR CLIENTS TO THE BEST WHICH IS WHY WE MAKE SURE THAT ONLY THE BEST
            COMPANIES ARE A PART OF OUR ORGANIZING COMMITTEE. APART FROM THE
            REGULAR PARTIES, WE ALSO HELP ORGANIZE CORPORATE EVENTS, BACHELOR
            PARTIES, DIWALI DECORS, CHRISTMAS DÉCOR, SHOWROOMS DÉCOR, AND SO ON.
          </p>
        </div>
      </div>
      <div className=" w-full bg-slate-800 static flex justify-center md:py-10 md:px-12">
        <div className="bg-white flex w-full text-center justify-evenly p-8 rounded-md bg-opacity-40 backdrop-blur-sm">
          {ABOUT?.map((item) => (
            <div key={item.name}>
              <img src={item.icon} alt="" className="w-[70px] mx-auto w-full" />
              <p className="text-violet-600 text-2xl font-semibold mt-2">
                {item.number}
              </p>
              <p className="mt-3 text-primary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
