import React from "react";
import { Popover } from "@headlessui/react";

export default function Header() {
  return (
    <header>
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div
              className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start space-x-3 lg:px-8">
              <div className="flex justify-start">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src="/3ases-logo.png" alt="Tres Ases"/>
                </a>
              </div>
              <nav className="flex space-x-10">
                <a href="/" className="text-xl font-bold text-purple-500 hover:text-purple-900">
                  Tres Ases
                </a>
              </nav>
              <div className="flex items-center justify-end flex-1 lg:w-0">
                <a href="#"
                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Contáctanos
                </a>
              </div>
            </div>
          </>
        )}
      </Popover>
    </header>
  );
}
