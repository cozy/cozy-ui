The mighty Media object. Also known as Flag. Used to horizontally align
objects. Utility classes are also available and are preferred since they
prevent nesting.

* `<Bd />` tries to take the space available
* `<Img />` is as small as possible

Original post : <http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/>

Flexbox : <https://philipwalton.github.io/solved-by-flexbox/demos/media-object/>

`align=middle` (default)

```jsx
import { Media, Img, Bd } from 'cozy-ui/transpiled/react/deprecated/Media';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Typography from 'cozy-ui/transpiled/react/Typography';
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";
const imgStyle = { paddingRight: '1rem' };

<Media>
  <Img style={imgStyle}>
    <Icon icon={PeopleIcon} />
  </Img>
  <Bd>
    <Typography variant='body1'>{ content.ada.short }</Typography>
  </Bd>
</Media>
```

`align=top`

```jsx
import { Media, Img, Bd } from 'cozy-ui/transpiled/react/deprecated/Media';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Typography from 'cozy-ui/transpiled/react/Typography';

import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";

const imgStyle = { paddingRight: '1rem' };

<Media align='top'>
  <Img style={imgStyle}>
    <Icon icon={PeopleIcon} />
  </Img>
  <Bd>
    <Typography variant='body1'>{ content.ada.short }</Typography>
  </Bd>
</Media>
```

`align=bottom`

```jsx
import { Media, Img, Bd } from 'cozy-ui/transpiled/react/deprecated/Media';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Typography from 'cozy-ui/transpiled/react/Typography';

import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";

const imgStyle = { paddingRight: '1rem' };

<Media align='bottom'>
  <Img style={imgStyle}>
    <Icon icon={PeopleIcon} />
  </Img>
  <Bd>
    <Typography variant='body1'>{ content.ada.short }</Typography>
  </Bd>
</Media>
```
