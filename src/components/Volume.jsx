import React from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Make sure to import axios

import { useStateProvider } from '../utils/StateProvider';

export default function Volume() {
    const [{ token }] = useStateProvider();

    const setVolume = async (e) => {
        const volumeValue = e.target.value;

        await axios.put(
            'https://api.spotify.com/v1/me/player/volume',
            {},
            {
                params:{
                    volume_percent:parseInt(e.target.value)
                },
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            }
        ).then(
            // Handle successful response
            () => console.log('Volume updated successfully'),
            // Handle error
            (error) => console.error('Error updating volume:', error)
        );
    };

    return (
        <Container>
            <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    input {
        width: 15rem;
        border-radius: 2rem;
        height: 0.5rem;
    }
`