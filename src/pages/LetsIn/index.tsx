import { StyleSheet, Text, View } from 'react-native';
import BSocialLogin from '../../components/BSocialLogin';
import BButton from '../../components/Button';
import Layout from '../../components/Layout';
import BSeparator from '../../components/BSeparator';

function LetsIn({ navigation }) {
    return (
        <Layout>
            <Text style={styles.title}>Let's you in</Text>
            <View style={styles.btnContainer}>
                <BSocialLogin iconName="facebook" title="Facebook"></BSocialLogin>
                <BSocialLogin iconName="google" title="Google"></BSocialLogin>
                <BSocialLogin iconName="apple" title="Apple"></BSocialLogin>
            </View>
            <BSeparator text="or"></BSeparator>
            <BButton title="Sign in with password" callback={() => navigation.navigate('SignUp')}></BButton>
            <Text style={styles.signUp}>
                Don't have an account?
                <Text> Sign Up</Text>
            </Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    signUp: {
        textAlign: 'center',
        paddingVertical: 10,
    },
    btnContainer: {
        marginVertical: 20,
        rowGap: 15,
    },
    title: {
        fontSize: 48,
        fontFamily: 'Jost-Bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
});

export default LetsIn;
