import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StackScreenProps} from '@react-navigation/stack';

import {colors} from '../styles/colors';
import {welcomeSlides, Slide} from '../data/welcomeSlides';
import {RootStackScreenParamsList} from '../navigator/Navigator';

const {width: screenWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackScreenParamsList> {}

export const WelcomeScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = (item: Slide) => (
    <>
      <Image style={styles.img} source={item.img} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </>
  );

  const handlePress = () => {
    navigation.navigate('AppScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sizedBox} />
      <Carousel
        data={welcomeSlides}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth - 48}
        itemWidth={screenWidth - 48}
        onSnapToItem={handleSnapToItem}
        layout="default"
      />
      <Pagination
        dotsLength={welcomeSlides.length}
        activeDotIndex={activeIndex}
      />

      {welcomeSlides.length - 1 === activeIndex && (
        <>
          <View style={styles.sizedBox} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handlePress}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.primary,
  },
  img: {
    width: '100%',
  },
  content: {
    marginTop: 33,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 8,
    fontSize: 18,
  },
  desc: {
    color: colors.grey,
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 16,
  },
  sizedBox: {
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: colors.black,
    padding: 16,
    borderRadius: 999,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
});
