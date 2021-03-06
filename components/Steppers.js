import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesome, Entypo} from '@expo/vector-icons';

export default function Steppers({max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View>
      <TouchableOpacity onPress={onDecrement}>
        <FontAwesome name="minus" size={30} color={'black'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onIncrement}>
        <FontAwesome name="plus" size={30} color={'black'} />
      </TouchableOpacity>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
