import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { View, Text } from "react-native";

export default function Componente({ route }) {

	const { dados } = route.params

	const c = dados

	return (
		<View>
			<Text>
				{c.nome}
			</Text>
				<Text>Atribuições e Responsabilidades</Text>
				<Text>
					{c.atribuicoesEResponsabilidades}
				</Text>
				<Text>Valores e Atitudes</Text>
				<Text>
					{c.valoresEAtitudes}
				</Text>

		</View>
	)
}