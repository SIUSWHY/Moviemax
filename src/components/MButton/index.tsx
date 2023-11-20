import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MColors from '../../utilities/colors';

interface MButtonType {
  callback?: any;
  title: string;
}

function MButton({callback, title}: MButtonType): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={callback}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: MColors.primary,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Jost-Bold',
  },
});

export default MButton;
