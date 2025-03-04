import { View, Text, Button } from "react-native";
import { AuthStyles } from "@/styles/AuthStyles";
import { AuthenticatedScreenProps } from "@/types/AuthenticatedScreenTypes";

export const AuthenticatedScreen = ({ user, handleAuthentication }: AuthenticatedScreenProps) => {
    return (
      <View style={AuthStyles.authContainer}>
        <Text style={AuthStyles.title}>Welcome</Text>
        <Text style={AuthStyles.emailText}>{user.email ?? 'Unknown email'}</Text>
        <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
      </View>
    );
  };