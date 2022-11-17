
import { a } from 'aws-amplify';
import React from 'react';
import { ActivityIndicator, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../../Style';



const Post = ({ route, navigation }) => {
  const { url, title } = route.params;
  const [isLoading, setisLoading] = React.useState(false)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation])

  return <WebView
    source={{ uri: `${url}` }}
    originWhitelist={['*']}
    onMessage={(event) => {
      alert(event.nativeEvent.data);
    }}
    onLoadStart={(syntheticEvent) => {
      const { nativeEvent } = syntheticEvent;
      setisLoading(nativeEvent.loading);
      console.log('started', isLoading);

    }}
    onLoad={(syntheticEvent) => {
      const { nativeEvent } = syntheticEvent;
      setisLoading(nativeEvent.loading)
      console.log('ended', isLoading);
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <ActivityIndicator size={'large'} color="#000" />
        </View>
      );
    }}
    onError={(syntheticEvent) => {
      const { nativeEvent } = syntheticEvent;
      alert('WebView error: ', nativeEvent);
    }}
  />;
};

export default Post;




