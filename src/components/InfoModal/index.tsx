import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DescriptionIcon from "@material-ui/icons/Description";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./styles.module.css";
import axios from "axios";
import { ItemType } from "../../types";
import Carousel from "./Carousel";
import YouTube from "react-youtube";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: "90%",
      height: "80%",
      backgroundColor: "#39445a",
      border: "1px solid #282c34",
      borderRadius: 10,
      color: "white",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 3),
    },
  })
);

export default function InfoModal({ children, media_type, id }: any) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ItemType>();
  const [trailer, setTrailer] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line
  }, []);

  const fetchTrailer = async () => {
    if (trailer) {
      setTrailer("");
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setTrailer(data.results[0]?.key);
    }
  };

  return (
    <>
      <div
        color="inherit"
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
        className={styles.media}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className={styles.contentModal}>
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className={styles.contentPortrait}
                />
                {!trailer && (
                  <img
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className={styles.contentLandScape}
                  />
                )}
                <div className={styles.contentAbout}>
                  {!trailer && (
                    <span className={styles.contentTitle}>
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                  )}
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  {!trailer && (
                    <span className={styles.contentDescription}>
                      {content.overview}
                    </span>
                  )}
                  {trailer && <YouTube videoId={trailer} />}{" "}
                  <Button
                    variant="contained"
                    startIcon={!trailer ? <YouTubeIcon /> : <DescriptionIcon />}
                    color={!trailer ? "secondary" : "primary"}
                    onClick={fetchTrailer}
                  >
                    {!trailer ? "Watch the Trailer" : "Read the description"}
                  </Button>
                  <Carousel media_type={media_type} id={id} />
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
