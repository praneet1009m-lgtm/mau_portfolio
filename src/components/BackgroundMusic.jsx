import React, { useEffect, useRef, useState } from "react";
import music from "../assets/music/BackgroundMusic.mp3";
import { Link } from "react-router-dom";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.2;

    const startMusic = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    startMusic();

    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => setPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener("click", handleFirstInteraction, {
      once: true,
    });

    window.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[#8b634b]
          bg-[#f3d2a8]
          text-xl
          text-[#4b3426]
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:rotate-6
        "
      >
        {playing ? "♫" : "♪"}
      </button>
    </>
  );
};

export default BackgroundMusic;