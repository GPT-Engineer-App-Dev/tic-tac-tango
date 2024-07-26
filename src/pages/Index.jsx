import TicTacToe from '../components/TicTacToe';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe Game</h1>
      <TicTacToe />
    </div>
  );
};

export default Index;
