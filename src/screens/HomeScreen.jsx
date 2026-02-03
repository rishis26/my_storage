import { Pressable, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Low stock</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>
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
    paddingVertical: 5,
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
