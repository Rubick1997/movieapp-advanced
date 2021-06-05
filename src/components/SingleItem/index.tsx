import React from "react";
import styles from "./styles.module.css";
import { img_300, unavailable } from "../../config/config";
import { fullDate } from "../../helpers/functions";
import { Badge } from "@material-ui/core";

type ItemType = {
  id: number;
  poster: string;
  title: string;
  date: string;
  vote_average: number;
  media_type: string;
};

const SingleItem = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}: ItemType) => {
  return (
    <div className={styles.media}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={styles.poster}
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={`${title} poster`}
      />
      <b className={styles.title}>{title}</b>
      <span className={styles.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className={styles.subTitle}>{fullDate(date)}</span>
      </span>
    </div>
  );
};

export default SingleItem;
