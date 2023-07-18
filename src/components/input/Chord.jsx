import cn from "classnames";
import styles from "./Chord.module.css";
import { useState } from "react";
import chords from "./chords";

const Chord = ({ onUpdateChordName, onSelectChord, onSelectChordNotes }) => {
  const [value, setValue] = useState("");
  const [selectedChord, setSelectedChord] = useState([]);
  const [suggestedChords, setSuggestedChords] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onUpdateChordName(inputValue);

    const selected = chords.find((chord) =>
      new RegExp(`^${inputValue}$`, "i").test(chord.key)
    );
    if (selected) {
      setSelectedChord(selected.play);
    } else {
      setSelectedChord([]);
    }

    const filteredChords = inputValue
      ? chords.filter((chord) =>
          new RegExp(`^${inputValue}`, "i").test(chord.key)
        )
      : [];
    setSuggestedChords(filteredChords);
  };

  const handleSelectChord = (chord) => {
    setSelectedChord(chord.play);
    onSelectChord(chord.key);
    const chordNotes = selectedChord.length > 0 && chord.play.join(", ");
    onSelectChordNotes(chordNotes);
    setValue(chord.key);
    setSuggestedChords([]);
  };

  const handleInputBlur = () => {
    if (value === "") {
      onSelectChordNotes("");
    }
  };

  return (
    <div className={styles.chordContainer}>
      <input
        className={cn(styles.header__chord)}
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="Enter chord"
      />

      {suggestedChords.length > 0 && value && (
        <ul className={styles.suggestions}>
          {suggestedChords.map((chord) => (
            <li
              key={chord.key}
              className={styles.suggestion}
              onClick={() => handleSelectChord(chord)}
            >
              {chord.key}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Chord;
