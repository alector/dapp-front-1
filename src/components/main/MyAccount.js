import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"

const MyAccount = () => {
  const [web3State, login] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)

  return (
    <div>
      <p>Network id: {web3State.chainId}</p>
      <p>Network name: {web3State.networkName}</p>
      <p>account: {web3State.account}</p>
      <p>Balance: {web3State.balance}</p>
    </div>
  )
}

export default MyAccount
