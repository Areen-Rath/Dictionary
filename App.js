/**
 * Dictionary ©
 * Areen Rath
 * 
 */

/**
 * The App contains the Dictionary screen at start with a drawer
 * navigator. This drawer navigator also contains the Home screen
 * button.
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dictionary from './screens/Dictionary';
import Help from './screens/Help';
import CustomSidebarMenu from './components/CustomSidebarMenu';

// Creating the drawer navigator.
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="English Dictionary"
          screenOptions={{
            headerTitleAlign: 'center',
            drawerActiveTintColor: "#ffaa00",
            drawerInactiveTintColor: "black"
          }}
          drawerContentOptions={{
            activeTintColor: "orange",
            inactiveTintColor: "black",
            itemStyle: {marginVertical: 5}
          }}
          drawerContent={props => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen
            name="English Dictionary"
            component={Dictionary}
            options={{
              headerStyle: {
                  backgroundColor: "#ffaa00"
              },
              headerTitleStyle: {
                  fontWeight: "bold"
              }
            }}
          />
          <Drawer.Screen
            name="Help and FAQs"
            component={Help}
            options={{
              headerStyle: {
                  backgroundColor: "#ffaa00"
              },
              headerTitleStyle: {
                  fontWeight: "bold"
              }
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}