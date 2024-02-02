import React from "react";
import styled from "styled-components";

export default function Login() {
  const handelClick = () => {
    const clientId = "086b18338d874bb5bff34f20b87a232d";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href =`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
        )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="spotify logo"
      />
      <button onClick={handelClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000000;
  gap: 5rem;

  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #1db954;
    border: 4px solid #1db954;
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background-color: #000000;
    color: #1db954;
    border: 4px solid #1db954;
    outline: none;
  }
`;
