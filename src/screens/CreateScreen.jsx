import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ViewBase,
} from 'react-native';

const CreateScreen = ({ data, setData }) => {
  const [iteamName, setiteamName] = useState('');
  const [stockAmt, setstockAmt] = useState('');

  const handlerAddIteam = () => {
    const newDataItem = {
      id: data.length + 1,
      name: iteamName,
      stock: stockAmt,
      unit: 'kg',
    };

    setData([...data, newDataItem]);
    setiteamName('');
    setstockAmt('');
  };

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
      <Pressable style={styles.button} onPress={() => handlerAddIteam()}>
        <Text style={styles.buttonText}>ADD ITEAM IN STOCK</Text>
      </Pressable>

      <View style={{ marginTop: 10 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>All items</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF' },
              ]}
            >
              <Text style={[styles.itemText, { color: '#000' }]}>
                {item.name}
              </Text>
              <Text style={[styles.itemText, { color: '#000' }]}>
                {item.stock} {item.unit}
              </Text>

              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Text style={styles.itemText}> Edit</Text>
                <Text style={styles.itemText}> Delete</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
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

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  headingText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    borderRadius: 7,
  },

  itemText: {
    fontSize: 15,
    color: '#555',
  },
});
