import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PaginaModulo({route}) {
	const {dados} = route.params

	console.log(dados);

	return(<View style={style.view}>
			{
				dados.map(c => <Text>{c.nome}</Text>)
			}
	</View>)
}

const style = StyleSheet.create({
	view: {
		flex: 1
	}
})