import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

export const PetPersonalityList = () => {
  return (
    <View style={styles.personalitySection}>
      <Text style={[fonts.headline2, styles.personalityTitle]}>
        Personalidad
      </Text>
      <View style={styles.personalityList}>
        <View style={styles.personalityItem}>
          <Image source={require('../assets/love-icon.png')} />
          <Text style={[fonts.body1Regular, fonts.textGrey]}>Cariñoso</Text>
        </View>
        <View style={styles.personalityItem}>
          <Image source={require('../assets/inquieto-icon.png')} />
          <Text style={[fonts.body1Regular, fonts.textGrey]}>Inquieto</Text>
        </View>
        <View style={styles.personalityItem}>
          <Image source={require('../assets/jugueton-icon.png')} />
          <Text style={[fonts.body1Regular, fonts.textGrey]}>Jugueton</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalitySection: {
    marginTop: 32,
  },
  personalityTitle: {
    color: colors.black,
  },
  personalityList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  personalityItem: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 8,
  },
});
