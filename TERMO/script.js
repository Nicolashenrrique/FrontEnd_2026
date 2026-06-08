const { useState, useEffect } = React;

function Tile({ letter, status, position }) {
  const className = `tile ${status ? status : ''}`;
  // Cria o atraso em cascata para a animação
  const style = status ? { animationDelay: `${position * 0.2}s` } : {};
  return <div className={className} style={style}>{letter}</div>;
}

function Row({ guess, isFinal, solution }) {
  const tiles = [];
  
  for (let i = 0; i < 5; i++) {
    const letter = guess[i] || '';
    let status = '';
    
    if (isFinal && solution) {
      if (letter === solution[i]) {
        status = 'correct';
      } else if (solution.includes(letter)) {
        status = 'present';
      } else {
        status = 'absent';
      }
    }
    
    tiles.push(<Tile key={i} letter={letter} status={status} position={i} />);
  }
  
  return <div className="row">{tiles}</div>;
}

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [solution, setSolution] = useState(""); 
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch('palavras.json')
      .then(response => response.json())
      .then(data => {
        const randomWord = data[Math.floor(Math.random() * data.length)];
        setSolution(randomWord.toUpperCase());
      })
      .catch(error => console.error("Erro ao ler palavras.json:", error));
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (isGameOver || isAnimating || !solution) return; 

      if (e.key === 'Enter') {
        if (currentGuess.length === 5) {
          const newGuesses = [...guesses, currentGuess.toUpperCase()];
          setGuesses(newGuesses);
          setCurrentGuess("");
          
          if (currentGuess.toUpperCase() === solution || newGuesses.length === 6) {
            setIsAnimating(true); // Trava o teclado
            setTimeout(() => setIsGameOver(true), 1500); // Aguarda a animação
          }
        }
        return;
      }

      if (e.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + e.key.toUpperCase());
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, isGameOver, isAnimating, guesses, solution]); 

  const totalRows = guesses.length + (!isGameOver && guesses.length < 6 ? 1 : 0);
  const empties = Array.from(Array(Math.max(0, 6 - totalRows)));

  return (
    <div className="game-info">
      <h1>Clone do Termo</h1>
      <div className="board">
        {guesses.map((g, i) => <Row key={`guess-${i}`} guess={g} isFinal={true} solution={solution} />)}
        
        {!isGameOver && guesses.length < 6 && <Row guess={currentGuess} isFinal={false} solution={solution} />}
        
        {empties.map((_, i) => <Row key={`empty-${i}`} guess="" isFinal={false} solution={solution} />)}
      </div>
      
      {isGameOver && (
        <p className="status">
          {guesses.includes(solution) ? '🏆 Você Venceu!' : `Fim de Jogo! A palavra era ${solution}`}
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);