import {StyleSheet} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.White,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  Maincontainer: {
    marginVertical:8,
    width: theme.constants.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardContainer: {
    width: theme.constants.screenWidth,
    flexDirection: 'column',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  SmallCardContainer: {
    width: theme.constants.screenWidth,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  CardLeftContainer: {
    width: theme.constants.screenWidth - 125,
  },
  CardRightContainer: {
    width: 125,
  },
  TitleContainer: {
    flexWrap: 'nowrap',
    marginTop: 20,
  },
  headerText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    lineHeight: 25,
    letterSpacing: 0.34,
  },
  BottomContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timeText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    lineHeight: 22,
    letterSpacing: 0.34,
    color: theme.colors.MediumGray,
  },
  categoryText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    lineHeight: 22,
    letterSpacing: 0.34,
    color: theme.colors.MediumGray,
    marginLeft: 30,
  },
  titleText: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.header.fontSize,
    lineHeight: 22,
    letterSpacing: 0.34,
    color: theme.colors.Black,
  },
  subTitleText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.subTitle.fontSize,
    lineHeight: 22,
    letterSpacing: 0.55,
    color: theme.colors.MediumGray,
  },
});
