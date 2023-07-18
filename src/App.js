
import Keys from "./components/keys/Keys";
import Header from "./components/header/Header";
import Chord from "./components/input/Chord";
import cn from "classnames";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [soundOn, setSoundOn] = useState(true);
  const [chordName, setChordName] = useState("");
  const [chordNotes, setChordNotes] = useState("");

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  const updateChordName = (chord) => {
    setChordName(chord);
  };
  const updateChordNotes = (notes) => {
    setChordNotes(notes);
  };

  return (
    <div className={cn(styles.app)}>
      <Header soundOn={soundOn} toggleSound={toggleSound} chordName={chordName} chordNotes={chordNotes} />
      <Keys soundOn={soundOn} chordNotes={chordNotes} />
      <Chord
        onUpdateChordName={updateChordName}
        onSelectChord={updateChordName}
        onSelectChordNotes={updateChordNotes}
/>
    </div>
  );
}

export default App;


