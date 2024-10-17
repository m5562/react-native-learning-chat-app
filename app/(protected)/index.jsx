import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { data } from "../../constants/data";

const Item = ({ item }) => (
  <View style={{ display: "flex", ...styles.item }}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: item.img,
      }}
    />
    <Text>{item.name}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 4,
    borderBottomColor: "#d1d5db",
    borderBottomWidth: 1,
    padding: 2,
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
