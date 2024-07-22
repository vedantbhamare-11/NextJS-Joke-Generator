import { CircularProgress, Box } from '@mui/material';
import styles from './Loading.module.css';

const Loading = () => (
  <Box className={styles.loadingContainer}>
    <CircularProgress className={styles.spinner} />
  </Box>
);

export default Loading;