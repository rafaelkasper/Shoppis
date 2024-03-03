import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";

export const Routes = () => {
  const token = "a1b2c3d4e5f6";
  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
