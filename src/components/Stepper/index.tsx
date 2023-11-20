import { StyleSheet, View } from 'react-native';
import BColors from '../../utilities/colors';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface BStepperType {
    count: number;
    currentStep: number;
}

function BStepper({ currentStep, count }: { currentStep: number; count: number }) {
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
                    <Animated.View key={step} style={[styles.dot, { width: dotSize }]} />
                ) : (
                    <View key={step} style={styles.dot} />
                )
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
        backgroundColor: BColors.primary,
        marginHorizontal: 5,
    },
});

export default BStepper;
