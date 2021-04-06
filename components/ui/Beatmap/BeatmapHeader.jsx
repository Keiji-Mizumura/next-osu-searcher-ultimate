import classes from "./BeatmapHeader.module.css";

import Mods from "../../../modules/Mods";
import ModImages from "../Images/ModImages";

import Rank from "../Images/Rank";

const BeatmapHeader = (props) => {
  const { isHidden, rank, handleClick, beatmap, mods, pp} = props;
  return (
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
            <span className={classes.beatmap_artist}> by {beatmap.artist}</span>
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
  );
};

export default BeatmapHeader;
