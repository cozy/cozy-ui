Use typographic components to have sensible defaults for text
content. The typography variants naming is based on material design.

Read the original [Typography component](https://material-ui.com/components/typography/)
documentation for more information.

🆕 The Typography component should be used instead of Text components.

<details>
<summary>⤵️ A codemod can be used to help you migrate the code (click here for more information).</summary>

```bash
npm install -g jscodeshift
jscodeshift -t node_modules/cozy-ui/codemods/transform-typography.js --parser babel src/
```

</details>

```jsx
import Typography from 'cozy-ui/transpiled/react/Typography'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import Stack from 'cozy-ui/transpiled/react/Stack'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'button',
  'subtitle1',
  'body1',
  'body2',
  'caption',
];

<Stack spacing='s'>
  { variants.map(variant => (
    <Typography variant={variant}>{variant}</Typography>
  )) }
</Stack>
```

You can use `color="textSecondary"`:

```jsx
<Typography variant='body1' color="textSecondary">A text written in secondary text color.</Typography>
```

From old to new :

```jsx
import { Text, Caption, MainTitle, SubTitle, Title, Bold, ErrorMessage } from 'cozy-ui/transpiled/react/Text'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import Typography from 'cozy-ui/transpiled/react/Typography';

const trStyle = { borderBottom: '1px solid gray'}
const tdStyle = { borderRight: '1px solid gray'};

<table className='u-w-100'>
  <tbody>
    <tr style={trStyle}>
      <td style={tdStyle}><MainTitle>MainTitle</MainTitle></td>
      <td><Typography variant='h3'>is replaced by &lt;Typography variant="h3" &gt;</Typography></td>
    </tr>
    <tr style={trStyle}>
      <td style={tdStyle}><Title>Title</Title></td>
      <td><Typography variant='h4'>is replaced by &lt;Typography variant="h4" &gt;</Typography></td>
    </tr>
    <tr style={trStyle}>
      <td style={tdStyle}><SubTitle>SubTitle</SubTitle></td>
      <td><Typography variant='h5'>is replaced by &lt;Typography variant="h5" &gt;</Typography></td>
    </tr>
    <tr style={trStyle}>
      <td style={tdStyle}><Bold>Bold</Bold></td>
      <td><Typography variant='h6'>is replaced by &lt;Typography variant="h6" &gt;</Typography></td>
    </tr>
    <tr style={trStyle}>
      <td style={tdStyle}><Caption>Caption</Caption></td>
      <td><Typography variant='caption' color='textSecondary'>is replaced by &lt;Typography variant="caption" color="textSecondary" /&gt; </Typography></td>
    </tr>
    <tr style={trStyle}>
      <td style={tdStyle}><ErrorMessage>ErrorMessage</ErrorMessage></td>
      <td><Typography variant='body1' color='error'>is replaced by &lt;Typography color="error"  variant='body1' /&gt; </Typography></td>
    </tr>
  </tbody>
</table>

```
