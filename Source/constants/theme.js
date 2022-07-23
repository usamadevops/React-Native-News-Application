import {StyleSheet, Dimensions, Platform} from 'react-native';
import {fontFamily} from './Fonts';

let headerHeight = Platform.OS === 'ios' ? 66 : 46;
const colors = {
  White: '#ffffff',
  Black: '#000000',
  Red: '#ED1C2E',
  Blue: '#0077B6',
  DarkGray: '#7F7F7F',
  MediumGray: '#A7A7A7',
  LightGray: '#CDCDCD',
};
let footerHeight = 55;

const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewPadding: 15,
  defaultSpacer: 10,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  divider: {backgroundColor: colors.MediumGray},
  baseImageStyle: {flex: 1, width: undefined, height: undefined},
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 10,
  padding: 25,

  // font sizes
largeTitle:32,
  h1: 23,
  h2: 20,
  h3: 18,
  title: 19,
  header: 16,
  subTitle: 15,
  body: 14,
  caption: 12,

  //Line height:
  normal: 14,
  header: 18,

  //Letter Spacing
  normal: 0.5,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  subTitle: {
    fontSize: sizes.subTitle,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: fontFamily.BRFirma_Medium,
    fontSize: fonts.h1.fontSize,
  },
  largeTextSemibold: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: fonts.title.fontSize,
  },
  mediumText: {
    fontFamily: fontFamily.BRFirma_Medium,
    fontSize: fonts.subTitle.fontSize,
  },
  mediumTextSemibold: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: fonts.subTitle.fontSize,
  },
  smallText: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: fonts.body.fontSize,
  },
  extraSmallText: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: fonts.caption.fontSize,
  },
});

export {colors, sizes, fonts, textStyles, constants};
