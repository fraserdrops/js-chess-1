import { setupCounter } from "./counter.ts";
import { setupModel } from "./setupModel.ts";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
    <button id="model" type="button"></button>
  </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

import { Chessground } from "chessground";

const fen = "r2q2k1/1p6/p2p4/2pN1rp1/N1Pb2Q1/8/PP1B4/R6K w - - 2 25";

setupModel(document.querySelector<HTMLButtonElement>("#model")!, fen);

Chessground(document.getElementById("board-1"), { fen });
Chessground(document.getElementById("board-2"), {
  fen,
});
Chessground(document.getElementById("board-3"), {
  drawable: {
    autoShapes: [
      {
        orig: "a2",
        dest: "a6",
        brush: "green",
        label: { text: "A" },
        modifiers: {
          hilite: true,
        },
      },
      {
        orig: "b2",
        dest: "b6",
        brush: "blue",
        label: { text: "B" },
        modifiers: {
          lineWidth: 6,
        },
      },
      {
        orig: "c2",
        dest: "c4",
        brush: "red",
        label: { text: "C" },
      },
      {
        orig: "d2",
        dest: "d3",
        brush: "green",
        label: { text: "D" },
      },
      {
        orig: "f1",
        dest: "h3",
        brush: "blue",
        label: { text: "F" },
      },
      {
        orig: "g1",
        dest: "f3",
        brush: "yellow",
        label: { text: "E" },
      },
    ],
  },
});
const board4El = document.getElementById("board-4");
board4El !== null &&
  Chessground(board4El, {
    orientation: "black",
    coordinatesOnSquares: true,
    ranksPosition: "left",
  });
Chessground(document.getElementById("board-5"), {
  orientation: "white",
  coordinatesOnSquares: true,
});
