import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

    const [Time, setTime] = useState(new Date);

//Diferencia entre setInterval y setTimeout: el primero se ejecuta cada cierto tiempo, el segundo se ejecuta una sola vez después de un tiempo determinado
//LocaleTimeString es un método que devuelve una cadena con la representación de la hora en formato local

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Mundial Clocks</Text>
      
      <View style={styles.card}>
        <Text style={styles.city}>México Clock</Text>
        <Text style={styles.Text}>
          {Time.toLocaleTimeString('es-MX', {timeZone: 'America/Mexico_City'})}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.city}>New York Clock</Text>
        <Text style={styles.Text}>
          {Time.toLocaleTimeString('en-US', {timeZone: 'America/New_York' })}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.city}>London Clock</Text>
        <Text style={styles.Text}>
          {Time.toLocaleTimeString('en-GB', {timeZone: 'Europe/London' })}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.city}>Korea Clock</Text>
        <Text style={styles.Text}>
          {Time.toLocaleTimeString('ko-KR', {timeZone: 'Asia/Seoul' })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'Left',
    color: '#ffffff',

  },
  card: {
    backgroundColor: '#363636',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000000', // Sombra
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  city: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#eeeeee',
    marginBottom: 5,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e2e2e2',
  },
});