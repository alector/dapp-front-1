import React from "react"
import Layout from "../components/main/Layout"

import { Web3Context } from "web3-hooks"
import { ethers } from "ethers"
import { useContext, useState } from "react"
import { DappContext } from "../App"

const Calculator = () => {
  const counter = useContext(DappContext)
  const [count, setCount] = useState(0)

  const handleClickGet = async () => {
    try {
      const currCount = await counter.count()
      setCount(currCount)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickIncrement = async () => {
    try {
      await counter.increment()
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickDecrement = async () => {
    try {
      await counter.decrement()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1>Counter</h1>
        <p>count: {count.toString()}</p>
        <button onClick={handleClickGet}>get count</button>
        <button onClick={handleClickIncrement}>+</button>
        <button onClick={handleClickDecrement}>-</button>
      </section>
    </Layout>
  )
}

export default Calculator
