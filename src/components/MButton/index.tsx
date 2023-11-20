import {StyleProp, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MColors from '../../utilities/colors';

interface MButtonType {
  callback?: any;
  title: string;
  fill?: boolean;
  style?: Record<string, any>;
}

function MButton({
  callback,
  title,
  fill = true,
  style,
}: MButtonType): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: fill ? MColors.primary : MColors.grey},
        style,
      ]}
      onPress={callback}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Jost-Bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default MButton;
