import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Game from './Game';
import Result from './Result';

const GameScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)

  const handleGameFinish = result => {
    setResult(result)
  };

  const handleGameRestart = () => {
    console.log(navigation)
    navigation.dispatch(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Welcome' }),
          NavigationActions.navigate({ routeName: 'Game' }),
        ],
      }),
    );
  };

    return (
      <View style={styles.container}>
        <View pointerEvents={result ? 'none' : 'auto'}>
          <Game onFinish={handleGameFinish} />
        </View>
        {result && (
          <Result
            result={result}
            onRestartGameBtnClick={handleGameRestart}
          />
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;