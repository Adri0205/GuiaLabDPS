import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const DATA = [
  { id: "1", title: "Toyota", src: require("./src/img/toyota.jpg") },
  { id: "2", title: "Mazda", src: require("./src/img/mazda.jpg") },
  { id: "3", title: "Mitsubishi", src: require("./src/img/mitsubishi.jpeg") },
];

const Item = ({ title, img }) => (
  <View style={styles.item}>
    <Image source={img} style={styles.image} resizeMode="contain" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Car Brands</Text>
        </View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Item title={item.title} img={item.src} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  list: {
    padding: 16,
    gap: 10,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
