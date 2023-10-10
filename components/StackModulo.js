import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

export default function StackModulo({route}) {
    const {dados, componentes} = route.params

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            {
                componentes.map((c, i) => {
                    console.log(`stackI: ${i}`);
                    return <Stack.Screen options={{headerShown: i > 0? true : false}}  
                    key={i} name={`Componente ${i}`} 
                    component={c} initialParams={{dados: dados, dadosId: i}}/>
                })
            }
        </Stack.Navigator>
    )
}