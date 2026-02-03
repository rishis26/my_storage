import { StyleSheet, Text, View, FlatList } from 'react-native';
const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
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
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
