import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import PaginaModulo from './components/PaginaModulo';
import dados from './dados'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
		    <Drawer.Screen name="PaginaModulo" component={PaginaModulo} initialParams={{dados: dados[0]}}/> 
        <Drawer.Screen name="PaginaModulo2" component={PaginaModulo} initialParams={{dados: dados[1]}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
