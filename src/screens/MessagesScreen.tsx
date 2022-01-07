import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

export const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensajes</Text>
      <TouchableOpacity style={styles.card} activeOpacity={0.9}>
        <View style={styles.cardBody}>
          <Image
            style={styles.cardAvatar}
            source={{uri: 'https://randomuser.me/api/portraits/women/4.jpg'}}
          />
          <View style={styles.cardContent}>
            <View style={styles.cardContentHeader}>
              <Text style={styles.cardContentHeaderName}>Maria Dolores</Text>
              <Text style={styles.cardContentHeaderTime}>4:36</Text>
            </View>
            <Text>
              ¡Hola! claro, podemos acordar un lugar y hora para que conoscas...
            </Text>
          </View>
        </View>

        <Icon style={styles.goBtn} name="chevron-forward-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  title: {
    color: colors.black,
    ...fonts.headline1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  cardBody: {
    flexDirection: 'row',
    flex: 1,
  },
  cardAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: colors.green,
    marginRight: 8,
  },
  cardContent: {
    flex: 1,
  },
  cardContentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContentHeaderName: {
    color: colors.black,
    ...fonts.body1Bold,
  },
  cardContentHeaderTime: {
    color: colors.grey,
    ...fonts.caption,
  },
  goBtn: {
    marginLeft: 8,
  },
});
