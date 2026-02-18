import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Hola mundo</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./assets/images/a4.jpg')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 35,
  },
  titleContainer: {
    backgroundColor: "white",
    alignItems: 'center',
    width: "100%",
    marginTop: 40,
  },
  textTitle: {
    fontSize: 20
    fontWeight: 'bold',
    color: "#000",
    textAlign: "center",
    padding: 15
  },
  imageContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 200,
  }
});