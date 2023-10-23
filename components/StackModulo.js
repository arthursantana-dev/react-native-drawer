import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import PaginaModulo from "./PaginaModulo";

export default function StackModulo({route}) {
    const {dados, idComponentesModulo, componentes} = route.params

    const Stack = createStackNavigator()
	
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Pagina Modulo" component={componentes[0]} initialParams={{dados: dados, idComponentesModulo: idComponentesModulo}} />

            {
                dados.map((d,i) => {
                    return <Stack.Screen key={i} name={`${dados[i].nome}`} component={componentes[1]} initialParams={{dados: dados, idComponentesModulo: idComponentesModulo + i}}/>
                })
            }
{/* 
            <Stack.Screen name="Componente" component={componentes[1]} initialParams={{dados: dados, idComponentesModulo: idComponentesModulo}}/>
            <Stack.Screen name="Componente 1" component={componentes[1]} initialParams={{dados: dados, idComponentesModulo: idComponentesModulo  +1}}/> */}
            {/* {
                componentes.map((c, i) => {
                    return (
                        <Stack.Screen options={{headerShown: i > 0? true : false}}  
                        key={i} 
                        name={`Componente ${i}`} 
                        component={c} 
                        initialParams={{dados: dados[id]}}/>
                    )
                })
            } */}
        </Stack.Navigator>
    )
}