import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { useJokeStore } from '../stores/jokeStore';
import '../app/globals.css'; 
import { getRandomJoke } from '../services/jokeService';
import JokeCard from '../components/JokeCard';
import Loading from '../components/Loading';
import { Container, Box } from '@mui/material';

const Home = () => {
  const { joke, setJoke } = useJokeStore();

  const fetchJoke = async () => {
    const jokeData = await getRandomJoke();
    setJoke(jokeData);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
    
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        {joke ? <JokeCard joke={joke} onFetchJoke={fetchJoke} /> : <Loading />}
      </Box>
    </Container>
    <Analytics />
    </>
  );
};

export default Home;