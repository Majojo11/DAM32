import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container1}>
        <Text style={styles.title}>RAICES QUE SE MUEVEN</Text>
        <Text style={styles.subtitle}>Danza Folklórica Mexicana</Text>
        <Image source={require('./assets/Danza.jpeg')} style={styles.image} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.quote}>
          “La danza folklórica es una forma de expresar la historia, identidad y emociones de cada región de México.”
        </Text>
      </View>  
      <View style={styles.container3}>
        <Text style={styles.identity}>El folklore como identidad</Text>
        <Text style={styles.descriptionWCard}>
          La danza folklórica mexicana es una manifestación cultural que refleja la diversidad y riqueza de las tradiciones de México. Cada región tiene sus propios bailes, vestuarios y música, que cuentan historias de la vida cotidiana, festividades y leyendas ancestrales.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#F7F5F2',
    paddingVertical: 50,
  },
  container1: {
    alignItems: 'center',
    marginTop: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    color: '#2B2B2B',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 30,
    color: '#2B2B2B',
  },
  image: {
    width: 320,
    height: 220,
    borderRadius: 15,
    marginBottom: 30,
  },
  container2: {
    backgroundColor: '#4bc7a0',
    padding: 15,
  },
  quote: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 20,
    lineHeight: 22,
    color: '#2B2B2B',
  },
  container3: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  identity: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 25,
    color: '#21578e',
  },
  descriptionWCard: {
    fontSize: 16,
    textAlign: 'justify',
    backgroundColor: 'rgba(0, 63, 44, 0.05)',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    color: '#000000',
  },
});
