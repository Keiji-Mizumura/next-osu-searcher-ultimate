import { numberWithCommas, roundTwoDecimals } from "../../../modules/Math";
import getCountryName from "../../../modules/Country";
import Avatar from "../../ui/Images/Avatar";
import Container from "../../ui/Containers/Container";
import TopScores from "./TopScores";

import classes from "./PlayerInformation.module.css";

import { Fragment } from "react";
import RankStats from "./RankStats";
import CountryFlag from "../../ui/Images/CountryFlag";

const PlayerInformation = (props) => {
  const {
    playerID,
    playerName,
    country,
    rankedScore,
    accuracy,
    playCount,
    totalScore,
    totalHits,
    mode,
    pp_raw,
    count_rank_ss,
    count_rank_ssh,
    count_rank_s,
    count_rank_sh,
    count_rank_a,
    total_seconds_played,
    pp_rank,
    pp_country_rank

  } = props;

  return (
    <Fragment>
      <div className={classes.content}>
        <Container>
          <div className={classes.personal}>
            <div>
              <Avatar url={"http://s.ppy.sh/a/" + playerID} alt={playerName} />
            </div>
            <div className={classes.personal_info}>
              <h1>{playerName}</h1>
              <div className={classes.country}>
                <CountryFlag country={country} />
                <p>{getCountryName(country)}</p>
              </div>
            </div>
          </div>
          <div className={classes.stats}>
            <div>
              <p>Ranked Score</p>
              <p>Hit Accuracy</p>
              <p>Play Count</p>
              <p>Total Score</p>
              <p>Total Hits</p>
            </div>
            <div className={classes.values}>
              <p>{numberWithCommas(rankedScore)}</p>
              <p>{roundTwoDecimals(accuracy)}%</p>
              <p>{numberWithCommas(playCount)}</p>
              <p>{numberWithCommas(totalScore)}</p>
              <p>{numberWithCommas(totalHits)}</p>
            </div>
          </div>
        </Container>
      </div>

      <RankStats 
      mode={mode}
      playerID={playerID}
      pp_raw={pp_raw}
      count_rank_ss={count_rank_ss}
      count_rank_ssh={count_rank_ssh}
      count_rank_s={count_rank_s}
      count_rank_sh={count_rank_sh}
      count_rank_a={count_rank_a}
      total_seconds_played={total_seconds_played}
      pp_rank={pp_rank}
      pp_country_rank={pp_country_rank}
        />
      <TopScores playerID={playerID} mode={mode} />
    </Fragment>
  );
};

export default PlayerInformation;
