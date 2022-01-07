import {StyleSheet} from 'react-native';

import {colors} from './colors';

export const fonts = StyleSheet.create({
  headline1: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
    lineHeight: 33,
  },
  headline2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    lineHeight: 25,
  },
  subtitle1: {
    fontFamily: 'Nunito-Medium',
    fontSize: 18,
    lineHeight: 24,
  },
  body1Regular: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  body1Bold: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  body2Regular: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 19,
  },
  body2Bold: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    lineHeight: 19,
  },
  caption: {
    fontFamily: 'Nunito-Regular',
    fontSize: 11,
    lineHeight: 15,
  },
  button: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    lineHeight: 16,
  },
  textGrey: {
    color: colors.grey,
  },
  textBlack: {
    color: colors.black,
  },
});
