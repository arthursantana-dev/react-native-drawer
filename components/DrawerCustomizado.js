import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {View, Image} from 'react-native'

export default function DrawerCustomizado(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Image source={require("../assets/etec.png")}/>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    )
}