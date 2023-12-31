import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layout from '../../components/Layout';
import BInput from '../../components/MInput';
import MCheckbox from '../../components/MCheckbox';
import {useState} from 'react';
import MButton from '../../components/MButton';
import BSeparator from '../../components/MSeparator';
import MSocialLogin from '../../components/MSocialLogin';
import MColors from '../../utilities/colors';

function SignUp({navigation}) {
  const [isRemember, setRemember] = useState(false);

  return (
    <Layout>
      <Text style={styles.title}>Create your Account</Text>
      <View style={styles.inputWrapper}>
        <BInput placeholder="Email" />
        <BInput placeholder="Password" isPassword={true} />
      </View>
      <View style={styles.checkboxContainer}>
        <MCheckbox
          isChecked={isRemember}
          onPress={() => setRemember(!isRemember)}
          title="Remember me"
        />
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
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.text}> Sign In</Text>
        </TouchableOpacity>
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginVertical: 15,
  },
  signUp: {
    marginTop: 15,
    textAlign: 'center',
  },
  text: {
    color: MColors.primary,
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Jost-Bold',
    marginBottom: 15,
  },
  inputWrapper: {
    rowGap: 20,
  },
});

export default SignUp;
