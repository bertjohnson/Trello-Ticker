Trello Ticker
=============

Simple HTML / AngularJS application that allows a [Trello](https://trello.com) board to be displayed as a news ticker. Designed for Twitch streaming.

Easily update your viewers on your current and planned tasks through Trello's UI.

Sample Screenshot
=================

![Trello Ticker example](http://wordpresscontent.azurewebsites.net/bertjohnson_com/wp-content/uploads/sites/2/2015/10/trello-ticker-example.png)

Configuration
=============

1. Download `trello-ticker.html`, `trello-ticker.js`, and `trello-ticker.css` to the same directory (or update references within `trello-ticker.html` to reflect their new locations)
2. Edit `trello-ticker.js` with the following required parameters:
  1. *apiKey*: Your Trello API key, retrieved from https://trello.com/app-key.
  2. *boardId*: The ID of the public Trello board to follow.
  3. *activeListName*: Name of the primary list containing active cards to show.
  4. *workingSetListName*: Name of the secondary list containing queued cards to show.
3. Optionally, edit `trello-ticker.js` with the following optional parameters:
  1. *lineBreak*: Character to delimit linebreaks (e.g., ":" would insert a line break between "Now:" and "Current task").
  2. *refreshFrequency*: Frequency to check for card updates, in milliseconds.
  3. *retainLineBreak*: Whether the line break character should also be rendered.
  4. *title*: Title card text to show.  Blank for no title card.
4. Edit `trello-ticker.css` to match the desired styling for your news ticker.
5. Add to your streaming program (e.g., XSplit, OBS) as a "media file" source, pointing to `trello-ticker.html`.

License
=======

Copyright © 2015 [Bert Johnson](https://bertjohnson.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
