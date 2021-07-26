import React from 'react';
import {useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {BackButton, Bookmark} from '../assets/Icons';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import styles from './Style';
const Image1 = require('../assets/images/IPhone.png');
import Animated from 'react-native-reanimated';
const IMAGE_HEIGHT = 280;
const Post = ({navigation}) => {
  return (
    <Animated.View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.Image
          source={Image1}
          style={{
            width: theme.constants.screenWidth,
            height: IMAGE_HEIGHT,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
        <View
          style={{
            padding: 15,
            position: 'absolute',
            top: 0,
            backgroundColor: '#ffffff00',
          }}>
          <Pressable
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: true,
              radius: 20,
            }}
            onPress={() => navigation.goBack()}>
            <BackButton />
          </Pressable>
        </View>
        <View
          style={{
            width: theme.constants.screenWidth - 40,
            marginHorizontal: 20,
          }}>
          <View style={{marginVertical: 20, flexWrap: 'nowrap'}}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.sizes.h1,
                lineHeight: 40,
              }}>
              Update Iphone 13 Rumor New design in the Market?
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles2.BottomContainer}>
              <Text style={styles2.timeText}>34 Mins</Text>
              <Text style={styles2.categoryText}>Freedom</Text>
            </View>
            <View>
              <Pressable
                android_ripple={{
                  color: theme.colors.LightGray,
                  borderless: true,
                  radius: 15,
                }}>
                <Bookmark />
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <Text
            textBreakStrategy="balanced"
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: 14,
              lineHeight: 22,
              letterSpacing: 0.9,
              color: '#151010',
            }}>
            iPhone 13 price As for how much the iPhone 13 will cost, we'd expect
            the prices to track with the iPhone 12 range — $699, $799, $999 and
            $1,099, respectively. Apple tends to keep its pricing for each new
            generation of iPhone relatively close to the one that preceded it. A
            report by TrendForce says that the iPhone 13 pricing should be
            "relatively on par" with the current iPhone 13 models.
            Unfortunately, the firm also says that the iPhone 13 Pro models
            won't have a 1TB storage option. Various rumors point toward the new
            iPhone coming in the same four sizes as the iPhone 12: a 5.4-inch
            iPhone 13 mini, a 6.1-inch iPhone 13, a 6.1-inch iPhone 13 Pro and a
            6.7-inch iPhone 13 Pro Max. The new iPhones showed up in regulatory
            filings with the Eurasian Economic Commission; that filing included
            seven models, though that could include different configurations.
            Because the iPhone 12 mini hasn't sold well, rumors suggested that
            Apple might drop the iPhone 13 mini. However, subsequent reports
            have suggested that there will be an iPhone 13 mini, so let's assume
            we're going to see four models in the fall — at least for now.
            (Apple is reportedly developing a foldable iPhone, but the latest
            rumor suggests an iPhone Flip is two years out.) iPhone 13 name
            Early rumors about this fall's iPhone have used iPhone 13 as the
            name for the upcoming model, since Apple went from from the iPhone
            11 to the iPhone 12 last year. A handful of rumors have referred to
            the new iPhone by the iPhone 12s. However, while we won't know for
            sure what it's called until its release, a new report claims Apple
            will be sticking with the iPhone 13 name after all. Citing sources
            and supply chain checks, the report in the Economic Daily News says
            the iPhone 13 line-up will mirror that of the iPhone 12 in both
            naming structure and models. The "s" model of iPhones generally
            implied that the phone had a lot in common with last year's version,
            save for a few key improvements. So whether Apple goes with the
            iPhone 12s or iPhone 13 as a name will say a lot about how different
            this year's phone truly is. Interestingly, according to a survey of
            3,000 Apple users conducted by SellCell, 18.3% said they’d be put
            off buying a product called the iPhone 13 due to the number 13 being
            unlucky. A majority of respondents favored naming the handsets after
            the year of sale, with 38% backing the not very Apple-like iPhone
            (2021). 16% said the company should skip straight to iPhone 21.
            iPhone 13 design Advertisement A set of iPhone 13 dummy units have
            gotten the hands-on treatment by Apple Insider, and they show some
            of the biggest possible design changes. This includes moving the
            speaker towards the top of the device, a new diagonal camera
            arrangement for the regular iPhone 13 and a larger camera module for
            the iPhone 13 Pro. The SIM card tray is apparently moving further
            down as well, and the power buttons are shifting down a bit, too.
            We've seen other alleged iPhone 13 dummy units leaked by Sonny
            Dickson. They show only the back of Apple's lineup, but they do seem
            to line up with the rumors that the iPhone 13 will have a diagonal
            camera arrangement. In addition, the iPhone 13 Pro Max could be
            slightly larger than its predecessor. In fact, an alleged iPhone 13
            Pro case shows a considerably larger camera module, though this has
            not been confirmed.
          </Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Post;

const styles2 = StyleSheet.create({
  BottomContainer: {
    flex: 1,
    flexDirection: 'row',
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
});
