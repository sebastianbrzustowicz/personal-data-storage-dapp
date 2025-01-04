import { useState, useEffect } from "react";
import { Box } from "@mui/joy";
import PersonalDataForm from "../writePersonalData/WriteDataForm";
import WelcomePage from "../../pages/WelcomePage";
import ReadPersonalData from "../readPersonalData/ReadPersonalData";

interface TabsContainerProps {
  isWalletConnected: boolean;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ isWalletConnected }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (isWalletConnected === false) {
      handleTabChange(0);
    }
  }, [isWalletConnected]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          borderBottom: "2px solid #ddd",
          marginBottom: 2,
        }}
      >
        <Box
          onClick={() => handleTabChange(0)}
          sx={{
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: activeTab === 0 ? "bold" : "normal",
            borderBottom: activeTab === 0 ? "3px solid #007FFF" : "3px solid transparent",
            color: activeTab === 0 ? "#007FFF" : "#555",
            transition: "color 0.3s, border-bottom 0.3s",
          }}
        >
          Welcome
        </Box>
        {isWalletConnected && (
          <>
            <Box
              onClick={() => handleTabChange(1)}
              sx={{
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: activeTab === 1 ? "bold" : "normal",
                borderBottom: activeTab === 1 ? "3px solid #007FFF" : "3px solid transparent",
                color: activeTab === 1 ? "#007FFF" : "#555",
                transition: "color 0.3s, border-bottom 0.3s",
              }}
            >
              Read your data
            </Box>
            <Box
              onClick={() => handleTabChange(2)}
              sx={{
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: activeTab === 2 ? "bold" : "normal",
                borderBottom: activeTab === 2 ? "3px solid #007FFF" : "3px solid transparent",
                color: activeTab === 2 ? "#007FFF" : "#555",
                transition: "color 0.3s, border-bottom 0.3s",
              }}
            >
              Write your data
            </Box>
          </>
        )}
      </Box>
      <Box>
        {activeTab === 0 ? (
          <WelcomePage />
        ) : activeTab === 1 ? (
          <ReadPersonalData />
        ) : (
          <PersonalDataForm />
        )}
      </Box>
    </Box>
  );
};

export default TabsContainer;
