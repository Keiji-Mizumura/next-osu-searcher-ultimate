import classes from "./Beatmap.module.css";
import Rank from "../Images/Rank";

import { useState, useEffect, Fragment } from "react";
import PreviewMusic from "../../music/PreviewMusic";

import Mods from "../../../modules/Mods";
import ModImages from "../Images/ModImages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ScoreData from "./ScoreData";
import BeatmapLoading from "../Loading/BeatmapLoading";

const Beatmap = (props) => {
  const {
    rank,
    beatmapId,
    pp,
    mods,
    score,
    maxcombo,
    count50,
    count100,
    count300,
    countmiss,
    perfect,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [beatmap, setBeatmap] = useState({});
  const [isError, setIsError] = useState(null);

  const [isHidden, setIsHidden] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(
      `https://osu.ppy.sh/api/get_beatmaps?k=52ae0ab0149244476e7bcc8f297b665ea69a6020&b=${beatmapId}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          if (mounted) {
            setIsLoaded(true);
            setBeatmap(data[0]);
          }
        },
        (error) => {
          if (mounted) {
            setIsLoaded(true);
            setIsError(error);
          }
        }
      );

    return function cleanup() {
      mounted = false;
    };
  }, [beatmapId]);

  const showButton = () => {
    setButtonVisible(!buttonVisible);
  };

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  // HANDLE ERROR AND LOADING

  if (isError) {
    return <></>;
  } else if (!isLoaded) {
    return (
      <BeatmapLoading />
    );
  }

  return (
    <Fragment>
      <div
        className={classes.beatmap}
        onClick={handleClick}
        style={!isHidden ? { backgroundColor: "var(--osu-dark)" } : {}}
      >
        <div className={classes.left}>
          <div className={classes.icon}>
            <Rank rank={rank} />
          </div>
          <div className={classes.beatmap_title}>
            <p className={classes.beatmap_name}>
              {beatmap.title}
              <span className={classes.beatmap_artist}>
                {" "}
                by {beatmap.artist}
              </span>
            </p>
            <p>
              <span className={classes.beatmap_version}>{beatmap.creator}</span>
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.mods}>
            <p>
              {Mods(mods).map((result) => (
                <span key={result}>{ModImages(result)}</span>
              ))}
            </p>
          </div>
          <div className={classes.pp}>
            <p>
              {pp}
              <span className={classes.smol_pp}>pp</span>
            </p>
          </div>
        </div>
      </div>

      {!isHidden && (
        <div className={classes.hidden}>
          <a
            target="_blank"
            href={`https://osu.ppy.sh/beatmapsets/${beatmap.beatmapset_id}/download`}
            onMouseOver={showButton}
            onMouseOut={showButton}
          >
            <img
              src={`https://assets.ppy.sh/beatmaps/${beatmap.beatmapset_id}/covers/cover.jpg`}
            />
            {buttonVisible ? (
              <button className={classes.buttonLink}>
                Download <FontAwesomeIcon icon={faDownload} />
              </button>
            ) : (
              <></>
            )}
          </a>
          <div className={classes.music}>
            <PreviewMusic music={beatmap.beatmapset_id} />
          </div>

          <ScoreData
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
      )}
    </Fragment>
  );
};

export default Beatmap;
