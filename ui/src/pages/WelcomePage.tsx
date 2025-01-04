import React from 'react';
import { Box, Typography } from '@mui/joy';
import BlockStorageImage from '../assets/block-storage.png';

const WelcomePage: React.FC = () => {
  return (
    <Box sx={{
      marginBottom: "2rem", 
      maxWidth: "800px", 
      marginLeft: "auto", 
      marginRight: "auto", 
      padding: "50px",
      textAlign: 'center'
    }}>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '1rem'
      }}>
        <img
          src={BlockStorageImage}
          alt="DApp Image"
          style={{
            width: '100%', 
            maxWidth: '400px', 
            borderRadius: '8px'
          }}
        />
      </Box>
      
      <Typography level="h3" component="h2" sx={{ marginBottom: "1rem" }}>
        Welcome to Personal Data Storage dApp
      </Typography>
      <Typography level="body-sm" sx={{ marginBottom: "1rem" }}>
        Personal Data Storage is a decentralized application (DApp) built on the Ethereum blockchain that allows users to store, manage, and protect 
        their personal data securely. With this platform, users can control their own data and ensure privacy through blockchain technology, 
        eliminating the need for third-party data handling. By leveraging the Ethereum network, Personal Data Storage ensures high levels of security 
        and decentralization, making it an ideal solution for managing sensitive personal information.
      </Typography>
    </Box>
  );
};

export default WelcomePage;
