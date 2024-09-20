import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handling different routes using if-else
  if (req.url === '/') {
    res.end('Welcome to the Home Page');
  } else if (req.url === '/about') {
    res.end('This is the About Page');
  } else if (req.url === '/contact') {
    res.end('Contact us at contact@example.com');
  } else {
    res.statusCode = 404; // If the route doesn't match, send a 404 response
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

