import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../constants/theme'
import { theme } from '../constants'

const Category = ({name,selectedCategory,setselectedCategory}) => {

  
  return (
    <Pressable style={{paddingHorizontal:12,paddingVertical:6,borderWidth:1,borderRadius:8,borderColor:theme.colors.Blue,backgroundColor:selectedCategory===name?theme.colors.Blue:theme.colors.White}} onPress={()=>setselectedCategory(name)}>
      <Text style={{fontSize:fonts.subTitle.fontSize,color:selectedCategory===name?theme.colors.White:theme.colors.Blue}}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({})