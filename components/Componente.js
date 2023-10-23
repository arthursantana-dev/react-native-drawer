import { View, Text, StyleSheet } from "react-native";

export default function Componente({ route }) {

	const { dados, idComponentesModulo } = route.params

	return (
		<View style={style.view}>
			<Text style={[style.text, style.title]}>
				{dados[idComponentesModulo].nome}
			</Text>
				<Text style={[style.text, style.contentTitle]}>Atribuições e Responsabilidades</Text>
				<Text style={style.text}>
					{dados[idComponentesModulo].atribuicoesEResponsabilidades}
				</Text>
				<Text style={[style.text, style.contentTitle]}>Valores e Atitudes</Text>
				<Text style={style.text}>
					{dados[idComponentesModulo].valoresEAtitudes}
				</Text>
		</View>
	)
}

const style = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		gap: 10
	},

	title: {
		color: 'rgba(234, 66, 66, 1)',
		fontWeight: 'bold',
		fontSize: 30
	},

	contentTitle: {
		backgroundColor: 'gray',
		color: 'white',
		fontSize: 15,
		padding: 4
	},

	text: {
		textAlign: 'center',
		fontSize: 14
	}
})