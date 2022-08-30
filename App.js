import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [a, setA] = useState(0);
  const [numero, setNumero] = useState(0);
  const [teksti, setTeksti] = useState('');
  const [laskuri, setLaskuri] = useState(1);

  useEffect(() => {
    setTeksti('Arvaa numero 1-100 väliltä');
    setNumero(Math.floor(Math.random() * 100) + 1);
  }, []);

  function arvaa(){
    if (a == numero){
      Alert.alert('Vastauksesi ' + a + ' oli oikea! Käytit ratkaisuun ' + laskuri + ' arvausta.')
      setLaskuri(0);
      setTeksti('Arvaa numero 1-100 väliltä');
      setNumero(Math.floor(Math.random() * 100) + 1);
      setA(0);
    } else if (a < numero) {
      setTeksti('Arvauksesi oli liian pieni')
      setLaskuri(laskuri+1);
    } else if (a > numero) {
      setTeksti('Arvauksesi oli liian suuri')
      setLaskuri(laskuri+1);
    }
  }


  return (
    <View style={styles.container}>
      <Text>{teksti}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setA(input)} value={a}/>
      <Button style={styles.button} onPress={arvaa} title='Arvaa'/>
      <StatusBar style="auto" />
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
    width: 40,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button : {
    flex: 1,
    width: 40,
  }
});
