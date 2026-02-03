// Import React hooks and React Native components
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';

const CreateScreen = ({ data, setData }) => {
  // State for item name input
  const [iteamName, setiteamName] = useState('');
  // State for stock amount input
  const [stockAmt, setstockAmt] = useState('');
  // State to track if we're in edit mode
  const [isEdit, setIsEdit] = useState(false);
  // State to store the ID of the item being edited
  const [editingId, setEditingId] = useState(null);

  // Handler function to add new item or update existing item
  const handlerAddIteam = () => {
    if (isEdit) {
      // Update existing item
      setData(
        data.map(item =>
          item.id === editingId
            ? { ...item, name: iteamName, stock: parseInt(stockAmt) || 0 }
            : item,
        ),
      );
    } else {
      // Add new item
      const newDataItem = {
        id: data.length + 1,
        name: iteamName,
        stock: parseInt(stockAmt) || 0,
        unit: 'kg',
      };
      setData([...data, newDataItem]);
    }

    // Clear form and reset edit mode
    setiteamName('');
    setstockAmt('');
    setIsEdit(false);
    setEditingId(null);
  };

  // Handler function to delete an item
  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  // Handler function to populate form with item data for editing
  const handleEdit = item => {
    setIsEdit(true);
    setEditingId(item.id);
    setiteamName(item.name);
    setstockAmt(item.stock.toString());
  };

  // Handler function to cancel editing
  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditingId(null);
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
        keyboardType="numeric"
      />

      {/* Button container - shows cancel button when editing */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable
          style={[styles.button, { flex: 1 }]}
          onPress={() => handlerAddIteam()}
        >
          <Text style={styles.buttonText}>
            {isEdit ? 'UPDATE ITEM' : 'ADD ITEM IN STOCK'}
          </Text>
        </Pressable>

        {/* Show cancel button only when editing */}
        {isEdit && (
          <Pressable
            style={[styles.button, styles.cancelButton, { flex: 0.4 }]}
            onPress={handleCancelEdit}
          >
            <Text style={styles.buttonText}>CANCEL</Text>
          </Pressable>
        )}
      </View>

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
                <Pressable onPress={() => handleEdit(item)}>
                  <Text style={styles.itemText}> Edit</Text>
                </Pressable>

                <Pressable onPress={() => handleDelete(item.id)}>
                  <Text style={styles.itemText}> Delete</Text>
                </Pressable>
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
  // Cancel button style (red/orange color)
  cancelButton: {
    backgroundColor: '#FF6B6B',
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
