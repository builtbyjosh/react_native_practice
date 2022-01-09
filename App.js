import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "testing 123",
    },
  }
);

export default createAppContainer(navigator);
