### Simplest usage

```js
<Markdown source="A __description__ with a default [external link]()" />
```

### More complex example

```js
<Markdown
    source="# Title\n * Item1\n * Item2\n > A __custom__ [link]()"
    renderers={{
      Link: props => <a href={props.href} target='__self'>{props.children}</a>
  }}
/>
```
