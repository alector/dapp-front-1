import React from "react"
import Home from "./Pages/Home"
import MyAccount from "./Pages/MyAccount.js"
import TransferEther from "./Pages/TransferEther.js"
import Counter from "./Pages/Counter.js"

import { useContract } from "web3-hooks"
import { counterAddress, counterAbi } from "./contracts/Counter"
import { Web3Provider } from "web3-hooks"
import { Switch, Route, Redirect } from "react-router-dom"

// export const DappContext = React.createContext(null)
export const DappContext = React.createContext(null)

function App() {
  const counter = useContract(counterAddress, counterAbi)

  return (
    <DappContext.Provider value={counter}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/transfer" component={TransferEther} />
        <Route exact path="/counter" component={Counter} />

        <Redirect to="/" />
      </Switch>
    </DappContext.Provider>
  )
}

export default App
