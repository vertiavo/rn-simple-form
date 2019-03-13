import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class AnswerScreen extends Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No name provided");
    const surname = navigation.getParam("surname", "No surname provided");
    const sex = navigation.getParam("sex", "No gender provided");
    const age = navigation.getParam("age", "No age provided");
    const color = navigation.getParam("color", "No color provided");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Answer Screen</Text>

        <View style={{ flex: 1 }}>
          <Text>Name: {name}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Surname: {surname}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Sex: {sex}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Age: {age}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Favorite color: {color}</Text>
        </View>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.push("Question")}
        />
      </View>
    );
  }
}
