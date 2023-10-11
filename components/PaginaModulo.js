import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Componente from './Componente';

export default function PaginaModulo({ route }) {
	const {dados } = route.params

	const navigation = useNavigation()

	console.log(`PMODULO - dados: ${Array.from(dados).length}`);
	

	return (<View style={style.view}>
		<Text>
			Página Módulos
		</Text>

		{
			dados.map((c, i) => {
				return <TouchableHighlight style={style.button} onPress={() => {navigation.push(`Componente ${i}`)}}>
					<Text style={style.buttonText}>
						{`${dados[i].nome}`}
					</Text>
				</TouchableHighlight>
			})
		}

		{/* {
			
			dados.map((c, i) => {
				// console.log(`${i}: ${c}`);
				return (<TouchableHighlight key={i} style={style.button} onPress={() => {navigation.push(`Componente 1`)}}>
					<Text style={style.buttonText}>
						{c.nome}
					</Text>
				</TouchableHighlight>)
			})
		} */}
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