import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MSocialLogin from '../../components/MSocialLogin';
import MButton from '../../components/MButton';
import Layout from '../../components/Layout';
import MSeparator from '../../components/MSeparator';
import MColors from '../../utilities/colors';

function LetsIn({navigation}) {
  return (
    <Layout>
      <Text style={styles.title}>Let's you in</Text>
      <View style={styles.btnContainer}>
        <MSocialLogin iconName="facebook" title="Facebook" />
        <MSocialLogin iconName="google" title="Google" />
        <MSocialLogin iconName="apple" title="Apple" />
      </View>
      <MSeparator text="or" />
      <MButton
        title="Sign in with password"
        callback={() => navigation.navigate('SignIn')}
      />
      <Text style={styles.signUp}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text}> Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  signUp: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  text: {
    color: MColors.primary,
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
