import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import TouchOp from "./src/screens/TouchOp";
import imageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import squareColorScreen from "./src/screens/squareColorScreen";




const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    TouchOp: TouchOp,
    image: imageScreen,
    Counter: CounterScreen,
    Color:ColorScreen,
    SquareColor : squareColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "FirstApp",
    },
  }
);

export default createAppContainer(navigator);
