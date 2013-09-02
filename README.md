# Candy
> Minimal blogging theme for [Cabin](http://cabinjs.com)

## Installation

To use Candy you must have [Node.js](http://nodejs.org/), [Git](http://git-scm.com/), [Python 2.7](http://www.python.org/) (for [Pygments](http://pygments.org/)), and [Compass](http://compass-style.org/) installed.

First install Cabin and Grunt globally with this command:

```bash
npm install -g cabin grunt-cli
```

Then scaffold a static site generator using the Candy theme with this command:

```bash
cabin new blog colinwren/Candy
```

Now change into the `blog` directory and run the `grunt` command: 

```bash
cd blog && grunt
```

This will build your site, start a static file server, open a browser tab with the site's homepage, and start a watch process to rebuild your site when source files change.

Try editing a markdown file in the `posts` folder or css in the `src/styles` folder and upon saving, your site will automatically be rebuilt with the updated content/styles. When you edit markdown, your browser will automatically refresh to view new content, and when editing styles, they will be injected directly into the page for an immediate update.

**Note: In the future, you can build your site by running the `grunt` command in the `blog` folder.**

## User Manual

### Expected files to edit

There are parts of the Candy theme which you are expected to edit when building your site. Here they are:

#### Layouts

You are expected to update the social media links with your GitHub username and Twitter handle in the [`src/layouts/base.jade`](https://github.com/colinwren/Candy/blob/master/src/layouts/base.jade#L35-L36) or [`src/layouts/_header.ejs`](https://github.com/colinwren/Candy/blob/master/src/layouts/_header.ejs#L36-L37) file. We have also provided social media icons for Google+, Facebook, and Pinterest which you can use out of the box. You can see all the icon font classes in the [`src/styles/_icon.scss`](https://github.com/colinwren/Candy/master/master/src/styles/_icons.scss#L27) file, and here is an example of how you would add a link to your Pinterest profile:

```html
<a href="http://pinterest.com/chrisawren/" class="icon-pinterest"></a>
```

To get [Disqus](http://disqus.com/) setup, you must add your Disqus username to the [`src/layouts/_social.jade`](https://github.com/colinwren/Candy/blob/master/src/layouts/_social.jade#L36) or [`src/layouts/_social.ejs`](https://github.com/colinwren/Candy/blob/master/src/layouts/_social.ejs#L38) file. There are also placeholder comments for Google Analytics scripts in the [`src/layouts/base.jade`](https://github.com/colinwren/Candy/blob/master/src/layouts/base.jade#L45) and [`src/layouts/_footer.ejs`](https://github.com/colinwren/Candy/blob/master/src/layouts/_footer.ejs#L8) files.

#### Pages

You are expected to edit the `src/pages/about.(jade/ejs)` and `src/pages/projects.(jade/ejs)` pages to describe yourself and your projects.

#### Posts

You are expected to edit the default posts and add your own metadata and content. 

### Authoring Posts

Candy generates pages using markdown posts in the `posts` folder. It expects markdown posts to contain two required metadata properties:

#### title
Type: `String`

Title of the post which is also used as its url.

#### date
Type: `String`

DateString which is parsed and displayed as the publishing date of the post.

To learn more about post metadata, check out [grunt-pages](https://github.com/CabinJS/grunt-pages#authoring-posts).

### Changing the main theme color

We provide a number of theme colors out of the box in the [`src/styles/_base.scss`](https://github.com/colinwren/Candy/blob/master/src/styles/_base.scss#L1-L6) file. To change the color, simply change the value of the `$mainTheme` Sass variable.

### Included libraries/tools

#### normalize.css

[Normailze.css](https://github.com/colinwren/Candy/blob/master/src/styles/normalize.scss) is used to normalize styles across browsers.

#### jQuery

jQuery is used to toggle the touch optimized menu and toggle the fixed navigation on mobile scrolling in [`src/scripts/main.js`](https://github.com/colinwren/Candy/blob/master/src/scripts/main.js).

#### IcoMoon

Candy uses the [IcoMoon App](http://icomoon.io/app/) to generate icon fonts. By default it uses icons for social media and comments, but you can easily add and remove icons.

To alter the icons, go to [this](http://icomoon.io/app/) url, and click the below session icon in the bottom right and upload the `src/styles/CandyIcoMoonSession.json` file.

<img src="http://i.imgur.com/7fmXyfF.png">

After updating the icons simply download them and replace the `fonts` folder inside the `src/styles` folder and replace the contents of `src/styles/_icon.scss` with `style.css`. You will also need to update the `src/styles/CandyIcoMoonSession.json` by clicking `Store Session` after clicking the session icon to allow for future icon changes.

## License

(The MIT License)

Copyright (c) 2013 Colin Wren

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
