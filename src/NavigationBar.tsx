import React from "react";
import { HomeIcon, GlobeAltIcon, ChatBubbleOvalLeftIcon, CheckCircleIcon, CogIcon } from "@heroicons/react/24/outline"; 

const NavigationBar = () => {
  return (
    <nav className="w-full mt-auto fixed bottom-0 transform -translate-x-1/2 w-[375px] bg-white shadow-md border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <button className="flex flex-col items-center text-blue-600">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs font-medium">Home</span>
        </button>

        {/* About Us */}
        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <GlobeAltIcon className="h-6 w-6" />
          <span className="text-xs font-medium">About Us</span>
        </button>

        {/* Questions */}
        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
          <span className="text-xs font-medium">Questions</span>
        </button>

        {/* Results */}
        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <CheckCircleIcon className="h-6 w-6" />
          <span className="text-xs font-medium">Results</span>
        </button>

        {/* Settings */}
        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <CogIcon className="h-6 w-6" />
          <span className="text-xs font-medium">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
