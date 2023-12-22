import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { WalletKitProvider } from '@mysten/wallet-kit';
ReactDOM.render(
  <React.StrictMode>
    <WalletKitProvider>
    <App />
    </WalletKitProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
