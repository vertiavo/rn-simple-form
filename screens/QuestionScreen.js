import React, { Component } from "react";
import {
  Button,
  Picker,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { CheckBox } from "react-native-elements";

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      sex: "",
      age: 1,
      color: "",
      gdpr: false,
      genders: [
        {
          label: "Male"
        },
        {
          label: "Female"
        },
        {
          label: "Other"
        }
      ]
    };
  }

  onPress = genders => this.setState({ genders });

  onChange = age =>
    this.setState(() => {
      return {
        age: parseFloat(age)
      };
    });

  render() {
    let selectedButton = this.state.genders.find(e => e.selected == true);
    this.state.sex = selectedButton
      ? selectedButton.label
      : this.state.genders[0].label;

    return (
      <View style={styles.container}>
        <View style={styles.propertyRow}>
          <View style={styles.propertyLabel}>
            <Text>Name</Text>
          </View>
          <View style={styles.propertyValue}>
            <TextInput
              placeholder="Insert your name"
              onChangeText={name => this.setState({ name })}
            />
          </View>
        </View>

        <View style={styles.propertyRow}>
          <View style={styles.propertyLabel}>
            <Text>Surname</Text>
          </View>
          <View style={styles.propertyValue}>
            <TextInput
              placeholder="Insert your surname"
              onChangeText={surname => this.setState({ surname })}
            />
          </View>
        </View>

        <View style={styles.propertyRow}>
          <View style={styles.propertyLabel}>
            <Text>Sex</Text>
          </View>
          <View style={styles.propertyValue}>
            <RadioGroup
              radioButtons={this.state.genders}
              onPress={this.onPress}
            />
          </View>
        </View>

        <View style={styles.propertyRow}>
          <View style={styles.propertyLabel}>
            <Text>Age</Text>
          </View>
          <View style={styles.propertyValue}>
            <Slider
              style={styles.slider}
              step={1}
              maximumValue={100}
              onValueChange={this.onChange.bind(this)}
              value={this.state.age}
            />
            <Text>{this.state.age}</Text>
          </View>
        </View>

        <View style={styles.propertyRow}>
          <View style={styles.propertyLabel}>
            <Text>Favorite color</Text>
          </View>
          <View style={styles.propertyValue}>
            <Picker
              selectedValue={this.state.color}
              style={styles.slider}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ color: itemValue })
              }
            >
              <Picker.Item label="Red" value="Red" />
              <Picker.Item label="Green" value="Green" />
              <Picker.Item label="Blue" value="Blue" />
            </Picker>
          </View>
        </View>

        <View style={styles.propertyRow}>
          <CheckBox center title="GDPR (RODO)" checked={(this.state.gdpr)}
            onPress={() => this.setState({ gdpr: !this.state.gdpr })}
          />
        </View>

        <Button
          title="Save"
          onPress={() => {
            this.props.navigation.navigate("Answer", this.state);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  propertyRow: {
    flex: 1,
    flexDirection: "row"
  },
  propertyLabel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  propertyValue: {
    flex: 3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  slider: {
    width: 250
  }
});
