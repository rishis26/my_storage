import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import AllItems from '../screens/Allitems.jsx';
import CreateScreen from '../screens/CreateScreen.jsx';

const data = [
  {
    id: 1,
    name: 'Wheat',
    unit: 'kg',
  },
  {
    id: 2,
    name: 'Rice',
    unit: 'kg',
  },
  {
    id: 3,
    name: 'Basmati rice',
    unit: 'kg',
  },
  {
    id: 4,
    name: 'pulse',
    unit: 'kg',
  },
  {
    id: 5,
    name: 'Corn',
    unit: 'kg',
  },
];

const HomeScreen = () => {
  const [view, setview] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(0)}
        >
          <Text
            style={[styles.btnText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(1)}
        >
          <Text
            style={[styles.btnText, view === 1 ? { color: 'white' } : null]}
          >
            Low stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(2)}
        >
          <Text
            style={[styles.btnText, view === 2 ? { color: 'white' } : null]}
          >
            Create
          </Text>
        </Pressable>
      </View>
      {view == 0 && <AllItems data={data} />}
      {view == 1 && <AllItems />}
      {view == 2 && <CreateScreen />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '8%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
