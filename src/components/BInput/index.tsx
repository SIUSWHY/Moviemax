import {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import BColors from '../../utilities/colors';

interface BInputType {
  placeholder: string;
  isPassword?: boolean;
}

function BInput({placeholder, isPassword = false}: BInputType) {
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={styles.searchSection}>
      {/* <Icon
        style={styles.searchIcon}
        name={isPassword ? 'lock' : 'envelope'}
        size={17}
        color="#9e9e9e"
      /> */}
      {isPassword ? (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isShow ? false : true}
          underlineColorAndroid="transparent"
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      )}
      {isPassword && (
        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
          {/* <Icon
            style={styles.searchIcon}
            name={isShow ? 'eye' : 'eye-slash'}
            size={20}
            color="#9e9e9e"
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BColors.grey,
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 10,
    paddingLeft: 0,
    backgroundColor: BColors.grey,
    color: BColors.primary,
  },
});

export default BInput;
