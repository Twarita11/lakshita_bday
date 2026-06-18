import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import camera from "./assets/camera.png";
import cd from "./assets/cd.png";
import lakshita from "./assets/lakshita.jpg";
import p1 from "./assets/p1.jpg";
import p10 from "./assets/p10.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import p5 from "./assets/p5.jpg";
import p6 from "./assets/p6.jpg";
import p7 from "./assets/p7.jpg";
import p8 from "./assets/p8.jpg";
import p9 from "./assets/p9.jpg";

const FONTS = [
  "'Georgia', serif",
  "'Courier New', monospace",
  "'Arial Black', sans-serif",
  "'Brush Script MT', cursive",
  "'Palatino Linotype', serif",
  "'Impact', sans-serif",
  "'Times New Roman', serif",
  "'Trebuchet MS', sans-serif",
];
const POLAROIDS = [
  { id: 1,  src: p1,  rotate: "-6deg", top: "5%",  left: "2%",  note: "remember this day?? i was so happy 🥹", date: "12 jan 2024" },
  { id: 2,  src: p2,  rotate: "4deg",  top: "5%",  left: "34%", note: "you looked absolutely unhinged here and i love it", date: "3 mar 2024" },
  { id: 3,  src: p3,  rotate: "-3deg", top: "5%",  left: "66%", note: "this is literally us every weekend lol", date: "17 apr 2024" },
  { id: 4,  src: p4,  rotate: "5deg",  top: "36%", left: "2%",  note: "i still can't believe we did this 😭", date: "2 jun 2024" },
  { id: 5,  src: p5,  rotate: "-4deg", top: "36%", left: "34%", note: "favourite photo of us, no contest", date: "28 jul 2024" },
  { id: 6,  src: p6,  rotate: "3deg",  top: "36%", left: "66%", note: "you were so excited here omg", date: "9 sep 2024" },
  { id: 7,  src: p7,  rotate: "-5deg", top: "67%", left: "2%",  note: "chaotic but make it cute", date: "31 oct 2024" },
  { id: 8,  src: p8,  rotate: "6deg",  top: "67%", left: "34%", note: "bestie of all time, no debate", date: "14 nov 2024" },
  { id: 9,  src: p9,  rotate: "-2deg", top: "67%", left: "66%", note: "this era was everything 🌸", date: "25 dec 2024" },
  { id: 10, src: p10, rotate: "4deg",  top: "67%", left: "34%", note: "happy birthday lakshita, i hate you the most 🖤", date: "18 jun 2025" },
];

function App() {
  const [showMemories, setShowMemories] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [selectedPolaroid, setSelectedPolaroid] = useState(null);

  useEffect(() => {
    if (showMemories) return;
    const interval = setInterval(() => {
      setFontIndex(i => (i + 1) % FONTS.length);
    }, 600);
    return () => clearInterval(interval);
  }, [showMemories]);

  return (
    <>
      {showMemories && <Confetti />}

      <div className="container">

  <div className="left">

  {/* Camera button — outside vinyl */}
  {showMemories && !selectedPolaroid && (
  <div
    className="camera-btn"
    onClick={() =>
      window.open("https://drive.google.com/drive/folders/1V7VDH8rRZJ92RG6665uXOdpy_KpHuVNB?usp=sharing", "_blank")
    }
  >
    <img src={camera} alt="more photos" />
  </div>
)}

  {/* Vinyl */}
  <div
    className="vinyl"
    onClick={() =>
      window.open(
        "https://open.spotify.com/playlist/4x3kYI8MCe7IiMNREdCdVO?si=b2028a4090b743c0&pt=8b46fac29c0d8679b8aa1e0540f36f06",
        "_blank"
      )
    }
  >
    <img src={cd} alt="CD" className="cd-image" />
    <img
      src={lakshita}
      alt="Lakshita"
      className="center-photo"
      onClick={(e) => {
        e.stopPropagation();
        if (showMemories) {
          setSelectedPolaroid(null);
          setShowMemories(false);
        } else {
          setShowMemories(true);
        }
      }}
    />
  </div>

  {/* Popup polaroid */}
  {selectedPolaroid && (
    <div className="popup-polaroid">
      <img src={selectedPolaroid.src} alt="selected memory" />
      <div className="popup-caption">📸 memory #{selectedPolaroid.id}</div>
    </div>
  )}

</div>

  <div className="right">
    {!showMemories && (
      <h1
        className="birthday-text"
        style={{ fontFamily: FONTS[fontIndex] }}
      >
        HAPPY<br />BIRTHDAY<br />LAKSHITA
      </h1>
    )}

    {showMemories && !selectedPolaroid && (
      <div className="polaroid-wall">
        {POLAROIDS.map(p => (
          <div
            key={p.id}
            className="polaroid"
            style={{ transform: `rotate(${p.rotate})`, top: p.top, left: p.left }}
            onClick={() => setSelectedPolaroid(p)}
          >
            <img src={p.src} alt={`memory ${p.id}`} />
            <div className="polaroid-caption">{p.date}</div>
          </div>
        ))}
      </div>
    )}

    {showMemories && selectedPolaroid && (
  <div className="postit">
    <p className="postit-text">{selectedPolaroid.note}</p>
  </div>
)}
  </div>

</div>
    </>
  );
}

export default App;