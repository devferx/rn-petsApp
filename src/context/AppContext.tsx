import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Pet} from '../interfaces/pet';

interface AppContextProps {
  showWelcomeSlides: boolean;
  favoritesPets: Pet[];
  turnOffWelcomeSlides: () => void;
  addFavoritePet: (pet: Pet) => void;
  isFavoritePet: (pet: Pet) => boolean;
  deleteFavoritePet: (pet: Pet) => void;
}

export const AppContext = createContext({} as AppContextProps);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
  const [showWelcomeSlides, setShowWelcomeSlides] = useState(true);
  const [favorites, setFavorites] = useState<Pet[]>([]);

  // Load welcome slides from async storage
  useEffect(() => {
    AsyncStorage.getItem('showWelcomeSlides').then(value => {
      if (value) {
        setShowWelcomeSlides(JSON.parse(value));
      }
    });
  }, []);

  // load favorites pets from async storage
  useEffect(() => {
    AsyncStorage.getItem('favorites').then(value => {
      if (value) {
        setFavorites(JSON.parse(value));
      }
    });
  }, []);

  // dont show again welcome slides
  const turnOffWelcomeSlides = () => {
    setShowWelcomeSlides(false);
    AsyncStorage.setItem('showWelcomeSlides', JSON.stringify(false));
  };

  const addFavoritePet = (pet: Pet) => {
    setFavorites([...favorites, pet]);
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const isFavoritePet = (pet: Pet) => {
    return favorites.some(p => p.id === pet.id);
  };

  const deleteFavoritePet = (pet: Pet) => {
    setFavorites(favorites.filter(p => p.id !== pet.id));
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <AppContext.Provider
      value={{
        favoritesPets: [],
        showWelcomeSlides,
        turnOffWelcomeSlides,
        addFavoritePet,
        isFavoritePet,
        deleteFavoritePet,
      }}>
      {children}
    </AppContext.Provider>
  );
};
