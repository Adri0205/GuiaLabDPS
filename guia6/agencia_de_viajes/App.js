import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./src/img/bg.jpg")} />;
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Qué hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividadl.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad3.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad4.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad5.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },

  titulo: { fontWeight: "bold", fontSize: 24, marginVertical: 10 },
  contenedor: { marginHorizontal: 10 },
  ciudad: { width: 250, height: 300, marginRight: 10 },
});

export default App;
