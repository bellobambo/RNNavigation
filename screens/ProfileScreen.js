import { View, Text, StyleSheet, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
    </View>
  );
};

export default ProfileScreen;

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
