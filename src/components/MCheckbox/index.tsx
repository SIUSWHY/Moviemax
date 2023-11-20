import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import MColors from '../../utilities/colors';

interface MCheckBoxType {
  onPress?: any;
  title: string;
  isChecked: boolean;
}

function MCheckbox({onPress, title, isChecked}: MCheckBoxType) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.checkbox} onPress={onPress}>
        {isChecked ? (
          <Icon name="check" size={15} color={MColors.primary} />
        ) : (
          <View />
        )}
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
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: MColors.primary,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '600',
  },
});

export default MCheckbox;
