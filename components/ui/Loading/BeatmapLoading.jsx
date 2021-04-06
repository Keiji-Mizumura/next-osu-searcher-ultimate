import classes from './BeatmapLoading.module.css';

const BeatmapLoading = () => {
  return (
    <div className={classes.beatmap}>
      <div className={classes.leftLoad}>
        <div className={classes.iconLoad}></div>
        <div className={classes.texts}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BeatmapLoading;
