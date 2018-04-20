import React, { Component } from 'react';
import {  View, Text, Slider } from 'react-native';

export default function MySlider({max, unit, step, value, onChange}){
  return (
    <View>
      <Slider step = {step} value = {value} minimumValue= {0} maximumValue={max} onValueChange = {onChange}></Slider>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
