import React from "react"
import Layout from "../components/main/Layout"

import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useContext, useState } from "react"

const Home = () => {
  const [web3State, login] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)

  return (
    <Layout>
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="text-2xl font-extrabold	mb-20">Your current Metamask account</div>
        <div className="ml-10 flex-col">
          <div className="my-5">Network id: {web3State.chainId}</div>
          <div className="my-5">Network name: {web3State.networkName}</div>
          <div className="my-5">Account: {web3State.account}</div>
          <div className="my-5">Balance: {web3State.balance}</div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
