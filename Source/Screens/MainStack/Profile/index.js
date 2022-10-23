import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { theme } from '../../../constants';
import { fontFamily } from '../../../constants/Fonts';
import { Header2, NewsList, Searchbar, TopNewsCard } from '../../../Components';
import { sizes } from '../../../constants/theme';
import API from '../../../../ApiKey';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
const TopicProfile = ({ route, navigation }) => {
  const {
    channelName,
    channelDesc,
    channelLogo,
    channelUrl,
    channelCategory,
    source,
    channelCountry,
    channelLang } = route.params;
  const [TopNews, setTopNews] = React.useState([]);
  const [isLoading1, setisLoading1] = React.useState(false);
  const [error, seterror] = React.useState('');

  const GetTopNews = async () => {
    setisLoading1(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setTopNews(response.data.articles);
        setisLoading1(false);
      })
      .catch(function (error) {
        seterror(error);
        setisLoading1(false);
      });
  }

  React.useEffect(() => {

    const TopNews = GetTopNews();
    return () => {
      TopNews;
    }
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.White }}>
      <Header2 title={channelName} backButton={true} icon="lang" language={channelLang} />
      <ScrollView style={{ flex: 1 }} stickyHeaderHiddenOnScroll={false} stickyHeaderIndices={[1]}>
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
            <View style={{ flexDirection: 'row', paddingRight: 15 }}>
              <Image
                source={{ uri: channelLogo } || require('../../../assets/images/CNN.png')}
                style={{ width: 50, height: 50, borderRadius: 5 }}
              />
            </View>
            <View style={{ flexDirection: 'column', flex: 2 }}>
              <Text
                style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: sizes.h2,

                }}>
                {channelName}
              </Text>

              <Text
                textBreakStrategy='balanced'
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
        {/* <View style={{
          borderBottomWidth: 1,
          borderColor: '#c4c4c4',
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: theme.colors.White,
          marginVertical: 4,
        }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: theme.fonts.h3.fontSize,
              lineHeight: 22,
              letterSpacing: 0.34,
              color: theme.colors.Black,



            }}>
             {channelName}
          </Text>
        </View> */}
        <View style={{ flex: 1, marginTop: 20 }}>
          {
            TopNews ? (
              <TopNewsCard TopNews={TopNews} inProfile={true} />
            ) :
              (
                <></>
              )
          }

          <NewsList queryString={`https://newsapi.org/v2/everything?domains=${channelUrl}&apiKey=${API}`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopicProfile;
