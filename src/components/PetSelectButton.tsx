import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {colors} from '../styles/colors';

interface Props {
  title: string;
  image: ImageSourcePropType;
  petColor: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const PetSelectButton = ({
  title,
  image,
  petColor,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style && style]}
      activeOpacity={0.8}
      onPress={() => onPress()}>
      <View style={{...styles.imageContainer, backgroundColor: petColor}}>
        <Image style={styles.image} source={image} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.black,
  },
  imageContainer: {
    padding: 12,
    borderRadius: 999,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 16,
  },
});
