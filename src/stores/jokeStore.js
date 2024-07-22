import create from 'zustand';

export const useJokeStore = create((set) => ({
  joke: null,
  setJoke: (joke) => set({ joke }),
}));