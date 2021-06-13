import React from "react"
import { useContext, useState } from "react"
import { Web3Context } from "web3-hooks"

import { ReactComponent as MetaMaskLogo } from "../svg/1024px-MetaMask_Fox.svg"

const MainLogin = () => {
  const [web3State, login] = useContext(Web3Context)

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      {!web3State.isLogged && (
        <>
          <MetaMaskLogo className="block md:w-2/3   lg:w-1/3 mx-auto" />

          <button onClick={login} className="bg-red-400 mx-auto block h-14 w-2/3 md:w-1/3 flex justify-center items-center rounded-md text-white text-lg font-bold hover:bg-red-600 text-center ">
            Login with MetaMask
          </button>
        </>
      )}
      {web3State.isLogged && <div> You've succesfully logged in! </div>}
    </div>
  )
}

export default MainLogin
