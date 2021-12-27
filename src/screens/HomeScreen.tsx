import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import {PetSelectButton} from '../components/PetSelectButton';
import {PetCard} from '../components/PetCard';

import data from '../data/data';
import {colors} from '../styles/colors';

export const HomeScreen = () => {
  const [currentList, setCurrentList] = useState<'dogs' | 'cats'>('dogs');

  return (
    <FlatList
      style={styles.petList}
      data={data[currentList]}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.petListContent}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Adopta una adorable mascota</Text>
          <Text style={styles.text}>Categorías de mascotas</Text>
          <View style={styles.actions}>
            <PetSelectButton
              style={styles.firstBtn}
              title="Perros"
              image={require('../assets/dog-icon.png')}
              petColor={colors.green}
              onPress={() => setCurrentList('dogs')}
            />
            <PetSelectButton
              title="Gatos"
              image={require('../assets/cat-icon.png')}
              petColor={colors.blue}
              onPress={() => setCurrentList('cats')}
            />
          </View>
        </View>
      }
      renderItem={({item}) => <PetCard style={styles.petCard} pet={item} />}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 48,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    lineHeight: 33,
    color: colors.black,
  },
  text: {
    marginTop: 32,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: colors.black,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  firstBtn: {
    marginRight: 8,
  },
  petList: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
  },
  petListContent: {
    justifyContent: 'space-between',
  },
  petCard: {
    width: '48%',
  },
});
