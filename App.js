import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import Home from './Home';
import PaginaModulo from './components/PaginaModulo';
import dados from './dados'
import Componente from './components/Componente';


const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Inicial" screenOptions={{
				drawerActiveBackgroundColor: 'rgba(255, 24, 24, 0.34)',
				drawerActiveTintColor: 'rgba(234, 66, 66, 1)',
				headerStyle: {
					borderBottomColor: 'rgba(234, 66, 66, 1)',
					borderBottomWidth: 4
				},
				headerTitleStyle: { color: 'rgba(234, 66, 66, 1)' }
			}}>
				<Drawer.Screen name="Inicial" component={Home} />
				<Drawer.Screen name="Primeiro Módulo" component={PaginaModulo} initialParams={{ dados: dados[0]}} />
				<Drawer.Screen name="Segundo Módulo" component={PaginaModulo} initialParams={{ dados: dados[1] }} />
				<Drawer.Screen name='Componente' component={Componente} initialParams={{dados: dados}} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

