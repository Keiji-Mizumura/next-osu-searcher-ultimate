import classes from "./HiddenBeatmapContent.module.css";

import PreviewMusic from "../../music/PreviewMusic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ScoreData from "./ScoreData";

import BeatmapCover from "../Images/BeatmapCover";

import { useState } from 'react';

const HiddenBeatmapContent = (props) => {
  const {
    beatmap,
    score,
    countmiss,
    count50,
    count100,
    count300,
    perfect,
    maxcombo,
    pp,
  } = props;

  const [buttonVisible, setButtonVisible] = useState(false);

  const showButton = () => {
    setButtonVisible(!buttonVisible);
  };

  return (
    <div className={classes.hidden}>
      <a
        target="_blank"
        href={`https://osu.ppy.sh/beatmapsets/${beatmap.beatmapset_id}/download`}
        onMouseOver={showButton}
        onMouseOut={showButton}
      >
        <BeatmapCover beatmapset_id={beatmap.beatmapset_id} />
        {buttonVisible ? (
          <button className={classes.buttonLink}>
            Download <FontAwesomeIcon className={classes.icon} icon={faDownload} />
          </button>
        ) : (
          <></>
        )}
      </a>
      <div className={classes.music}>
        <PreviewMusic music={beatmap.beatmapset_id} />
      </div>

      <ScoreData
        beatmapset_id={beatmap.beatmapset_id}
        score={score}
        countmiss={countmiss}
        count50={count50}
        count100={count100}
        count300={count300}
        perfect={perfect}
        maxcombo={maxcombo}
        pp={pp}
      />
    </div>
  );
};

export default HiddenBeatmapContent;
