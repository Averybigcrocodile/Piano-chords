import cn from "classnames";
import styles from "./Keys.module.css";

import A1 from "../../audio/A3.mp3";
import B1 from "../../audio/B3.mp3";
import Bb1 from "../../audio/Bb3.mp3";

import C2 from "../../audio/C4.mp3";
import D2 from "../../audio/D4.mp3";
import Db2 from "../../audio/Db4.mp3";
import E2 from "../../audio/E4.mp3";
import Eb2 from "../../audio/Eb4.mp3";
import F2 from "../../audio/F4.mp3";
import G2 from "../../audio/G4.mp3";
import Gb2 from "../../audio/Gb4.mp3";
import A2 from "../../audio/A4.mp3";
import B2 from "../../audio/B4.mp3";
import Ab2 from "../../audio/Ab4.mp3";
import Bb2 from "../../audio/Bb4.mp3";

import C3 from "../../audio/C5.mp3";
import D3 from "../../audio/D5.mp3";
import Db3 from "../../audio/Db5.mp3";
import E3 from "../../audio/E5.mp3";
import Eb3 from "../../audio/Eb5.mp3";

const Keys = ({ soundOn, chordNotes }) => {
  const chNotes = chordNotes.split(", ");
  const playNote = (audio) => {
    if (soundOn) {
      const note = new Audio(audio);
      note.play();
    }
  };

  const handleKeyPress = (audio) => {
    playNote(audio);
  };

  const handleKeyClick = (note, audio) => {
    handleKeyPress(audio);
  };

  let uniqueNotes = [];
  const renderKey = (note, audio) => {
    let isActive = "";

    if (
      note.length > 2 &&
      chNotes.includes(note) &&
      !uniqueNotes.includes(note)
    ) {
      isActive = note;
      uniqueNotes.push(note);
    } else if (
      note.length <= 2 &&
      chNotes.includes(note) &&
      !uniqueNotes.includes(note)
    ) {
      isActive = note;
      uniqueNotes.push(note);
    }

    return (
      <div
        className={cn(
          styles.key,
          {
            [styles.active]: isActive,
          },
          {
            [styles.blacks_key]: note.includes("#") || note.includes("b"),
          },
          {
            [styles.whites_key]: !note.includes("#") && !note.includes("b"),
          }
        )}
        onClick={() => handleKeyClick(note, audio)}
      ></div>
    );
  };

  return (
    <div className={cn(styles.keys)}>
      <div className={cn(styles.keys__octave)}>
        <div className={cn(styles.blacks)}>{renderKey("Bb1", Bb1)}</div>
        <div className={cn(styles.whites)}>
          {renderKey("A1", A1)}
          {renderKey("B1", B1)}
        </div>
      </div>
      <div className={cn(styles.keys__octave)}>
        <div className={cn(styles.blacks)}>
          {renderKey("Db2", Db2)}
          {renderKey("Eb2", Eb2)}
          {renderKey("Gb2", Gb2)}
          {renderKey("Ab2", Ab2)}
          {renderKey("Bb2", Bb2)}
        </div>
        <div className={cn(styles.whites)}>
          {renderKey("C2", C2)}
          {renderKey("D2", D2)}
          {renderKey("E2", E2)}
          {renderKey("F2", F2)}
          {renderKey("G2", G2)}
          {renderKey("A2", A2)}
          {renderKey("B2", B2)}
        </div>
      </div>
      <div className={cn(styles.keys__octave)}>
        <div className={cn(styles.blacks)}>
          {renderKey("Db3", Db3)}
          {renderKey("Eb3", Eb3)}
        </div>
        <div className={cn(styles.whites)}>
          {renderKey("C3", C3)}
          {renderKey("D3", D3)}
          {renderKey("E3", E3)}
        </div>
      </div>
    </div>
  );
};

export default Keys;
