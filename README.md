# Candy
> Minimal blogging theme for [Cabin](http://cabinjs.com)

## Installation

First install Cabin and Grunt globally with this command:

```bash
npm install -g cabin grunt-cli
```

Then scaffold a static site generator using the Candy theme with this command:

```bash
cabin new blog colinwren/Candy
```

Now change directories into the `blog` folder and build the site with this command: 

```bash
cd blog && grunt
```
**Note: In the future, you can build your site by running the `grunt` command in the `blog` folder.**

## Usage

### Posts

Candy generates pages using markdown posts in the `posts` folder. It expects markdown posts to contain two required metadata properties:

#### title
Type: `String`

Title of the post which is also used as its url.

#### date
Type: `String`

DateString which is parsed and displayed as the publishing date of the post.

To learn more about post metadata, check out [grunt-pages](https://github.com/CabinJS/grunt-pages#authoring-posts).

### Changing the theme color

We provide a number of theme colors out of the box in the [src/styles/_base.scss](https://github.com/colinwren/Candy/blob/master/src/styles/_base.scss#L1-L6) file. To change the color, simply change the value of the `$mainTheme` Sass variable.

### Included libraries/tools

#### normalize.css

[Normailze.css](https://github.com/colinwren/Candy/blob/master/src/styles/normalize.scss) is used to normalize styles across browsers.

#### jQuery

jQuery is used to toggle the touch optimized menu and toggle the fixed navigation on mobile scrolling in [src/scripts/main.js](https://github.com/colinwren/Candy/blob/master/src/scripts/main.js).

#### IcoMoon

Candy uses the [IcoMoon App](http://icomoon.io/app/) to generate icon fonts. By default it uses icons for social media and comments, but you can easily add and remove icons.

To alter the icons, go to [this](http://icomoon.io/app/) url, and click the session icon in the bottom right and upload the [src/styles/CandyIcoMoonSession.json](https://github.com/colinwren/Candy/blob/master/src/styles/CandyIcoMoonSession.json) file.

<img align="right" height="150" src="https://raw.github.com/colinwren/Candy/master/src/styles/session_icon.png">

After updating the icons simply download them and replace the `fonts` folder inside the `src/styles` folder and replace the contents of `src/styles/_icon.scss` with `style.css`. You will also need to update the CandyIcoMoonSession.json by clicking `Store Session` after clicking the session icon to allow for future changes.