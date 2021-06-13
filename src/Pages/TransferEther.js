import Layout from "../components/main/Layout"

import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useContext, useState } from "react"

const TransferEther = () => {
  const [web3State, login] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)
  const [eth2Send, setEth2Send] = useState(0)
  const [address, setAddress] = useState(ethers.constants.AddressZero)

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send)

    try {
      const tx = await web3State.signer.sendTransaction({
        to: address,
        value: weiAmount
      })
      await tx.wait()
      console.log("TX MINED")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Layout>
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="text-2xl font-extrabold	mb-20">Transfer ether from your current account</div>
        <div className="ml-10 flex-col">
          <label htmlFor="eth2send">send to: {address}</label>
          <input id="eth2Send" type="text" placeholder="ether ammount" value={eth2Send} onChange={event => setEth2Send(event.target.value)} />
          <button onClick={handleClickSend}>send</button>
        </div>
      </section>
    </Layout>
  )
}

export default TransferEther
