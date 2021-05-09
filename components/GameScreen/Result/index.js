import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { USER_FIGURE, AI_FIGURE, DRAW } from '../Game/constants';

const Result = ({ result, onRestartGameBtnClick }) => {
  const _getResultMessage = () => {
    switch (result) {
      case USER_FIGURE:
        return 'Player won the game';
      case AI_FIGURE:
        return 'AI won the game';
      case DRAW:
        return 'Draw';
    }
  }

    return (
      <View>
        <Text style={styles.result}>{_getResultMessage()}</Text>
        <TouchableOpacity onPress={onRestartGameBtnClick}>
          <Text style={styles.instructions}>Touch here to play again</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  result: {
    fontSize: 24,
    margin: 18,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});

export default Result;