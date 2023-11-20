import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import BColors from '../../utilities/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface BSocialLoginType {
  title?: string;
  iconName: string;
  isBig?: boolean;
}

function BSocialLogin({title, iconName, isBig = true}: BSocialLoginType) {
  return (
    <TouchableOpacity style={styles.container}>
      {/* <Icon style={styles.icon} name={iconName} size={17} color="#9e9e9e" /> */}
      {isBig && <Text style={styles.text}>Continue with {title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: BColors.grey,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BColors.grey_10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Jost-Regular',
  },
});

export default BSocialLogin;
