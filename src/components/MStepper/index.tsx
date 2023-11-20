import {StyleSheet, View} from 'react-native';
import MColors from '../../utilities/colors';
import {useEffect} from 'react';
import {Animated} from 'react-native';

interface MStepperType {
  count: number;
  currentStep: number;
}

function MStepper({currentStep, count}: MStepperType) {
  const dotSize = new Animated.Value(7);
  const rangeSteps: number[] = [...Array(count).keys()];

  const animateDot = () => {
    Animated.timing(dotSize, {
      toValue: 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateDot();
  }, [currentStep]);

  return (
    <View style={styles.container}>
      {rangeSteps.map((step: number) =>
        currentStep === step ? (
          <Animated.View
            key={step}
            style={[
              styles.dot,
              {width: dotSize, backgroundColor: MColors.primary},
            ]}
          />
        ) : (
          <View key={step} style={styles.dot} />
        ),
      )}
    </View>
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
    backgroundColor: MColors.grey_20,
    marginHorizontal: 5,
  },
});

export default MStepper;
