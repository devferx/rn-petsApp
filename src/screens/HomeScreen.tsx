import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import {PetSelectButton} from '../components/PetSelectButton';
import {PetCard} from '../components/PetCard';

import data from '../data/data';
import {colors} from '../styles/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adopta una adorable mascota</Text>
      <Text style={styles.text}>Categorías de mascotas</Text>
      <View style={styles.actions}>
        <PetSelectButton
          title="Perros"
          image={require('../assets/dog-icon.png')}
          petColor={colors.green}
          onPress={() => {}}
          style={styles.firstBtn}
        />
        <PetSelectButton
          title="Gatos"
          image={require('../assets/cat-icon.png')}
          petColor={colors.blue}
          onPress={() => {}}
        />
      </View>
      <FlatList
        style={styles.petList}
        data={data.dogs}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.petListContent}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PetCard style={styles.petCard} pet={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  title: {
    fontWeight: '800',
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
    marginTop: 24,
  },
  petListContent: {
    justifyContent: 'space-between',
  },
  petCard: {
    width: '48%',
  },
});
