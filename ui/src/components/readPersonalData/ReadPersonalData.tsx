import usePersonalData from "./usePersonalData";
import { Skeleton } from '@mui/joy';

const ReadPersonalData = () => {
  const { personData, error, isLoading } = usePersonalData();

  return (
    <div>
      <h2>Personal Data on Blockchain</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <div>
          <Skeleton variant="rectangular" width="40%" height={25} sx={{ marginBottom: 1 }} />
          <Skeleton variant="rectangular" width="50%" height={25} sx={{ marginBottom: 1 }} />
          <Skeleton variant="rectangular" width="30%" height={25} sx={{ marginBottom: 1 }} />
          <Skeleton variant="rectangular" width="55%" height={25} sx={{ marginBottom: 1 }} />
          <Skeleton variant="rectangular" width="45%" height={25} sx={{ marginBottom: 1 }} />
        </div>
      ) : personData ? (
        <div>
          <p><strong>First Name:</strong> {personData.firstName}</p>
          <p><strong>Last Name:</strong> {personData.lastName}</p>
          <p><strong>Birth Year:</strong> {personData.birthYear}</p>
          <p><strong>Nationality:</strong> {personData.nationality}</p>
          <p><strong>Postal Address:</strong> {personData.postalAddress}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ReadPersonalData;
