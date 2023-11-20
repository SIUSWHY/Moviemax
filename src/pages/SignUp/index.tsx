import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/Layout';
import BInput from '../../components/MInput';
import BCheckbox from '../../components/BCheckbox';
import {useState} from 'react';
import MButton from '../../components/MButton';
import BSeparator from '../../components/MSeparator';
import MSocialLogin from '../../components/MSocialLogin';

function SignUp() {
  const [isRemember, setRemember] = useState(false);

  return (
    <Layout>
      <Text style={styles.title}>Create your Account</Text>
      <View style={styles.inputWrapper}>
        <BInput placeholder="Email" />
        <BInput placeholder="Password" isPassword={true} />
      </View>
      <View>
        {/* <BCheckbox
                    isChecked={isRemember}
                    onPress={() => setRemember(!isRemember)}
                    title="Remember me"
                ></BCheckbox> */}
      </View>
      <MButton title="Sign Up" callback={() => console.log('sinUp')} />
      <BSeparator text="or continue with" />
      <View style={styles.socialWrapper}>
        <MSocialLogin isBig={false} iconName="facebook" />
        <MSocialLogin isBig={false} iconName="google" />
        <MSocialLogin isBig={false} iconName="apple" />
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
