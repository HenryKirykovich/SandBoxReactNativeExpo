import { Image, StyleSheet, Platform, Text, Button, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import base from '@/data/base.json';

export default function Explore() {
  const [dbList, setDbList] = useState<JSX.Element[]>([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.titleContainer}>
        <Button title="Retrieve from DBList" onPress={() => {
          const db = base.map((item, index) => (
            <Text key={index} style={{ fontSize: 18 }}>
              {item.id}. {item.title} {"Description: "}{item.description}
            </Text>
          ));
          setDbList(db);
        }} />
        <View>
          {dbList}
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
