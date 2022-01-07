import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

import {AppContext} from '../context/AppContext';
import {PetCard} from '../components/PetCard';

export const FavoritePetsScreen = () => {
  const {favoritesPets} = useContext(AppContext);

  return (
    <FlatList
      style={styles.container}
      data={favoritesPets}
      keyExtractor={item => item.id}
      numColumns={2}
      ListHeaderComponent={<Text style={styles.title}>Mascotas Favoritas</Text>}
      columnWrapperStyle={styles.petListContent}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <PetCard style={styles.petCard} pet={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.black,
    marginBottom: 32,
    marginTop: 48,
    ...fonts.headline1,
  },
  petCard: {
    width: '48%',
  },
  petListContent: {
    justifyContent: 'space-between',
  },
});
