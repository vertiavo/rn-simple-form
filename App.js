import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import QuestionScreen from "./screens/QuestionScreen";
import AnswerScreen from "./screens/AnswerScreen";

const AppNavigator = createStackNavigator({
    Question: {
        screen: QuestionScreen,
    },
    Answer: {
        screen: AnswerScreen,
    },
}, {
    initialRouteName: 'Question',
});

export default createAppContainer(AppNavigator);