import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

const imagenesAnimo = {
  neutral: require('./assets/IMG/SERIO.png'),
  feliz: require('./assets/IMG/FELI.webp'),
  superFeliz: require('./assets/IMG/SUPERFELIZ.png'),
  triste: require('./assets/IMG/TITE.jpg'),
  muyTriste: require('./assets/IMG/MAL.jpg'),
};
/* math para limitar el rango del contador */
/*Poner la constante de todas las imagenes al principio y ya nada mas llamarlas despues */
export default function App() {
  const [animo, setAnimo] = useState(0);
  const [mensaje, setMensaje] = useState('Estado neutral');
  const [imagen, setImagen] = useState(imagenesAnimo.neutral);

  useEffect(() => {
    if (animo >= 8) {
      setMensaje('¡Madrugaste y dios te ayudó!');
      setImagen(imagenesAnimo.superFeliz);
      return;
    }

    if (animo >= 5) {
      setMensaje('Feli');
      setImagen(imagenesAnimo.feliz);
      return;
    }

    if (animo <= -8) {
      setMensaje('Ta tite?');
      setImagen(imagenesAnimo.muyTriste);
      return;
    }

    if (animo <= -5) {
      setMensaje('Desanimao');
      setImagen(imagenesAnimo.triste);
      return;
    }

    setMensaje('ni muy feliz ni muy triste');
    setImagen(imagenesAnimo.neutral);
  }, [animo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Ánimo</Text>
      <Image source={imagen} style={styles.image} />
      <Text style={styles.counter}>Ánimo: {animo}</Text>
      <Text style={styles.message}>{mensaje}</Text>

      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={() => setAnimo((valorActual) => Math.min(valorActual + 1, 10))}>
          <Text style={styles.buttonText}>Subir ánimo</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonSecondary]} onPress={() => setAnimo((valorActual) => Math.max(valorActual - 1, -10))}>
          <Text style={styles.buttonText}>Bajar ánimo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  counter: {
    fontSize: 22,
    marginTop: 8,
    fontWeight: '700',
  },
  message: {
    marginTop: 10,
    marginBottom: 24,
    fontSize: 18,
    color: '#363636',
    textAlign: 'center',
  },
  buttonsRow: {
    width: '100%',
    gap: 12,
  },
  button: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: '#264653',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
