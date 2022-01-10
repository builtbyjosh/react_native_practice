import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CountScreen from "./src/screens/CountScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import RandomColor from "./src/screens/RandomColor";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Count: CountScreen,
    Color: RandomColor,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "testing 123",
    },
  }
);

export default createAppContainer(navigator);
