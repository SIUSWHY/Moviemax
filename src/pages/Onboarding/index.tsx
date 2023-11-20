import {StyleSheet, Text, View} from 'react-native';
import MButton from '../../components/MButton';
import MStepper from '../../components/MStepper';
import {useState} from 'react';
import Layout from '../../components/Layout';
import MColors from '../../utilities/colors';

function Onboarding({navigation}) {
  const [step, setStep] = useState<number>(0);

  const titleArr = [
    'The best movie app',
    'The best movie app',
    'The best movie app',
  ];

  const setNewStep = () => {
    if (step === 2 || step > 2) {
      navigation.navigate('LetsIn');
      return;
    }
    setStep(step + 1);
  };

  return (
    <Layout>
      <View style={styles.img} />
      <Text style={styles.title}>Welcome to Moviemax</Text>
      <Text style={styles.subtitle}>{titleArr[step]}</Text>
      <View style={styles.stepperContainer}>
        <MStepper currentStep={step} count={3} />
      </View>
      <MButton
        title={step < 2 ? 'Next' : 'Get Started'}
        callback={() => setNewStep()}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: MColors.primary,
    marginHorizontal: 5,
  },
  img: {
    flex: 3,
  },
  stepperContainer: {
    marginVertical: 25,
    display: 'flex',
    rowGap: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 37.9,
    fontFamily: 'Jost-Bold',
    marginHorizontal: 10,
    textAlign: 'center',
  },
});

export default Onboarding;
