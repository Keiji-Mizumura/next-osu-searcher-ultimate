import { useState, useEffect, Fragment } from "react";

import BeatmapLoading from "../Loading/BeatmapLoading";
import HiddenBeatmapContent from "./HiddenBeatmapContent";
import BeatmapHeader from "./BeatmapHeader";

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
      <BeatmapHeader 
        isHidden={isHidden}
        handleClick={handleClick}
        beatmap={beatmap}
        mods={mods}
        pp={pp}
        rank={rank}
      />

      {!isHidden && (
        <HiddenBeatmapContent 
            beatmap={beatmap}
            score={score}
            countmiss={countmiss}
            count50={count50}
            count100={count100}
            count300={count300}
            perfect={perfect}
            maxcombo={maxcombo}
            pp={pp}
        />
      )}
    </Fragment>
  );
};

export default Beatmap;
