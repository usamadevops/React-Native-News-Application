import {StyleSheet} from 'react-native';
import {fontFamily} from '../constants/Fonts';
import {theme} from '../constants';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.White,
  },
  appTitle: {
    fontSize: 36,
    fontFamily: fontFamily.BRFirma_Medium,
  },
});
