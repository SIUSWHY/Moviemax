import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../components/Layout';
import BInput from '../../components/BInput';
import BCheckbox from '../../components/BCheckbox';
import { useState } from 'react';
import BButton from '../../components/Button';
import BSeparator from '../../components/BSeparator';
import BSocialLogin from '../../components/BSocialLogin';

function SignUp() {
    const [isRemember, setRemember] = useState(false);

    return (
        <Layout>
            <Text style={styles.title}>Create your Account</Text>
            <View style={styles.inputWrapper}>
                <BInput placeholder="Email"></BInput>
                <BInput placeholder="Password" isPassword={true}></BInput>
            </View>
            <View>
                {/* <BCheckbox
                    isChecked={isRemember}
                    onPress={() => setRemember(!isRemember)}
                    title="Remember me"
                ></BCheckbox> */}
            </View>
            <BButton title="Sign Up" callback={() => console.log('sinUp')}></BButton>
            <BSeparator text="or continue with"></BSeparator>
            <View style={styles.socialWrapper}>
                <BSocialLogin isBig={false} iconName="facebook"></BSocialLogin>
                <BSocialLogin isBig={false} iconName="google"></BSocialLogin>
                <BSocialLogin isBig={false} iconName="apple"></BSocialLogin>
            </View>
            <Text style={styles.signUp}>
                Already have an account?
                <Text> Sign In</Text>
            </Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    signUp: {
        marginTop: 15,
        textAlign: 'center',
    },
    socialWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontFamily: 'Jost-Bold',
    },
    inputWrapper: {
        rowGap: 20,
    },
});

export default SignUp;
