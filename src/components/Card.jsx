// src/components/Card.jsx
import React from "react";
import { Chip } from "@mui/material";
import styles from "../styles/Card.module.css"; // Adjust the path based on your folder structure

const Card = ({ album }) => {
  return (
    <div className={styles.card}>
      <img src={album.image} alt={album.title} className={styles.image} />
      <div className={styles.info}>
        <Chip label={`${album.follow_count} Follows`} />
        <h3>{album.title}</h3>
      </div>
    </div>
  );
};

export default Card;
