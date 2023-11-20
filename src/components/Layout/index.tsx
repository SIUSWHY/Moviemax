import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import BColors from '../../utilities/colors';

function Layout({ children }: { children: ReactNode }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: BColors.black,
    },
});

export default Layout;
