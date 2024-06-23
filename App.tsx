import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import Board from './src/components/Board';

function App(): React.JSX.Element {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<null | 'X' | 'O' | 'draw'>(null);

  const handleCellPress = index => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = checkWinner(newBoard); // PASS THE BOARD T0 THE CHECK WINNER FUNCTION TO FIND OUT THE WINNER
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every(cell => cell)) {
      setWinner('draw');
    }
  };
  const checkWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if there's no winner
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset the board to all nulls
    setIsXNext(true); // Set the current player to 'X'
    setWinner(null); // Clear the winner
  };

  return (
    <View style={styles.container}>
      <Board board={board} onCellPress={handleCellPress} />
      {winner && (
        <Text style={styles.winnerText}>
          {winner === 'draw' ? 'draw' : `Winner : ${winner}`}
        </Text>
      )}
      <Button title="Reset Game" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 24,
    margin: 20,
  },
});

export default App;
