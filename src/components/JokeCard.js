import { Card, CardContent, Typography, Button } from '@mui/material';
import styles from './JokeCard.module.css';

const JokeCard = ({ joke, onFetchJoke }) => (
  <Card className={styles.card}>
    <CardContent>
      <Typography variant="h5" className={styles.title}>Joke of the Moment</Typography>
      {joke ? (
        <>
          <Typography variant="body1" className={styles.setup}>{joke.setup}</Typography>
          <Typography variant="body2" className={styles.punchline}>{joke.punchline}</Typography>
        </>
      ) : (
        <Typography variant="body1" className={styles.message}>Click the button to get a joke!</Typography>
      )}
      <Button onClick={onFetchJoke} variant="contained" className={styles.button}>
        Get a New Joke
      </Button>
    </CardContent>
  </Card>
);

export default JokeCard;