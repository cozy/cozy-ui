Show a spinner when loading something.

### Default

```
<Spinner />
```

### Color

```
<div>
  (default): <Spinner />
  grey: <Spinner color='grey' />
  white: <Spinner color='white' />
  red: <Spinner color='red' />
</div>
```

### Placement

```
<div>
<Spinner noMargin={ true }/>
</div>
```

### Sizes

```
<div>
  tiny: <Spinner size='tiny' /><br/>
  small: <Spinner size='small' /><br/>
  (default): <Spinner /><br/>
  large: <Spinner size='large' /><br/>
  xlarge: <Spinner size='xlarge' /><br/>
  xxlarge: <Spinner size='xxlarge' />
</div>
```


### Message

When you use `loadingType`, `<Spinner />` needs to be in an `<I18n />` wrapper as it uses `t` function.


```jsx static
<Spinner loadingType='salut' />
```
