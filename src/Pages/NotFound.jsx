import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFrown } from 'react-icons/fa';



const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [userSymbol, setUserSymbol] = useState('X');
  const [computerSymbol, setComputerSymbol] = useState('O');
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleSymbolChange = (symbol) => {
    setUserSymbol(symbol);
    setComputerSymbol(symbol === 'X' ? 'O' : 'X');
    setBoard(Array(9).fill(null));
    setIsUserTurn(symbol === 'X');
    setGameOver(false);
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every(cell => cell)) {
      return 'Tie';
    }
    return null;
  };

  const minimax = (board, isMaximizing) => {
    const winner = calculateWinner(board);
    if (winner === userSymbol) return -1;
    if (winner === computerSymbol) return 1;
    if (winner === 'Tie') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      board.forEach((cell, idx) => {
        if (cell === null) {
          board[idx] = computerSymbol;
          const score = minimax(board, false);
          board[idx] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((cell, idx) => {
        if (cell === null) {
          board[idx] = userSymbol;
          const score = minimax(board, true);
          board[idx] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const computerMove = () => {
    let bestMove;
    let bestScore = -Infinity;
    board.forEach((cell, idx) => {
      if (cell === null) {
        const newBoard = [...board];
        newBoard[idx] = computerSymbol;
        const score = minimax(newBoard, false);
        if (score > bestScore) {
          bestScore = score;
          bestMove = idx;
        }
      }
    });
    if (bestMove !== undefined) {
      const newBoard = [...board];
      newBoard[bestMove] = computerSymbol;
      setBoard(newBoard);
      if (calculateWinner(newBoard)) {
        setGameOver(true);
      } else {
        setIsUserTurn(true);
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || gameOver || !isUserTurn) return;
    const newBoard = [...board];
    newBoard[index] = userSymbol;
    setBoard(newBoard);
    if (calculateWinner(newBoard)) {
      setGameOver(true);
    } else {
      setIsUserTurn(false);
    }
  };

  useEffect(() => {
    if (!isUserTurn && !gameOver) {
      const timer = setTimeout(() => {
        computerMove();
      }, 500); // Computer moves after 0.5s
      return () => clearTimeout(timer);
    }
  }, [isUserTurn, gameOver]);

  const winner = calculateWinner(board);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p className="text-lg font-bold">Choose Your Symbol:</p>
        <div className="flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 m-2 text-5xl font-extrabold rounded-lg shadow-lg transition-transform transform ${
              userSymbol === 'X'
                ? 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white'
                : 'bg-gray-300 text-gray-800'
            } hover:scale-105`}
            onClick={() => handleSymbolChange('X')}
          >
            X
          </button>
          <button
            className={`px-4 py-2 m-2 text-5xl font-extrabold rounded-lg shadow-lg transition-transform transform ${
              userSymbol === 'O'
                ? 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
            } hover:scale-105`}
            onClick={() => handleSymbolChange('O')}
          >
            O
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-64">
        {board.map((cell, index) => (
          <motion.div
            key={index}
            className={`w-16 h-16 border rounded flex items-center justify-center text-4xl font-bold cursor-pointer transition-all duration-300 ${
              cell === 'X'
                ? 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white'
                : cell === 'O'
                ? 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white'
                : 'bg-gray-400 text-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(index)}
          >
            {cell}
          </motion.div>
        ))}
      </div>
      {gameOver && (
        <div className="mt-4 mb-4">
          <p className="text-xl font-bold">
            {winner === 'Tie' ? "It's a Tie!" : `Winner: ${winner}`}
          </p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded mb-10"
            onClick={() => {
              setBoard(Array(9).fill(null));
              setGameOver(false);
              setIsUserTurn(userSymbol === 'X');
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};




const MemoryMatch = () => {
  const symbols = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍'];
  const [cards, setCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const shuffledCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol, flipped: false }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card) => {
    if (openedCards.length === 2 || openedCards.includes(card) || matched.includes(card.symbol)) return;

    setOpenedCards([...openedCards, card]);

    if (openedCards.length === 1) {
      if (openedCards[0].symbol === card.symbol) {
        setMatched([...matched, card.symbol]);
        setOpenedCards([]);
      } else {
        setTimeout(() => {
          setOpenedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 w-64">
      {cards.map((card) => {
        const isFlipped = openedCards.includes(card) || matched.includes(card.symbol);
        return (
          <motion.div
            key={card.id}
            className={`w-16 h-20 flex items-center  border rounded  justify-center text-2xl font-bold cursor-pointer ${isFlipped ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleCardClick(card)}
            whileTap={{ scale: 0.9 }}
          >
            {isFlipped ? card.symbol : ''}
          </motion.div>
        );
      })}
      {matched.length === symbols.length && (
        <div className="col-span-4 mt-4">
          <p className="text-xl font-bold">You Won!</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => {
              // Reset the game
              const shuffledCards = [...symbols, ...symbols]
                .sort(() => Math.random() - 0.5)
                .map((symbol, index) => ({ id: index, symbol, flipped: false }));
              setCards(shuffledCards);
              setOpenedCards([]);
              setMatched([]);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

const SpinnerGame = () => {
  const [spinnerSpeed, setSpinnerSpeed] = useState(0);

  const handleSpinnerClick = () => {
    setSpinnerSpeed(spinnerSpeed + 360);
  };

  return (
    <motion.div
      className="relative w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-8 flex items-center justify-center cursor-pointer"
      style={{ perspective: '1000px' }}
      animate={{ rotateY: spinnerSpeed }}
      transition={{ duration: 1, ease: "easeOut" }}
      onClick={handleSpinnerClick}
    >
      <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">Spin Me!</p>
    </motion.div>
  );
};



const WhackAMoleGame = () => {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState({ x: 0, y: 0 });
  const [isMoleVisible, setIsMoleVisible] = useState(false);

  useEffect(() => {
    const moleInterval = setInterval(() => {
      setMolePosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 200),
      });
      setIsMoleVisible(true);
      setTimeout(() => setIsMoleVisible(false), 800);
    }, 1200);
    return () => clearInterval(moleInterval);
  }, []);

  const handleMoleClick = () => {
    setScore(score + 1);
    setIsMoleVisible(false);
  };

  return (
    <div className="relative w-full h-64  rounded-lg overflow-hidden">
      <p className="text-lg mb-2">Whack-a-Mole: Click the mole!</p>
      {isMoleVisible && (
        <motion.div
          className="absolute w-16 h-16 bg-yellow-500 rounded-full"
          style={{ left: molePosition.x, top: molePosition.y }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMoleClick}
        />
      )}
      <p className="text-xl mt-4">Score: {score}</p>
    </div>
  );
};

const NotFound = () => {
  const [selectedGame, setSelectedGame] = useState('TicTacToe');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderGame = () => {
    switch (selectedGame) {
      case 'TicTacToe':
        return <TicTacToe />;
      case 'Spinner':
        return <SpinnerGame />;
      case 'WhackAMole':
        return <WhackAMoleGame />;
      case 'MemoryMatch':
        return <MemoryMatch />;
      default:
        return <TicTacToe />;
    }
  };
  const h1Variants = {
    initial: {
      opacity: 0.5,
      y: -30,
      rotate: 190,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: [0, 360], 
      transition: {
        duration: 2, 
        ease: 'easeOut',
        repeat: 2, 
      },
    },
    whileHover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-1 mt-20 mb-4">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
  <motion.h1
        className="text-red-500 text-4xl font-bold text-center"
        variants={h1Variants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
      >
        404 <FaFrown className="inline-block text-6xl text-yellow-300 ml-2" />
      </motion.h1>
        <p className="text-xl mt-2">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg mt-4">But you can play a game while you're here!</p>
      </motion.div>

      {/* Dropdown to select a game */}
      <div className="mb-8 ">
        <label className="mr-2 font-bold ">Select a Game:</label><br/>
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="p-2 border rounded w-full sm:w-auto md:max-w-sm lg:max-w-md text-center"
        >
          <option value="TicTacToe">Tic-Tac-Toe</option>
          <option value="Spinner">3D Spinner</option>
          <option value="WhackAMole">Whack-a-Mole</option>
          <option value="MemoryMatch">Memory Match</option>
        </select>
      </div>

      {/* Render the selected game */}
      {renderGame()}
    </div>
  );
};

export default NotFound;
