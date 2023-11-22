import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import axios from 'axios';
import { StaticRouter } from "react-router-dom/server";
import path from 'path';

const app = express();
const PORT = 3000;

const fetchData = async(endpoint) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`);
  return response.data;
};

// eslint-disable-next-line no-undef
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', async (req, res) => {
  try {
    const users = await fetchData('users');
    const albums = req.path.includes('/albums') ? await fetchData('albums') : [];
    const posts = req.path.includes('/posts') ? await fetchData('posts') : [];
    const photos = req.path.includes('/albums/album') ? await fetchData('photos') : [];

    const appData = { users, albums, posts, photos };


    const appMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={ req.url }>
        <App data={ appData } />
      </StaticRouter>
    );
    
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR without Next.js</title>
        <link rel="stylesheet" href="/style/server.css"></link>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/server.js"></script>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

