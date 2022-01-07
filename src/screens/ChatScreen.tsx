import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackScreenParamsList} from '../navigator/Navigator';
import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

interface ChatScreenProps
  extends StackScreenProps<RootStackScreenParamsList, 'ChatScreen'> {}

export const ChatScreen = ({navigation, route}: ChatScreenProps) => {
  const {author, authorAvatar} = route.params;

  const onPressBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}>
          <Icon name="arrow-back-outline" size={32} color="white" />
        </TouchableOpacity>
        <Image style={styles.headerImg} source={{uri: authorAvatar}} />
        <Text style={styles.authorName}>{author}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.noMessage}>
          Aún no hay mensajes, ¿quieres enviar uno?
        </Text>
        <TextInput style={styles.chatInput} placeholder="Mensaje ..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    borderRadius: 9999,
    padding: 8,
    backgroundColor: colors.black,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 48,
  },
  headerImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: colors.green,
    marginBottom: 8,
  },
  authorName: {
    color: colors.black,
    ...fonts.body1Bold,
  },
  noMessage: {
    color: colors.black,
    ...fonts.body1Bold,
  },
  chatInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...fonts.body1Regular,
  },
});
