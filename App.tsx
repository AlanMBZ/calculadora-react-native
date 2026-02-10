import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Pressable, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Comienzo de calculadora</Text>

      <Image source={require('./assets/icon.png')} style={styles.image}></Image>

      <TextInput style={styles.input}></TextInput>
      <StatusBar style="auto" />

      <Pressable style={styles.button}>
        <Text style={{color: 'white'}}>Calcular</Text>
      </Pressable>



    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  }
});
