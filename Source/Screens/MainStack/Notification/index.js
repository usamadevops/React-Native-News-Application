import React, {useRef} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import {Header2, Searchbar} from '../../../Components';
import styles from '../../Style';
import AnimatedChannelCard from '../../../Components/AnimatedChannelCard';
import ChannelsData from '../../../Data/Channels.json';
const Notification = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [searchtext, setSearchtext] = React.useState('');

  const renderItem = ({item, index}) => {
    if (item.name.toLowerCase().includes(searchtext?.toLowerCase())) {
      return (
        <AnimatedChannelCard
          key={item.id}
          source={item.id}
          name={item?.name}
          url={item?.url}
          description={item?.description}
          category={item?.category}
          logo={item?.logo}
          country={item?.country}
          language={item?.language}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
      <Header2 title="Browse Channels" />

      <Searchbar
        text={searchtext}
        onpress={setSearchtext}
        placeholder={'Search Channels'}
      />

      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}, // Set this to true if your scrollview/flatlist is not inside a scrollview or another flatlist
        )}
        style={styles.container}
        data={ChannelsData}
        renderItem={renderItem}
        initialNumToRender={10} // Render 10 items initially
        maxToRenderPerBatch={5} // Render 5 more items per each render batch
        windowSize={10}
      />
    </SafeAreaView>
  );
};

export default Notification;
