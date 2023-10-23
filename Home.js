import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Home() {
//   const nav = useNavigation();
//   const drawerStatus = useDrawerStatus();
//   console.log(drawerStatus);

  return (
    <View style={styles.container}>
		<Text style={styles.text}>
			Olá! Esse app é para guiá-lo pelo curso de Desenvolvimento de Sistemas.
		</Text>
		<Text style={styles.text}>
			O curso tem três módulos e dura um ano e meio. Pensamos em desenvolver esse app para explicar o conteúdo
		</Text>
		<Image source={{uri: './assets/ds.png'}} />
		<Text style={[styles.text, styles.description]}>
			Esse app foi desenvolvido sob orientação do Prof. Tiago A. Silva.
		</Text>
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

  text: {
	textAlign: 'center'
  },

  description: {
	fontSize: 10
  }
});
