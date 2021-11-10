import {ImageSourcePropType} from 'react-native';

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

export const welcomeSlides: Slide[] = [
  {
    title: 'Encuentra tu amigo fiel',
    desc: 'Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Crea una nueva historia',
    desc: 'Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.',
    img: require('../assets/slide-2.png'),
  },
];
