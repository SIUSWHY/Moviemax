import {Pressable, StyleSheet, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

interface BCheckBoxType {
  onPress: any;
  title: string;
  isChecked: boolean;
}

function BCheckbox({onPress, title, isChecked}: BCheckBoxType) {
  const iconName = isChecked ? 'square-check' : 'square-check';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        {/* <Icon name={iconName} size={24} color="#000" /> */}
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '600',
  },
});

export default BCheckbox;
