import Icon from 'react-native-vector-icons/AntDesign';
import MColors from '../../utilities/colors';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {ReactNode} from 'react';

interface MHeaderType {
  title?: string;
  children?: ReactNode;
  navigation: any;
}

function MHeader({title, children, navigation}: MHeaderType) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.arrow}
          name="arrowleft"
          size={20}
          color={MColors.primary}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Jost-SemiBold',
    fontSize: 20,
  },
  arrow: {
    marginRight: 15,
  },
});

export default MHeader;
