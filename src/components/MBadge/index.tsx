import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MColors from '../../utilities/colors';
import {useState} from 'react';

interface MBadgeType {
  title: string;
  callback: any;
}

function MBadge({title, callback}: MBadgeType) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsActive(!isActive);
        callback(title);
      }}
      style={[
        styles.wrapper,
        {backgroundColor: isActive ? MColors.primary : MColors.black},
      ]}>
      <Text
        style={[
          styles.title,
          {color: isActive ? MColors.white : MColors.primary},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: MColors.primary,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
    fontFamily: 'Jost-SemiBold',
  },
});

export default MBadge;
