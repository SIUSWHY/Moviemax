import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../../components/Layout';
import MHeader from '../../../components/MHeader';
import MBadge from '../../../components/MBadge';
import {useState} from 'react';
import MButton from '../../../components/MButton';

function Interest() {
  const interestsArr = [
    'Action',
    'Drama',
    'Comedy',
    'Adventure',
    'Romance',
    'Game',
  ];
  const [selected, setSelected] = useState<Array<string | never>>([]);

  const select = (text: string) => {
    if (selected.includes(text)) {
      setSelected(selected.filter(item => item !== text));
    } else {
      setSelected([...selected, text]);
    }
  };

  return (
    <Layout>
      <MHeader title="Choose Your Interest" />
      <Text style={styles.title}>
        Choose your interests and get the best movies recommendation. Don`t
        worry, you can always change it later.
      </Text>
      <View style={styles.badgeWrapper}>
        {interestsArr.map(item => (
          <MBadge key={item} title={item} callback={select} />
        ))}
      </View>
      <View style={styles.actionWrapper}>
        <MButton style={{flex: 1}} title="Skip" fill={false} />
        <MButton style={{flex: 1}} title="Continue" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    flex: 1,
  },
  badgeWrapper: {
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    rowGap: 15,
    marginVertical: 20,
    flexWrap: 'wrap',
    flex: 9,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Jost-Medium',
  },
});

export default Interest;
