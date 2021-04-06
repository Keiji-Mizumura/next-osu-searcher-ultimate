import classes from "./ScoreData.module.css";

import { standard } from '../../../modules/Accuracy'
import { numberWithCommas } from '../../../modules/Math'

const ScoreData = (props) => {
  const {
    score,
    countmiss,
    count50,
    count100,
    count300,
    perfect,
    maxcombo,
    pp,
  } = props;

  return (
    <div className={classes.player_results}>
      <div>
        <div className={classes.thumbnail}></div>

        <div>
          <div className={classes.top_results}>
            <div>
              <h2>TOTAL SCORE</h2>
              <h1>{numberWithCommas(score)}</h1>
            </div>
            <div>
              <h2>ACCURACY</h2>
              <h1
                className={
                  standard(+countmiss, +count50, +count100, +count300) == 100
                    ? classes.green
                    : {}
                }
              >
                {standard(+countmiss, +count50, +count100, +count300)}%
              </h1>
            </div>
            <div>
              <h2>MAX COMBO</h2>
              {+perfect ? (
                <h1 className={classes.green}>{maxcombo}x</h1>
              ) : (
                <h1>{maxcombo}x</h1>
              )}
            </div>
          </div>
          <div className={classes.bottom_results}>
            <div>
              <h2>300</h2>
              <h1>{count300}</h1>
            </div>
            <div>
              <h2>100</h2>
              <h1>{count100}</h1>
            </div>
            <div>
              <h2>50</h2>
              <h1>{count50}</h1>
            </div>
            <div>
              <h2>MISS</h2>
              <h1>{countmiss}</h1>
            </div>
            <div>
              <h2>PP</h2>
              <h1>{pp}</h1>
            </div>
            <div>
              <h2>TIME</h2>
              <h1>14m</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreData;
