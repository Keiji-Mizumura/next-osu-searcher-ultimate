import { numberWithCommas, roundTwoDecimals } from "../../../modules/Math";
import Container from "../../ui/Containers/Container";
import Rank from "../../ui/Images/Rank";
import classes from "./RankStats.module.css";

import { useState, useEffect } from "react";

import { secondsToDayHourMinute } from "../../../modules/Time";
import LineChart from "../../../modules/LineChart";

const RankStats = (props) => {
  const {
    total_seconds_played,
    pp_raw,
    count_rank_ss,
    count_rank_ssh,
    count_rank_s,
    count_rank_sh,
    count_rank_a,
    pp_rank,
    pp_country_rank,
    playerID,
    mode,
  } = props;

  const [days, hours, minutes] = secondsToDayHourMinute(total_seconds_played);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rankData, setRankData] = useState([]);
  const [isError, setIsError] = useState(null);

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
            setRankData(data.map((score, index) => (
            {
                label: ``,
                x: index,
                y: score.pp
            }
            )
            ));
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

  return (
    <div className={classes.content}>
      <Container>
        <div className={classes.stats}>
          <div>
            <div className={classes.line}></div>
            <h2>Total Play Time</h2>
            <h1>
              {days}d {hours}h {minutes}m
            </h1>
          </div>
          <div>
            <div className={classes.lineB}></div>
            <h2>pp</h2>
            <h1>{numberWithCommas(Math.round(pp_raw))}</h1>
          </div>
        </div>
        <div className={classes.ranks}>
          <div>
            <Rank rank="SSH" />
            <h2>{numberWithCommas(count_rank_ssh)}</h2>
          </div>
          <div>
            <Rank rank="SS" />
            <h2>{numberWithCommas(count_rank_ss)}</h2>
          </div>
          <div>
            <Rank rank="SH" />
            <h2>{numberWithCommas(count_rank_sh)}</h2>
          </div>
          <div>
            <Rank rank="S" />
            <h2>{numberWithCommas(count_rank_s)}</h2>
          </div>
          <div>
            <Rank rank="A" />
            <h2>{numberWithCommas(count_rank_a)}</h2>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.ranking}>
          <div className={classes.graph}>
            <LineChart
              width={900}
              height={290}
              data={rankData}
              horizontalGuides={5}
              precision={0}
              verticalGuides={1}
            />
          </div>
          <div className={classes.glocal}>
            <div className={classes.global}>
              <h2>Global Ranking</h2>
              <h1>#{numberWithCommas(pp_rank)}</h1>
            </div>
            <div className={classes.local}>
              <h2>Country Ranking</h2>
              <h1>#{numberWithCommas(pp_country_rank)}</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RankStats;
