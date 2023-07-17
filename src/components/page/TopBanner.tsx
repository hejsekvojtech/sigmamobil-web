import React from "react";
import { PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";

function TopBanner() {
  return (
    <div className="z-10 bg-brand-main w-full font-thin text-xs md:text-sm shadow-sm py-1 px-4 text-white">
      <div className="flex container justify-between">
        <span className="flex items-center space-x-1">
          <ClockIcon className="h-4" />
          <p>PO - PÁ | 9:00 - 17:00</p>
        </span>

        <span className="flex items-center space-x-1">
          <PhoneIcon className="h-4" />
          <p>+420 123 456 789</p>
        </span>
      </div>
    </div>
  );
}

export default TopBanner;
