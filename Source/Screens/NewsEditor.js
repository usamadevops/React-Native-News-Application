import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native';
import { BackButton } from '../assets/Icons';
import {RichEditor,RichToolbar} from 'react-native-pell-rich-editor'
import {theme} from '../constants';
import {useNavigation} from '@react-navigation/core';
import {fontFamily} from '../constants/Fonts';
export default function NewsEditor() {
  const _editor = React.createRef();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar hidden={false} />
      <View
        style={{
          height: 50,
          backgroundColor: theme.colors.Black,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Pressable onPress={() => navigation.pop()} hitSlop={30}>
          <BackButton color={theme.colors.White} />
        </Pressable>
        <Text
          style={{
            fontFamily: fontFamily.Bozon_Demi_Bold,
            fontSize: theme.sizes.h3,
            color: theme.colors.White,
          }}>
          Editor
        </Text>
        <Pressable
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderWidth: 0.5,
            borderColor: theme.colors.White,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: theme.sizes.body,
              color: theme.colors.White,
            }}>
            Post
          </Text>
        </Pressable>
      </View>
      <RichEditor
  ref={_editor}
  initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}

      />
      <RichToolbar editor={_editor}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  root: {
    flex: 1,
  },
  editor: {
    flex: 1,
  },
});
