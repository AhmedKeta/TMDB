const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();

app.use(express.static("public")); // Serve static assets

app.get("*", (req, res) => {
  // Render your React app to a string
  const appContent = ReactDOMServer.renderToString(React.createElement('App'));

  // Send the rendered HTML back to the client
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My React App</title>
      </head>
      <body>
        <div id="root">${appContent}</div>
        <script src="/bundle.js"></script> <!-- Include your client-side bundle -->
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
