// src/components/Section.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "../styles/Section.module.css"; // Adjust the path based on your folder structure

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>
      <div
        className={styles.grid}
        style={{ display: isCollapsed ? "none" : "flex" }}
      >
        {albums.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;
