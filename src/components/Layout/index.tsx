import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import MColors from '../../utilities/colors';

function Layout({children}: {children: ReactNode}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: MColors.black,
  },
});

export default Layout;
