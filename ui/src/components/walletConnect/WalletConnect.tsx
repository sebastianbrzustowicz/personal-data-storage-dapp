import { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/joy';

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface WalletConnectProps {
  setIsWalletConnected: (value: boolean) => void;
}

const WalletConnectButton: React.FC<WalletConnectProps> = ({ setIsWalletConnected }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0].toLowerCase());
          setIsConnected(true);
          setIsWalletConnected(true);
        } else {
          setAccount(null);
          setIsConnected(false);
          setIsWalletConnected(false);
        }
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    } else {
      setError('MetaMask not installed');
    }
  }, [setIsWalletConnected]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0].toLowerCase());
        setIsConnected(true);
        setIsWalletConnected(true);
      } catch (err) {
        setError('Failed to connect to wallet');
      }
    } else {
      setError('MetaMask not installed');
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '5px',
        right: '20px',
        padding: '10px',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      {error && (
        <Typography color="primary" sx={{ marginBottom: '1rem' }}>
          {error}
        </Typography>
      )}

      {isConnected ? (
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#007FFF',
            textTransform: 'lowercase',
          }}
        >
          Your address: {account?.substring(0, 6)}...{account?.substring(account.length - 4)}
        </Typography>
      ) : (
        <Button variant="solid" color="primary" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};

export default WalletConnectButton;
