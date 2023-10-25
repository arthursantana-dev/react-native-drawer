import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import Home from './Home';
import PaginaModulo from './components/PaginaModulo';
import dados from './dados'
import Componente from './components/Componente';
import StackModulo from './components/StackModulo';
import Vestibulinho from './components/Vestibulinho';
import Contato from './components/Contato';
import DrawerCustomizado from './components/DrawerCustomizado'

const Drawer = createDrawerNavigator();

export default function App() {
	return (
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Inicial" drawerContent={props => <DrawerCustomizado {...props}/>} screenOptions={{
					drawerActiveBackgroundColor: 'rgba(255, 24, 24, 0.34)',
					drawerActiveTintColor: 'rgba(234, 66, 66, 1)',
					headerStyle: {
						borderBottomColor: 'rgba(234, 66, 66, 1)',
						borderBottomWidth: 4
					},
					headerTitleStyle: { color: 'rgba(234, 66, 66, 1)' }
				}}>
					
					<Drawer.Screen name="Inicial" component={Home} />
					<Drawer.Screen name="Primeiro Módulo" component={StackModulo} initialParams={{ dados: dados[0], idComponentesModulo: 0, componentes: [PaginaModulo, Componente]}} />
					<Drawer.Screen name="Segundo Módulo" component={StackModulo} initialParams={{ dados: dados[1], idComponentesModulo: 0, componentes: [PaginaModulo, Componente]}} />
					<Drawer.Screen name="Terceiro Módulo" component={StackModulo} initialParams={{ dados: dados[2], idComponentesModulo: 0, componentes: [PaginaModulo, Componente]}} />
					<Drawer.Screen name='Vestibulinho' component={Vestibulinho}/>
					<Drawer.Screen name='Contato' component={Contato}/>
				</Drawer.Navigator>
			</NavigationContainer>
	);
}

