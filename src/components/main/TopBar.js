import React from "react"

const TopBar = () => {
  return (
    <div className="relative flex items-center justify-center h-11 bg-gray-900">
      <div className="m-6 text-white ">Front-end exercise on Dapp functionality</div>

      <div className="m-6 ">
        <a href="https://github.com/alector/dapp-front-1" className=" p-2 block h-6 flex items-center bg-white rounded-sm uppercase text-xs	p-3 text-gray-900">
          Github{" "}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default TopBar
