#### Label element for forms

```jsx
import Label from 'cozy-ui/transpiled/react/Label';
import Input from 'cozy-ui/transpiled/react/Input';
<form>
  <div>
    <Label htmlFor="idInput">This is a label</Label>
    <Input id="idInput" placeholder="Recherche" />
  </div>
</form>
```

#### Inline Label (Labels are displayed `block` by default)

```jsx
import Label from 'cozy-ui/transpiled/react/Label';
import Input from 'cozy-ui/transpiled/react/Input';
<form>
  <div>
    <Label htmlFor="idInput2" block={false}>This is an inline label</Label>
    <Input id="idInput2" placeholder="Recherche" />
  </div>
</form>
```

#### Label when there's an error

```jsx
import Label from 'cozy-ui/transpiled/react/Label';
import Input from 'cozy-ui/transpiled/react/Input';
<form>
  <div>
    <Label htmlFor="idInput2" error>This is an error label</Label>
    <Input id="idInput2" error placeholder="Recherche" />
    </div>
</form>
```
