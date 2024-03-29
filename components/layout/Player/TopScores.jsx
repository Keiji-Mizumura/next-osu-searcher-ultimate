import Container from "../../ui/Containers/Container";

import classes from "./TopScores.module.css";

import Beatmap from "../../ui/Beatmap/Beatmap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const TopScores = ({ playerID, mode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [beatmaps, setBeatmaps] = useState([]);
  const [isError, setIsError] = useState(null);

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch(
      `https://osu.ppy.sh/api/get_user_best?k=52ae0ab0149244476e7bcc8f297b665ea69a6020&u=${playerID}&m=${mode}&limit=100&`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          if (mounted) {
            setIsLoaded(true);
            setBeatmaps(data);
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
  }, [playerID, mode]);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  if (isError) {
    return <></>;
  } else if (!isLoaded) {
    return (
      <div className={classes.content}>
        <Container>
          <div className={classes.header}>
            <h2>Loading...</h2>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.content}>
      <Container>
        <div className={classes.header}>
          <h2>Ranks</h2>
        </div>
        <div className={classes.performance}>
          <h2>
            <span className={classes.pink}></span>Best Performance{" "}
            <span className={classes.amount}>{beatmaps.length}</span>
          </h2>
        </div>
        {/* ITERATE BEATMAPS BELOW */}
        <div className={classes.collapse}>
          {beatmaps.map((item, index) =>
            index <= 5 ? (
              <div>
                <Beatmap
                  key={item.beatmap_id}
                  rank={item.rank}
                  beatmapId={item.beatmap_id}
                  pp={Math.round(item.pp)}
                  mods={item.enabled_mods}
                  score={item.score}
                  maxcombo={item.maxcombo}
                  count50={item["count50"]}
                  count100={item["count100"]}
                  count300={item["count300"]}
                  countmiss={item.countmiss}
                  perfect={item.perfect}
                />
              </div>
            ) : (
              <div className={collapse && classes.hidden}>
                <Beatmap
                  key={item.beatmap_id}
                  rank={item.rank}
                  beatmapId={item.beatmap_id}
                  pp={Math.round(item.pp)}
                  mods={item.enabled_mods}
                  score={item.score}
                  maxcombo={item.maxcombo}
                  count50={item["count50"]}
                  count100={item["count100"]}
                  count300={item["count300"]}
                  countmiss={item.countmiss}
                  perfect={item.perfect}
                />
              </div>
            )
          )}
          {
            beatmaps.length >= 5 ?
          <button className={classes.btn} onClick={handleClick}>
            <FontAwesomeIcon
              className={collapse ? classes.icon : classes.reversed_icon}
              icon={faChevronDown}
            />
            {collapse ? " SHOW MORE " : " SHOW LESS "}
            <FontAwesomeIcon
              className={collapse ? classes.icon : classes.reversed_icon}
              icon={faChevronDown}
            />
          </button>
          :
          <></>
          }
        </div>
      </Container>
    </div>
  );
};

export default TopScores;
