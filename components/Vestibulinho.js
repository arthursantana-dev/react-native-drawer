import { View, StyleSheet, Text, Linking } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Contato() {
	return(
		<View style={styles.view}>
			<Text style={styles.title}>
				Fique atento às datas, acesse o site abaixo
			</Text>
			<TouchableHighlight style={styles.button} onPress={() => {Linking.openURL('https://vestibulinhoetec.com.br')}}>
				<Text style={{color: 'white', fontWeight: 'bold'}}>
					Inscreva-se pelo site: www.vestibulinhoetec.com.br
				</Text>
			</TouchableHighlight>
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