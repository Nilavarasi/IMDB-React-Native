import Home from "./Screens/Home/index";
import Details from "./Screens/Details/index";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createStackNavigator({
    Home,
    Details,
  })
);
