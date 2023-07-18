import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import cn from "classnames";
import styles from "./Header.module.css";
import { useState } from "react";
import { MdPiano } from "react-icons/md";

const Header = ({ soundOn, toggleSound, chordName, chordNotes }) => {
  const [isSoundOn, setIsSoundOn] = useState(soundOn);
  const name = chordName;

  const handleClick = () => {
    setIsSoundOn(!isSoundOn);
    toggleSound();
  };

  return (
    <div className={cn(styles.header)}>
      <MdPiano className={cn(styles.header__icon)} />
      <div className={cn(styles.header__chord)}>
        <div className={cn(styles.header__chord_name)}>{name}</div>
      </div>
      <div className={cn(styles.sound)}>
        {isSoundOn ? (
          <GiSpeaker className={cn(styles.sound_on)} onClick={handleClick} />
        ) : (
          <GiSpeakerOff
            className={cn(styles.sound_off)}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
