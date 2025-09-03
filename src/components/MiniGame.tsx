import React, { useState, useEffect } from "react"; 
import './MiniGame.css';

const maze = [
  "#####################",
  "#       #           #",
  "# ### # # ### ##### #",
  "#   # #   # #       #",
  "### # ##### # ### ###",
  "#   #       #   #   #",
  "# ##### ### ##### # #",
  "#       #           #",
  "# ### # ##### ### ###",
  "# #   #     #   #   #",
  "# # ### ### ### ### #",
  "#                   #",
  "#####################",
];

const itemsPositions = [
  { x: 2, y: 1, type: "espada", collected: false },
  { x: 17, y: 3, type: "escudo", collected: false },
  { x: 10, y: 11, type: "livro", collected: false },
];

const initialPlayer = { x: 1, y: 1 };

export const MiniGame: React.FC = () => {
  const [player, setPlayer] = useState(initialPlayer);
  const [items, setItems] = useState(itemsPositions);
  const [cellSize, setCellSize] = useState(30);

  useEffect(() => {
    const updateCellSize = () => {
      const maxWidth = Math.min(window.innerWidth - 40, 600);
      setCellSize(maxWidth / maze[0].length);
    };
    updateCellSize();
    window.addEventListener("resize", updateCellSize);

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case "arrowup":
        case "w":
          move(0, -1);
          break;
        case "arrowdown":
        case "s":
          move(0, 1);
          break;
        case "arrowleft":
        case "a":
          move(-1, 0);
          break;
        case "arrowright":
        case "d":
          move(1, 0);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", updateCellSize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [player, items]);

  const move = (dx: number, dy: number) => {
    const newX = player.x + dx;
    const newY = player.y + dy;
    if (maze[newY][newX] !== "#") {
      setPlayer({ x: newX, y: newY });
      setItems((prev) =>
        prev.map((item) =>
          item.x === newX && item.y === newY
            ? { ...item, collected: true }
            : item
        )
      );
    }
  };

  const collectedCount = items.filter((i) => i.collected).length;
  const allCollected = collectedCount === items.length;

  const wallColor = "#81482A";
  const floorColor = "#c48f72ff";

  return (
    <div className="flex flex-col items-center mt-10 px-2 relative">
      <h2 className="text-lg font-bold mb-2 text-center">
        Ajude o Yuri a coletar todos os seus itens
      </h2>
      <p className="mb-2 text-center">
        Itens: {collectedCount} / {items.length}
      </p>

      <div
        className="relative"
        style={{
          width: maze[0].length * cellSize,
          height: maze.length * cellSize,
        }}
      >
        {maze.map((row, y) =>
          row.split("").map((cell, x) => (
            <div
              key={`${x}-${y}`}
              style={{
                width: cellSize,
                height: cellSize,
                position: "absolute",
                top: y * cellSize,
                left: x * cellSize,
                backgroundColor: cell === "#" ? wallColor : floorColor,
                border: "1px solid #222",
              }}
            />
          ))
        )}

        {items.map(
          (item, idx) =>
            !item.collected && (
              <img
                key={idx}
                src={`/imagens/${item.type}.png`}
                alt={item.type}
                style={{
                  width: cellSize,
                  height: cellSize,
                  position: "absolute",
                  top: item.y * cellSize,
                  left: item.x * cellSize,
                  zIndex: 1,
                }}
              />
            )
        )}

        <img
          src="/imagens/fada.png"
          alt="player"
          style={{
            width: cellSize,
            height: cellSize,
            position: "absolute",
            top: player.y * cellSize,
            left: player.x * cellSize,
            zIndex: 2,
          }}
        />

        {allCollected && (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: maze[0].length * cellSize,
      height: maze.length * cellSize,
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    }}
    className="scale-up-center"
  >
    <img
      src="/imagens/perfil.png"
      alt="perfil"
      style={{
        width: "20%",
        height: "auto",
        objectFit: "contain",
        marginBottom: 15,
      }}
      className="scale-up-center"
    />
    <div className="dialog-box scale-up-center">
      Sua ajuda foi incrível, muito obrigado! Um novo desafio o aguarda… aceite o convite abaixo e venha se aventurar comigo.
    </div>
  </div>
)}



      </div>

      <div className="dpad-container">
        {/* WASD - Desktop */}
        <button onClick={() => move(0, -1)} className="dpad-btn up wasd">W</button>
        <button onClick={() => move(0, 1)} className="dpad-btn down wasd">S</button>
        <button onClick={() => move(-1, 0)} className="dpad-btn left wasd">A</button>
        <button onClick={() => move(1, 0)} className="dpad-btn right wasd">D</button>

        {/* Setas - Mobile/Tablet */}
        <button onClick={() => move(0, -1)} className="dpad-btn up arrow">↑</button>
        <button onClick={() => move(0, 1)} className="dpad-btn down arrow">↓</button>
        <button onClick={() => move(-1, 0)} className="dpad-btn left arrow">←</button>
        <button onClick={() => move(1, 0)} className="dpad-btn right arrow">→</button>
      </div>
    </div>
  );
};
