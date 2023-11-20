import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import MColors from '../../utilities/colors';

function MSeparator({text}: {text: string}) {
  return (
    <View style={styles.orSection}>
      <View style={styles.separator} />
      <Text style={styles.orText}>{text}</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  orSection: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  orText: {
    marginHorizontal: 10,
    fontFamily: 'Jost-Bold',
    fontSize: 20,
  },
  separator: {
    borderColor: MColors.grey_10,
    borderBottomWidth: 1,
    flex: 1,
    width: '50%',
  },
});

export default MSeparator;
