import {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MColors from '../../utilities/colors';

interface MInputType {
  placeholder: string;
  isPassword?: boolean;
}

function MInput({placeholder, isPassword = false}: MInputType) {
  const [isShow, setIsShow] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View
      style={[
        styles.searchSection,
        {borderColor: isFocus ? MColors.primary : MColors.grey},
      ]}>
      <Icon
        style={styles.searchIcon}
        name={isPassword ? 'lock' : 'envelope'}
        size={17}
        color={isFocus ? MColors.primary : MColors.grey_30}
      />
      {isPassword ? (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isShow ? false : true}
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocus(true)}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocus(true)}
        />
      )}
      {isPassword && (
        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
          <Icon
            style={styles.searchIcon}
            name={isShow ? 'eye' : 'eye-slash'}
            size={20}
            color={isFocus ? MColors.primary : MColors.grey_30}
          />
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
    backgroundColor: MColors.grey,
    borderWidth: 1,
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
    backgroundColor: MColors.grey,
    borderColor: MColors.primary,
    color: MColors.primary,
  },
});

export default MInput;
