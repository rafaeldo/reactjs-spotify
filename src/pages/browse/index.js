import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://img.discogs.com/TV3Wkv9wr-l9aJUxQ-QB-m420YQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1243297-1393304135-4550.jpeg.jpg"
          alt="Capa do Album"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
