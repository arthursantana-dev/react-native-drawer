import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Componente from './Componente';

export default function PaginaModulo({ route }) {
	const {dados, dadosId } = route.params

	const navigation = useNavigation()

	console.log(`Página Módulo: ${dadosId}`);
	

	return (<View style={style.view}>
		{
			
			dados.map((c, i) => {
				// console.log(`${i}: ${c}`);
				return (<TouchableHighlight key={i} style={style.button} onPress={() => {navigation.push(`Componente 1`)}}>
					<Text style={style.buttonText}>
						{c.nome}
					</Text>
				</TouchableHighlight>)
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
		padding: 20,
		marginBottom: 10,
		marginHorizontal: 8,
		backgroundColor: 'gray',
		borderRadius: 10
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,

	}
})