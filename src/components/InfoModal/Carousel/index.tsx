import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { CarouselType, CreditType } from "../../../types";
import styles from "./styles.module.css";
import { img_300, noPicture } from "../../../config/config";

const handleDragStart = (e: any) => {
  e.preventDefault();
};

const Carousel = ({ media_type, id }: CarouselType) => {
  const [credits, setCredits] = useState<CreditType[]>([]);

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
    console.log(data.cast[1])
  };

  const items = credits?.map((item) => (
    <div className={styles.item}>
      <img
        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
        alt={item?.name}
        onDragStart={handleDragStart}
        className={styles.img}
      />
      <b className={styles.text}>{item?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  useEffect(() => {
    try {
      fetchCredits();
    } catch (e) {
      console.log(e.message);
    }
     // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      disableDotsControls
      mouseTracking
      items={items}
      responsive={responsive}
    />
  );
};

export default Carousel;
