import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {StackScreenProps} from '@react-navigation/stack';

import {AppContext} from '../context/AppContext';

import {welcomeSlides, Slide} from '../data/welcomeSlides';
import {RootStackScreenParamsList} from '../navigator/Navigator';

import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

const {width: screenWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackScreenParamsList> {}

export const WelcomeScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<Carousel<Slide> | null>(null);
  const {turnOffWelcomeSlides} = useContext(AppContext);

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = (item: Slide) => (
    <>
      <Image style={styles.img} source={item.img} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={[fonts.headline2, styles.title]}>{item.title}</Text>
        <Text style={[fonts.body1Regular, styles.desc]}>{item.desc}</Text>
      </View>
    </>
  );

  const handlePress = () => {
    carouselRef.current?.snapToNext();
    if (welcomeSlides.length - 1 === activeIndex) {
      turnOffWelcomeSlides();
      navigation.navigate('AppScreen');
    }
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
        ref={slide => (carouselRef.current = slide)}
        lockScrollWhileSnapping={true}
      />

      <View style={styles.sizedBox} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handlePress}>
        <Text style={[fonts.button, styles.buttonText]}>Siguiente</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    color: colors.black,
    marginBottom: 8,
  },
  desc: {
    color: colors.grey,
    textAlign: 'center',
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
    textAlign: 'center',
  },
});
