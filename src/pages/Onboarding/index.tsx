import { StyleSheet, Text, View } from 'react-native';
import BButton from '../../components/Button';
import BStepper from '../../components/Stepper';
import { useState } from 'react';
import Layout from '../../components/Layout';
import BColors from '../../utilities/colors';

function Onboarding({ navigation }) {
    const [step, setStep] = useState<number>(0);

    const titleArr = [
        'Welcome to Bobo, a great friend to chat with you',
        'If you confused about what to do, just open Bobo',
        'Bobo will be ready to chat and make you happy',
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
            <View style={styles.img}></View>
            <Text style={styles.title}>{titleArr[step]}</Text>
            <View style={styles.stepperContainer}>
                <BStepper currentStep={step} count={3}></BStepper>
            </View>
            <BButton title={step < 2 ? 'Next' : 'Get Started'} callback={() => setNewStep()} />
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
        backgroundColor: BColors.primary,
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
    title: {
        fontSize: 48,
        fontFamily: 'Jost-Bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
});

export default Onboarding;
