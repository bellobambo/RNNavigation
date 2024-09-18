import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ route, navigation }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen {name}</Text>
      <Button
        title="Update The Name"
        onPress={() =>
          navigation.setParams({
            name: "Bambo",
          })
        }
      />

      <Button
        title="Go Back To Home Page"
        onPress={() =>
          navigation.navigate("Home", {
            result: "Okay Nice",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
