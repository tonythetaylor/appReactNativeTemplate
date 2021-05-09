import React from 'react';
import { Button } from 'react-native';
import { 
  NavigationContainer,
  StackActions,
  DrawerActions,
  getFocusedRouteNameFromRoute
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import LandingScreen from './Screens/Landing';
import SignInScreen from './Screens/SignIn';
import SignUpScreen from './Screens/SignUp';
import PasswordForgetScreen from './Screens/PasswordForget';
import PasswordChangeScreen from './Screens/PasswordChange';
import HomeScreen from './Screens/Home';
import ProfileScreen from './Screens/Profile';
import AccountScreen from './Screens/Account';
import AdminScreen from './Screens/Admin';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';

const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Game" component={GameScreen} /> */}
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
 
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen
        name="Password Forget"
        component={PasswordForgetScreen}
      />
      <Drawer.Screen
        name="Password Change"
        component={PasswordChangeScreen}
      />
      <Drawer.Screen name="Admin" component={AdminScreen} />
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
 
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
 
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism
 
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffff',
        }}>
        {isAuthenticated ? (
            <RootStack.Screen 
              name="Home" 
              component={HomeDrawer}
              options={({ route, navigation }) => ({
                headerTitle: getFocusedRouteNameFromRoute(route),
                headerLeft: () => (
                  <Button
                    onPress={() =>
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                    title="Menu"
                  />
                ),
                headerRight: () => (
                  <Button onPress={handleSignOut} title="Sign Out" />
                ),
              })}
            />
          ) : (
            <>
              <RootStack.Screen
                name="Landing"
                component={LandingScreen}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
              <RootStack.Screen name="Sign In">
                {(props) => (
                  <SignInScreen {...props} onSignIn={handleSignIn} />
                )}
              </RootStack.Screen>
              <RootStack.Screen name="Sign Up">
                {(props) => (
                  <SignUpScreen {...props} onSignUp={handleSignUp} />
                )}
              </RootStack.Screen>
              <RootStack.Screen
                name="Password Forget"
                component={PasswordForgetScreen}
              />
            </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;