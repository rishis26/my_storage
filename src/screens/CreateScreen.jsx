import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const CreateScreen = () => {
  const [iteamName, setiteamName] = useState('');
  const [stockAmt, setstockAmt] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name"
        placeholderTextColor="#999"
        style={styles.input}
        value={iteamName}
        onChangeText={item => setiteamName(item)}
      />
      <TextInput
        placeholder="Enter stock amount"
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ADD ITEAM IN STOCK</Text>
      </Pressable>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
