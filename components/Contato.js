import { View, StyleSheet, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Contato() {
	return(
		<View style={styles.view}>
			<Text style={styles.title}>
				Etec Joaquim Ferreira do Amaral
			</Text>
			<Text>
				R. Humaitá, 1090 - Centro, Jaú - SP, 17201-320
			</Text>
			<TouchableHighlight style={styles.button}>
				<Text style={{color: 'white', fontWeight: 'bold'}}>
					Tel: (14) 3622-3566
				</Text>
			</TouchableHighlight>
			<Text>
				Email: e070dir@cps.sp.gov.br
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'gray'
	},

	button: {
		padding: 10,
		backgroundColor: 'rgba(234, 66, 66, 1)',
		borderRadius: 10
	}
})