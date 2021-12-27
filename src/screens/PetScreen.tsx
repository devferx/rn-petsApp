import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackScreenParamsList} from '../navigator/Navigator';
import {colors} from '../styles/colors';
import {GenderIcon} from '../components/Icons';
import {LikeIcon} from '../components/Icons/LikeIcon';

interface PetScreenProps
  extends StackScreenProps<RootStackScreenParamsList, 'PetScreen'> {}

export const PetScreen = ({
  navigation,
  route: {params: pet},
}: PetScreenProps) => {
  const [like, setLike] = useState(false);

  const onPressContactButton = () => {
    navigation.navigate('ChatScreen');
  };

  const onPressBackButton = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}>
        <Icon name="arrow-back-outline" size={32} color="white" />
      </TouchableOpacity>

      <Image source={{uri: pet.photo}} style={styles.photo} />

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{pet.name}</Text>
          <GenderIcon gender={pet.gender} />
          <View style={styles.largeSpace} />
          <TouchableOpacity
            style={styles.likeButton}
            activeOpacity={0.7}
            onPress={() => setLike(!like)}>
            <LikeIcon isLiked={like} />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Image source={require('../assets/raza-icon.png')} />
            <Text style={[styles.infoItemText, styles.textGrey]}>
              {pet.breed}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require('../assets/edad-icon.png')} />
            <Text style={[styles.infoItemText, styles.textGrey]}>
              {pet.monthsWaiting} Meses
            </Text>
          </View>
        </View>

        <View style={styles.location}>
          <Icon
            style={styles.locationIcon}
            name="location-sharp"
            size={24}
            color="#000000"
          />
          <Text style={[styles.textGrey]}>{pet.address}</Text>
        </View>

        <View style={styles.desc}>
          <Text style={styles.descTitle}>Historia de {pet.name}</Text>
          <Text style={[styles.descText, styles.textGrey]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            consectetur repellat, autem, assumenda delectus perspiciatis
            blanditiis omnis totam repellendus odit quia, ut aliquam esse minus
            quisquam quas quod. Ab, nulla? Laudantium, architecto! Error,
            incidunt! Quae tenetur qui quibusdam dignissimos dolore sed saepe
            blanditiis iure non laborum, in dolorum ab sequi nihil velit?
            Recusandae doloremque perferendis nam delectus voluptatum hic ullam.
          </Text>
        </View>

        <View style={styles.contact}>
          <View style={styles.user}>
            <Image style={styles.userAvatar} source={{uri: pet.authorAvatar}} />

            <View>
              <Text style={[styles.userLabel, styles.textGrey]}>
                Publicado por
              </Text>
              <Text style={styles.username}>{pet.author}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.contactBtn}
            onPress={onPressContactButton}>
            <Text style={styles.contactBtnText}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    zIndex: 99,
    backgroundColor: colors.black,
    borderRadius: 999,
    display: 'flex',
    padding: 8,
    alignSelf: 'flex-start',
  },
  photo: {
    width: '100%',
    height: 442,
    resizeMode: 'cover',
    zIndex: 0,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    zIndex: 999,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -16,
  },
  likeButton: {
    padding: 8,

    borderRadius: 9999,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  contentHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 33,
    marginRight: 8,
    color: colors.black,
  },
  largeSpace: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    marginTop: 24,
  },
  infoItem: {
    flexDirection: 'row',
    marginRight: 24,
  },
  infoItemText: {
    marginLeft: 8,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
  },
  locationIcon: {
    marginRight: 8,
  },
  textGrey: {
    color: colors.grey,
  },
  desc: {
    marginTop: 32,
  },
  descTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
  },
  descText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.005,
    marginTop: 8,
  },
  contact: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderWidth: 3,
    borderColor: colors.green,
    borderRadius: 99,
    marginRight: 8,
  },
  userLabel: {
    fontSize: 11,
    lineHeight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    color: colors.black,
  },
  contactBtn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
    padding: 16,
    borderRadius: 999,
    marginLeft: 32,
  },
  contactBtnText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
