import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {Pet} from '../interfaces/pet';
import {RootStackScreenParamsList} from '../navigator/Navigator';
import {fonts} from '../styles/fonts';

interface PetCardProps {
  pet: Pet;
  style?: StyleProp<ViewStyle>;
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamsList,
  'AppScreen'
>;

export const PetCard = ({pet, style}: PetCardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleTap = () => {
    navigation.navigate('PetScreen', pet);
  };

  return (
    <TouchableOpacity
      style={{...styles.container, ...(style as any)}}
      activeOpacity={0.8}
      onPress={handleTap}>
      <Image source={{uri: pet.photo}} style={styles.image} />
      <LinearGradient
        style={styles.gradient}
        start={{x: 0.5, y: 0.75}}
        colors={['rgba(255,0,0,0)', 'rgba(0,0,0, 0.5)']}
      />
      <View style={styles.content}>
        <Text style={[fonts.body2Bold, styles.text, styles.textBold]}>
          {pet.name}
        </Text>
        <Text
          style={[fonts.body2Regular, styles.text, styles.textGray]}
          numberOfLines={1}>
          {pet.breed}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  text: {
    color: 'white',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textGray: {
    color: '#CDCDCD',
  },
});
