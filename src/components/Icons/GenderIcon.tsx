import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../styles/colors';

interface GenderIconProps {
  gender: 'Male' | 'Female';
}

export const GenderIcon = ({gender}: GenderIconProps) => (
  <Icon
    name={gender.toLowerCase()}
    size={32}
    color={gender === 'Male' ? colors.blue : colors.primary}
  />
);
