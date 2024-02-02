import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.data !== " ") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artists) => artists.name),
          images: item.album.images[2].url,
        };

        dispatch({ type: reducerCases.SET_PLAYLING, currentlyPlaying });
      }
    };

    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.images} alt="playing" />
          </div>
          <div className="track__info">
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      h4 {
        color: white;
        position: relative;
        font-family: 'Spotify Circular'
        font-weight: 100;

        &:not([data-long='true']) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }   
      }

      h6 {
        color: #b3b3b3;
        position: relative;
        bottom: 7px;

        &:hover {
          text-decoration: underline;
          color: white;
        }
      }
    }
  }
`;

