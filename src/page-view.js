/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>example</title>
          <link rel="stylesheet" href="index.css" />
          <script src="index.js"></script>
        </head>
        <body>
          INSERTBODYHERE
        </body>
      </html>
    );
  },
});
