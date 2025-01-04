import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBlockchainData } from "./useBlockchainData";
import { Input, Button, Box, Typography, Container, FormControl, FormLabel } from '@mui/joy';

const WriteDataForm = () => {
  const { formData, handleChange, saveData } = useBlockchainData();

  return (
    <Container maxWidth="sm" sx={{ padding: "2rem" }}>
      <Typography level="h4" component="h1" sx={{ marginBottom: "1rem", textAlign: "center" }}>
        Personal Data on Blockchain
      </Typography>
      
      <Box sx={{ marginBottom: "1rem" }}>
        <FormControl sx={{ marginBottom: "1rem", width: "100%" }}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            sx={{ marginBottom: "1rem", width: "100%" }}
            placeholder="Enter your first name"
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem", width: "100%" }}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            sx={{ marginBottom: "1rem", width: "100%" }}
            placeholder="Enter your last name"
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem", width: "100%" }}>
          <FormLabel htmlFor="birthYear">Birth Year</FormLabel>
          <Input
            id="birthYear"
            name="birthYear"
            value={formData.birthYear || ""}
            onChange={handleChange}
            sx={{ marginBottom: "1rem", width: "100%" }}
            placeholder="Enter your birth year"
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem", width: "100%" }}>
          <FormLabel htmlFor="nationality">Nationality</FormLabel>
          <Input
            id="nationality"
            name="nationality"
            value={formData.nationality || ""}
            onChange={handleChange}
            sx={{ marginBottom: "1rem", width: "100%" }}
            placeholder="Enter your nationality"
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem", width: "100%" }}>
          <FormLabel htmlFor="postalAddress">Postal Address</FormLabel>
          <Input
            id="postalAddress"
            name="postalAddress"
            value={formData.postalAddress || ""}
            onChange={handleChange}
            sx={{ marginBottom: "1rem", width: "100%" }}
            placeholder="Enter your postal address"
          />
        </FormControl>

        <Button
          fullWidth
          variant="solid"
          color="primary"
          onClick={saveData}
          sx={{ marginBottom: "1rem" }}
        >
          Save Data
        </Button>
      </Box>

      <ToastContainer />
    </Container>
  );
};

export default WriteDataForm;
