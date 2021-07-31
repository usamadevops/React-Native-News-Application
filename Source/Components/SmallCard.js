import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';

let startAncestor;
let startNode;
const SmallCard = ({navigationscreen}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onLongPress={() => {
        navigation.navigate(navigationscreen);
      }}>
      <View
        style={styles.Maincontainer}
        ref={ref => (startAncestor = nodeFromRef(ref))}>
        <View style={styles.SmallCardContainer}>
          <View style={styles.CardLeftContainer}>
            <Text style={styles.headerText}>
              Build react native Application with Zero Experience
            </Text>

            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>34 Mins</Text>

              <Text style={styles.categoryText}>Freedom</Text>
            </View>
          </View>

          <View style={styles.CardRightContainer}>
            <SharedElement onNode={node => (startNode = node)}>
              <Image
                source={require('../assets/images/TopNews/card1.png')}
                style={{width: 85, height: 85, borderRadius: 10}}
              />
            </SharedElement>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SmallCard;
