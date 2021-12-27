import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../styles/colors';

interface LikeIconProps {
  isLiked: boolean;
  size?: number;
}

export const LikeIcon = ({isLiked, size = 32}: LikeIconProps) => (
  <Icon
    name="heart"
    size={size}
    color={isLiked ? colors.secondary : colors.tertiary}
  />
);
