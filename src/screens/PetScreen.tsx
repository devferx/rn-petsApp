import React, {useContext, useEffect, useState} from 'react';
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

import {AppContext} from '../context/AppContext';
import {RootStackScreenParamsList} from '../navigator/Navigator';
import {PetPersonalityList} from '../components/PetPersonalityList';
import {GenderIcon} from '../components/Icons';
import {LikeIcon} from '../components/Icons/LikeIcon';
import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

interface PetScreenProps
  extends StackScreenProps<RootStackScreenParamsList, 'PetScreen'> {}

export const PetScreen = ({
  navigation,
  route: {params: pet},
}: PetScreenProps) => {
  const [like, setLike] = useState(false);
  const {isFavoritePet, addFavoritePet, deleteFavoritePet} =
    useContext(AppContext);

  useEffect(() => {
    setLike(isFavoritePet(pet));
  }, [isFavoritePet, pet]);

  const onPressContactButton = () => {
    navigation.navigate('ChatScreen');
  };

  const onPressBackButton = () => {
    navigation.goBack();
  };

  const handlePressLikeButton = () => {
    setLike(!like);
    like ? deleteFavoritePet(pet) : addFavoritePet(pet);
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}>
        <Icon name="arrow-back-outline" size={32} color="white" />
      </TouchableOpacity>

      <Image source={{uri: pet.photo}} style={styles.photo} />

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={[fonts.headline1, fonts.textBlack, styles.name]}>
            {pet.name}
          </Text>
          <GenderIcon gender={pet.gender} />
          <View style={styles.largeSpace} />
          <TouchableOpacity
            style={styles.likeButton}
            activeOpacity={0.7}
            onPress={handlePressLikeButton}>
            <LikeIcon isLiked={like} />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Image source={require('../assets/raza-icon.png')} />
            <Text
              style={[fonts.body2Regular, fonts.textGrey, styles.infoItemText]}>
              {pet.breed}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require('../assets/edad-icon.png')} />
            <Text
              style={[fonts.body2Regular, fonts.textGrey, styles.infoItemText]}>
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
          <Text style={[fonts.body2Regular, fonts.textGrey]}>
            {pet.address}
          </Text>
        </View>

        <PetPersonalityList />

        <View style={styles.desc}>
          <Text style={[fonts.headline2, fonts.textBlack]}>
            Historia de {pet.name}
          </Text>
          <Text style={[fonts.body1Regular, fonts.textGrey, styles.descText]}>
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
              <Text style={[fonts.caption, fonts.textGrey]}>Publicado por</Text>
              <Text style={[fonts.body2Bold, fonts.textBlack]}>
                {pet.author}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.contactBtn}
            onPress={onPressContactButton}>
            <Text style={[fonts.button, styles.contactBtnText]}>Contactar</Text>
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
    marginRight: 8,
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
  desc: {
    marginTop: 32,
  },
  descText: {
    marginTop: 8,
    letterSpacing: 0.005,
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
  contactBtn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
    padding: 16,
    borderRadius: 999,
    marginLeft: 32,
  },
  contactBtnText: {
    color: 'white',
    textAlign: 'center',
  },
});
