import { StyleSheet, Text, View, Pressable, TextInput, Animated, Dimensions } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
//Investigar bien que onda con useNativeDriver

//ancho de la pantalla para la animación
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Configuración de los climas
const CONFIG_CLIMA = {
  soleado: {
    mensaje: 'El día está perfecto para salir',
    getTemp: () => Math.floor(Math.random() * 10) + 25, // 25-34
    icono: 'sunny',
    colorFondo: '#FFD700',
    colorTexto: '#333',
  },
  nublado: {
    mensaje: 'El día está tranquilo y gris',
    getTemp: () => Math.floor(Math.random() * 10) + 20, // 20-29
    icono: 'cloud',
    colorFondo: '#646464',
    colorTexto: '#fff',
  },
  lluvioso: {
    mensaje: 'No olvides llevar paraguas',
    getTemp: () => Math.floor(Math.random() * 10) + 15, // 15-24
    icono: 'rainy',
    colorFondo: '#466177',
    colorTexto: '#fff',
  },
  tormenta: {
    mensaje: 'Mejor quédate en casa',
    getTemp: () => Math.floor(Math.random() * 10) + 10, // 10-19
    icono: 'thunderstorm',
    colorFondo: '#171d50',
    colorTexto: '#fff',
  },
};

export default function App() {
  const [clima, setClima] = useState('soleado');
  const [temperatura, setTemperatura] = useState(CONFIG_CLIMA[clima].getTemp());
  const [mensaje, setMensaje] = useState(CONFIG_CLIMA[clima].mensaje);

  // Funcion desplazamiento horizontal
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current; // Empieza fuera de pantalla (derecha)

  //Funcion cambia el clima y reinicia la animación
  const cambiarClima = (nuevoClima) => {
    setClima(nuevoClima);
  };

  // Función clima aleatorio
  const climaAleatorio = () => {
    const claves = Object.keys(CONFIG_CLIMA);
    let nuevoClima;
    do {
      nuevoClima = claves[Math.floor(Math.random() * claves.length)];
    } while (nuevoClima === clima); // Para que no se repita el mismo clima
    cambiarClima(nuevoClima);
  };

  useEffect(() => {
    // 1. Actualiza temperatura y mensaje
    setTemperatura(CONFIG_CLIMA[clima].getTemp());
    setMensaje(CONFIG_CLIMA[clima].mensaje);

    // 2. Ejecuta animación de desplazamiento
    // Reiniciar la animación
    slideAnim.setValue(SCREEN_WIDTH);
    // Animamos hacia la posición central (0)
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500, // Duración de la animación en ms
      useNativeDriver: true, // Para mejor rendimiento (no entendi muy bien esto pero asi decia xd)
    }).start();
  }, [clima, slideAnim]); // Se ejecuta cuando 'clima' cambia

  const configuracionActual = CONFIG_CLIMA[clima];

  return (
    <View style={[styles.container, { backgroundColor: configuracionActual.colorFondo }]}>
      <Text style={[styles.title, { color: configuracionActual.colorTexto }]}>Simulador de Clima</Text>

      <View style={styles.cityInputContainer}>
        <Text style={[styles.cityInputLabel, { color: configuracionActual.colorTexto }]}>Ciudad:</Text>
        <TextInput style={[styles.cityInput, { color: configuracionActual.colorTexto, borderColor: configuracionActual.colorTexto }]} 
          placeholder="Escribe tu ciudad" 
          placeholderTextColor={configuracionActual.colorTexto + '80'} 
        />
      </View>

      {/* Contenedor animado */}
      <Animated.View style={[styles.animatedContent, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.iconContainer}>
          <Ionicons name={configuracionActual.icono} size={120} color={configuracionActual.colorTexto} />
        </View>

        <View style={styles.ContainerClima}>
          <Text style={[styles.TextoClima, { color: configuracionActual.colorTexto }]}>Clima actual</Text>
          <Text style={[styles.clima, { color: configuracionActual.colorTexto }]}>{clima.charAt(0).toUpperCase() + clima.slice(1)}</Text>
        </View>

        <View style={styles.ContainerTemperatura}>
          <Text style={[styles.TextoTemperatura, { color: configuracionActual.colorTexto }]}>Temperatura</Text>
          <Text style={[styles.temperatura, { color: configuracionActual.colorTexto }]}>{temperatura}°C</Text>
        </View>

        <Text style={[styles.mensaje, { color: configuracionActual.colorTexto }]}>{mensaje}</Text>
      </Animated.View>

{/* BARRA DE BOTONES */}
      <View style={styles.segmentedControlWrapper}>
        <View style={styles.segmentedControl}>
          {['soleado', 'nublado', 'lluvioso', 'tormenta'].map((tipo) => (
            <Pressable 
              key={tipo}
              onPress={() => cambiarClima(tipo)}
              style={[
                styles.segmentButton, 
                clima === tipo && styles.activeSegment //si está seleccionado
              ]}
            >
              <Ionicons 
                name={CONFIG_CLIMA[tipo].icono} 
                size={22} 
                color={clima === tipo ? "white" : configuracionActual.colorTexto} //Para que se vuelva blanco el clima seleccionado (solo se ve en el soleado)
              />
            </Pressable>
          ))}
        </View>
        
        <Pressable style={styles.randomButton} onPress={climaAleatorio}>
          <FontAwesome name="random" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  cityInputLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  cityInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 200,
  },
  animatedContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    marginBottom: 10,
  },
  ContainerClima: {
    alignItems: 'center',
    marginBottom: 50,
  },
  TextoClima: {
    fontSize: 18,
    fontWeight: '600',
  },
  clima: {
    fontSize: 20,
    marginTop: 2,
  },
  ContainerTemperatura: {
    alignItems: 'center',
    marginBottom: 50,
  },
  TextoTemperatura: {
    fontSize: 18,
    fontWeight: '600',
  },
  temperatura: {
    fontSize: 56,
    fontWeight: 'bold',
  },
  mensaje: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  segmentedControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
    justifyContent: 'center',
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    padding: 4,
    flex: 1,
    maxWidth: 300,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  activeSegment: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  randomButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    borderRadius: 12,
    marginLeft: 10,
  }
});