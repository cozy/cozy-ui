#### Textarea for long text

```
<Textarea placeholder="Once upon a time…"></Textarea>
```

#### Textarea when there's an error

```
<Textarea error placeholder="Once upon a time, there was an error…"></Textarea>
```

### Props forwarding

`Textarea` forwards unknown props to the underlying `<textarea />` element.

```
<div>
  <Textarea name='my-field' />
</div>
```
