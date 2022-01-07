import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../styles/colors';
import {fonts} from '../styles/fonts';

export const ProfileScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[fonts.headline1, styles.title]}>Perfil</Text>

        <View style={styles.avatar}>
          <Image
            style={styles.avatarImg}
            source={{uri: 'https://randomuser.me/api/portraits/men/75.jpg'}}
          />

          <Text style={[fonts.body1Regular, styles.avatarName]}>
            Juan Perez
          </Text>
          <Text style={[fonts.button, styles.avatarEdit]}>Editar Cuenta</Text>
        </View>

        <View style={styles.formControl}>
          <Text style={[fonts.body1Regular, styles.label]}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre: juan"
            autoCapitalize="words"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={[fonts.body1Regular, styles.label]}>Apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellidos: Perez"
            autoCapitalize="words"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={[fonts.body1Regular, styles.label]}>Correo</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="correo: juan@gmail.com"
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={[fonts.button, styles.btnText]}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
  avatar: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarName: {
    marginTop: 8,
    color: colors.black,
  },
  avatarEdit: {
    color: colors.black,
    marginTop: 8,
  },
  formControl: {
    marginBottom: 16,
  },
  label: {
    color: colors.black,
    marginLeft: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.black,
    ...fonts.body1Regular,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: colors.black,
    paddingVertical: 16,
    marginVertical: 16,
  },
  btnText: {
    color: colors.white,
  },
});
