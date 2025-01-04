import { useState, useEffect } from "react";
import WalletConnect from "./components/walletConnect/WalletConnect";
import TabsContainer from "./components/tabsContainer/TabsContainer";

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setIsWalletConnected(true);
        } else {
          setIsWalletConnected(false);
        }
      });
    }
  }, []);

  return (
    <div>
      <WalletConnect setIsWalletConnected={setIsWalletConnected} />
      <TabsContainer isWalletConnected={isWalletConnected} />
    </div>
  );
};

export default App;
