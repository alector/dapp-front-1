import React from "react"
import { ReactComponent as MyLogo } from "../icons/crypto-playground-2.svg"
const Header = () => {
  return (
    <nav className="flex items-center justify-start pb-0 h-36 bg-gray-100">
      <div>
        <MyLogo className="h-10 ml-10 mt-10" />
      </div>
      <div className="  p-5 h-full	  flex items-center bg-gray-100  border-b-4 border-gray-100 hover:border-green-900">
        <a href="" className="block">
          Main
        </a>
      </div>
      <div className="m-3">
        <a href="">MetaMask Connection</a>
      </div>
      <div className="m-3">
        <a href=""> Simple Calculator</a>
      </div>
    </nav>
  )
}

export default Header
