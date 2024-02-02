import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";

export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify logo"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled style={{ fontSize: "25px" }} />
            <span style={{ marginTop: "5px" }}>Home</span>
          </li>
          <li>
            <MdSearch style={{ fontSize: "25px" }} />
            <span style={{ marginTop: "3.8px" }}>Search</span>
          </li>
          <li>
            <IoLibrary style={{ fontSize: "25px" }} />
            <span style={{ marginTop: "5px" }}>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Gotham Circular', sans-serif;
  font-weight: 700;
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .top__links {
    display: flex;
    flex-direction: column;

    .logo {
      text-align: center;
      margin: 1rem 0;

      img {
        max-width: 80%;
        height: auto;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
