import { StyleSheet, Text, View } from 'react-native';

const MyStampName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.madeBy}>Made by</Text>
      <Text style={styles.name}>Rishi Shah</Text>
    </View>
  );
};

export default MyStampName;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  madeBy: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
  },
  name: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
});
