The mighty Media object. Also known as Flag. Used to align vertically
objects. 

* `<Bd />` tries to take the space available
* `<Img />` is as small as possible

Original post : http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/

Flexbox : https://philipwalton.github.io/solved-by-flexbox/demos/media-object/

`align=middle` (default)

```jsx
const { Media, Img, Bd } = require('./Media')
const imgStyle = { marginRight: '1rem' };

<Media>
  <Img>
    <img src='http://lorempixel.com/90/90/people' style={imgStyle} />
  </Img>
  <Bd>
    { content.ada.short }
  </Bd>
</Media>
```

`align=top`

```jsx
const { Media, Img, Bd } = require('./Media')
const imgStyle = { marginRight: '1rem' };

<Media align='top'>
  <Img>
    <img src='http://lorempixel.com/90/90/people' style={imgStyle} />
  </Img>
  <Bd>
    { content.ada.short }
  </Bd>
</Media>
```

`align=bottom`

```jsx
const { Media, Img, Bd } = require('./Media');
const imgStyle = { marginRight: '1rem' };

<Media align='bottom'>
  <Img>
    <img src='http://lorempixel.com/90/90/people' style={imgStyle} />
  </Img>
  <Bd>
    { content.ada.short }
  </Bd>
</Media>
```
