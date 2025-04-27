import { Image, StyleSheet, Platform, Text, Button, View, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import base from '@/data/base.json'


export default function HomeScreen() {
  const [text, setText] = useState('');
  const [getter, setter] = useState<string[]>([])
  const [retrievedItems, setRetrievedItems] = useState<JSX.Element[]>([]);

  const [calculator, calRandom] = useState(0);

  const [dbList, setDbList] = useState<JSX.Element[]>([]);

  
  useEffect(() => {
    console.log("getter is changed:", getter);
  }, [getter]);
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.titleContainer}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <View style={styles.stepContainer}>
        <Text style={styles.title}>{JSON.stringify(getter)}</Text>

        <TextInput style={styles.input} placeholder='' value={text} onChangeText={setText}/>
     
        <Button title='add' onPress={() => {
          setter(prevItems => [...prevItems, text]);
          alert('Successfully added');
          setText('');
      }}/>

        <Button
          title="Retrieve"
          onPress={() => {
    if (getter.length > 0) {
    const items = getter.map((item, index) => (
    <Text key={index} style={{ fontSize: 18 }}>
      {index + 1}. {item}
    </Text>
    ));
    setRetrievedItems(items);
    } else {
    alert('No items to retrieve.');
        }
      }}
    />

    <Button title='Randoom number' onPress={() => {
      const x = Math.floor(Math.random() * 100);
      calRandom(x);
      setText(x.toString());
    }} />

    <Text style={styles.title}>{calculator}</Text>
    
    <Button title='Retrieve from DBlilst' onPress={()=>{
      
      const db = base.map((item, index) => (
        <Text key={index} style={{ fontSize: 18 }}>
          {item.id}. {item.title} {"Desctription: "}{item.description} 
        </Text>
      ));
      setDbList(db)
    }} /> 

    <View>
      {dbList}
    </View>

    <View style={{ marginTop: 20 }}>
      {retrievedItems.length > 0 ? retrievedItems : <Text>No items yet.</Text>}
    </View>
    



    </View>
    </ScrollView>
    </GestureHandlerRootView>  
  );
}
  
const styles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
  
    width: '33%',
    alignContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    fontSize: 26,
  },
  but: {
    fontSize: 16,
    color: '#fff'
  }, 
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  }

});
