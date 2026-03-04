import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
//cambiar los colores de los mensajes

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {

    // Validar los campos vacíos
    if (!email || !password) {
      setMensaje('Todos los campos son obligatorios');
      setIsError(true);
      return;
    }

    // Validar que tenga @
    if (!email.includes('@')) {
      setMensaje('El email debe incluir @');
      setIsError(true);
      return;
    }

    // Validar que la contraseña tenga minimo 6 caracteres
    if (password.length < 6) {
      setMensaje('La contraseña debe tener mínimo 6 caracteres');
      setIsError(true);
      return;
    }

    // Simular login
    setLoading(true);
    setMensaje('Verificando...');
    setIsError(false);

    setTimeout(() => { //Para tiempo de espera
      setLoading(false);

      if (email === 'admin@test.com' && password === '123456') {
        setMensaje('Bienvenido!');
        setIsError(false);
      } else {
        setMensaje('Credenciales incorrectas');
        setIsError(true);
      }

    }, 2000); //Equivale a 2 segundos
  };

  const [fontsLoaded] = useFonts({
    Insta: require('./assets/fonts/VeganStylePersonalUse-5Y58.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

//el text de el signup esta como anidado para que solo una parte tenga el estilo
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Instagram</Text>
      <TextInput placeholder="Phone number, username or email" placeholderTextColor={'#5e5e5e'} style={styles.input} value={email} onChangeText={setEmail}/>
      <TextInput placeholder="Password" placeholderTextColor={'#5e5e5e'} style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
      <Text style={styles.ForgotPassword}>Forgot password?</Text>
      <Pressable onPress={handleLogin} disabled={loading} style={({ pressed }) => [styles.button,
        pressed && { backgroundColor: '#0056b3' }, //al presionar
        loading && { backgroundColor: '#555' }     //al cargar
      ]}>
        <Text style={styles.buttonText}>
          Log In
        </Text>
      </Pressable>
      <Text style={[styles.mensaje, isError && styles.errorText]}>{mensaje}</Text>
      <View style={styles.optionsContainer}>
      <View style={styles.facebookRow}>
          <Entypo name="facebook" size={24} color="#007bff"/>
          <Text style={styles.optionFacebook}> Log In with facebook</Text>
        </View>
        <Text style={styles.optionOr}>OR</Text>
        <Text style={styles.optionOther}>Don't have an account? 
          <Text style={styles.signUpText}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  main: {
    fontFamily: 'Insta',
    fontSize: 26,
    lineHeight: 45,
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#131313',
  },
  ForgotPassword: {
    alignSelf: 'flex-end', //Para alinear a la derecha, dentro del contenedor
    marginBottom: 20,
    color: '#007bff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mensaje: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  errorText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 10,
    alignItems: 'center',
    color: '#fff',
    gap: 30,
  },
  optionFacebook: {
    color: '#007bff',
  },
  optionOr: {
    color: '#5e5e5e',
  },
  optionOther: {
    color: '#5e5e5e',
  },
  signUpText: {
    color: '#007bff',
  },
  facebookRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});