import { useContext } from "react"
import { Web3Context } from "web3-hooks"
import { ReactComponent as MyLogo } from "../icons/crypto-playground-2.svg"
import { NavLink } from "react-router-dom"

const Hero = () => {
  // const login = false
  const [web3State, login] = useContext(Web3Context)

  return (
    <div className="flex items-center justify-between pb-0 h-56 p-0 ">
      <div className="w-1/2 h-full  flex items-center">
        <MyLogo className="ml-10" />
      </div>

      <div className="w-1/2 h-full  flex justify-end pr-10 items-center">
        {/* {!web3State.isMetaMask && <div className="text-lg font-bold">Login</div>} */}

        {web3State.isLogged && (
          <nav className="flex justify-center items-center">
            <NavLink to="/my-account" className="mx-3 hover:bg-gray-100  p-2 px-4 rounded-xl">
              My Account
            </NavLink>
            <NavLink to="/transfer" className="mx-3 hover:bg-gray-100  p-2 px-4 rounded-xl">
              Transfer Ether
            </NavLink>
            <NavLink to="/counter" className="mx-3 hover:bg-gray-100  p-2 px-4 rounded-xl">
              Counter
            </NavLink>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Hero
