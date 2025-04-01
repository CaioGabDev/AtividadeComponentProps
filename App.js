import { View, StyleSheet, } from "react-native";
import Button from "./components/Button";

export default function Home() {
    return (
      <View style={styles.container}>
        <Button text="Oi" />
        <Button text="Map"/>
        <Button text="Carboni"/>
        <Button text="Perfil" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  