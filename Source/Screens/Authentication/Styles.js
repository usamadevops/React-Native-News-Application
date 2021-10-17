import { StyleSheet } from 'react-native';
import { theme } from '../../constants';
import { fontFamily } from '../../constants/Fonts';



const styles = StyleSheet.create({
    container: {
        flex: 1,
      padding: 20,
      alignItems: 'center',
      backgroundColor: theme.colors.White,
    },
InnerContainer:
    {
        flexWrap: 'nowrap',
        paddingTop: 40,
        width: theme.constants.screenWidth - 80,
        paddingBottom: 40 / 2.9,
    },
   headerText:   
    {
        fontFamily: fontFamily.Bozon_Bold,
       fontSize: theme.sizes.h1,
        color:theme.colors.Black
    },
   subHeaderText:
    {
        fontFamily: fontFamily.Bozon_Demi_Bold,
        fontSize: theme.sizes.subTitle,
        color: theme.colors.MediumGray,
        letterSpacing: 0.3,
    },
   inputOuterContainer:
    {
        width: theme.constants.screenWidth - 80,
        borderWidth: 0.4,
        backgroundColor: '#E8E8E825',
        borderColor: theme.colors.MediumGray,
        borderRadius: 10,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
   inputInnerContainer:
    {
        padding: 10,
        fontFamily: fontFamily.Bozon_Regular,
        fontSize: theme.sizes.h2,
        borderRadius: 10,
        height: 55,
        width: theme.constants.screenWidth - 120,
        color: theme.colors.Blue,
    },
   semiText:
    {
        fontFamily: fontFamily.Bozon_Demi_Bold,
        fontSize: theme.sizes.header,
        color: theme.colors.LightGray,
    },
   buttonContainer:
    {
        width: theme.constants.screenWidth - 80,
        borderWidth: 0.4,
        backgroundColor: '#96D3F2',
        borderColor: theme.colors.MediumGray,
        borderRadius: 10,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
   buttonText:
    {
        fontFamily: fontFamily.Bozon_Demi_Bold,
        fontSize: theme.sizes.header,
        color: theme.colors.Blue,
    },
   hintTextContainer:
    {
       width: theme.constants.screenWidth - 80,
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 20,
        flexDirection: 'row',
    },
   hintText:
    {
        fontFamily: fontFamily.Bozon_Regular,
        fontSize: theme.sizes.base,
        color: theme.colors.DarkGray,
    },
   hintTextAction:
    {
        fontFamily: fontFamily.Bozon_Bold,
        fontSize: theme.sizes.h3,
        color: theme.colors.Blue,
    },
    otherOptionButtonContainer:
    {
        width: theme.constants.screenWidth - 80,
        borderWidth: 1,

        borderColor: theme.colors.Blue,
        borderRadius: 10,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    otherOptionButtonText:{
        fontFamily: fontFamily.Bozon_Demi_Bold,
        fontSize: theme.sizes.header,
        color: theme.colors.Blue,
      }
  });
  
export default styles;