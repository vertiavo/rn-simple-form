import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class AnswerScreen extends Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "");
    const surname = navigation.getParam("surname", "");
    const sex = navigation.getParam("sex", "");
    const age = navigation.getParam("age", "");
    const color = navigation.getParam("color", "");
    const gdpr = navigation.getParam("gdpr", false);

    return (
      <View style={styles.container}>
        <Text>Answer Screen</Text>

        <View style={styles.propertyRow}>
          <Text>Name: {name}</Text>
        </View>

        <View style={styles.propertyRow}>
          <Text>Surname: {surname}</Text>
        </View>

        <View style={styles.propertyRow}>
          <Text>Sex: {sex}</Text>
        </View>

        <View style={styles.propertyRow}>
          <Text>Age: {age}</Text>
        </View>

        <View style={styles.propertyRow}>
          <Text>Favorite color: {color}</Text>
        </View>

        <View style={styles.propertyRow}>
          <Text>GDPR: {JSON.stringify(gdpr)}</Text>
        </View>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.push("Question")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  propertyRow: {
    flex: 1
  }
});
