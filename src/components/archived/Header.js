import { useContext } from "react"
import { Web3Context } from "web3-hooks"

const Header = () => {
  const [web3State, login] = useContext(Web3Context)

  return (
    <nav className="flex items-center justify-start pb-0 h-16 bg-gray-100">
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
