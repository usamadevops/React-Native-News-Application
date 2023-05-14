import React, {useEffect, useCallback} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';
import {Header2, NewsList, Searchbar, TopNewsCard} from '../../../Components';
import {sizes} from '../../../constants/theme';
import API from '../../../../ApiKey';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
const TopicProfile = ({route, navigation}) => {
  const {
    channelName,
    channelDesc,
    channelLogo,
    channelUrl,
    channelCategory,
    source,
    channelCountry,
    channelLang,
  } = route.params;
  const [TopNews, setTopNews] = React.useState([]);
  const [isLoading1, setisLoading1] = React.useState(false);
  const [error, seterror] = React.useState('');

  const GetTopNews = useCallback(async () => {
    setisLoading1(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API}`,
    };
    try {
      const response = await axios(config);
      setTopNews(response.data.articles);
    } catch (error) {
      if (!axios.isCancel(error)) {
        seterror(error);
      }
    } finally {
      console.log(TopNews);
      setisLoading1(false);
    }
  }, []);

  useEffect(() => {
    GetTopNews();
  }, [GetTopNews]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.White}}>
      <NewsList
        ListHeaderComponent={() => (
          <>
            <Header2
              title={channelName}
              backButton={true}
              icon="lang"
              language={channelLang}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', paddingRight: 15}}>
                  <Image
                    source={
                      {uri: channelLogo} ||
                      require('../../../assets/images/CNN.png')
                    }
                    style={{width: 50, height: 50, borderRadius: 5}}
                  />
                </View>
                <View style={{flexDirection: 'column', flex: 2}}>
                  <Text
                    style={{
                      fontFamily: fontFamily.Bozon_Demi_Bold,
                      fontSize: sizes.h2,
                    }}>
                    {channelName}
                  </Text>
                  <Text
                    textBreakStrategy="balanced"
                    style={{
                      fontFamily: fontFamily.BRFirma_Medium,
                      fontSize: sizes.base,
                      color: theme.colors.DarkGray,
                      lineHeight: 30,
                    }}>
                    {channelDesc}
                  </Text>
                </View>
              </View>
            </View>
            {TopNews.length > 0 ? (
              <TopNewsCard TopNews={TopNews} inProfile={true} />
            ) : (
              <></>
            )}
          </>
        )}
        queryString={`https://newsapi.org/v2/everything?domains=${channelUrl}&apiKey=${API}`}
      />
    </SafeAreaView>
  );
};

export default React.memo(TopicProfile);
