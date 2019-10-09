The mighty Media object. Also known as Flag. Used to horizontally align
objects. Utility classes are also available and are preferred since they
prevent nestings

* `<Bd />` tries to take the space available
* `<Img />` is as small as possible

Original post : http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/

Flexbox : https://philipwalton.github.io/solved-by-flexbox/demos/media-object/

`align=middle` (default)

```jsx
import { Media, Img, Bd } from './index';
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
import { Media, Img, Bd } from './index';
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
import { Media, Img, Bd } from './index';
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
