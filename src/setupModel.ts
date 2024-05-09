import { Chess } from "chess.js";

export function setupModel(element: HTMLButtonElement, fen: string) {
  const runModel = () => {
    const chess = new Chess(fen);
    const evalulation = 1.0;
    const moves = chess.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    const bestMove = move;

    element.innerHTML = `eval is ${evalulation}, top move is ${move}`;
  };
  element.addEventListener("click", () => runModel());
  runModel();
}
