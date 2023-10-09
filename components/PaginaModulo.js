import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Componente from './Componente';

export default function PaginaModulo({ route }) {
	const {dados} = route.params
	const navigation = useNavigation()

	return (<View style={style.view}>
		{
			dados.map((c, i) => {
				return <TouchableHighlight key={i} style={style.button} 
				onPress={() => { 
					navigation.setParams({
						dados: dados,
					})
					navigation.navigate("Componente", {dados: dados[i]})
					 }}>
					<Text style={style.buttonText}>
						{c.nome}
					</Text>
				</TouchableHighlight>
			})
		}
	</View>)
}

const style = StyleSheet.create({
	view: {
		flex: 1,
		padding: 2,
		justifyContent: 'center'

	},
	button: {
		padding: 23,
		marginBottom: 10,
		marginHorizontal: 8,
		backgroundColor: 'gray',
		borderRadius: 10
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 18,

	}
})