import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyNowPlaying from './spotify/SpotifyNowPlaying';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <SpotifyNowPlaying />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
