import React from 'react';
import {StyleSheet, Text, Animated, Flatlist, SafeAreaView} from 'react-native';
import {theme} from '../constants';
import Button from './Button';
import SmallCard from './SmallCard';

const Latest = () => {
  return (
    <SafeAreaView>
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <Button />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
    </SafeAreaView>
  );
};
const World = () => {
  return (
    <SafeAreaView>
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />

      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
    </SafeAreaView>
  );
};
const Technology = () => {
  return (
    <SafeAreaView>
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <Button />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
    </SafeAreaView>
  );
};
const Indonesia = () => {
  return (
    <SafeAreaView>
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <Button />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
    </SafeAreaView>
  );
};
export {Latest, World, Indonesia, Technology};
