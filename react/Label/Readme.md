#### Label element for forms

```
<form>
  <div>
    <Label htmlFor="idInput">This is a label</Label>
    <Input id="idInput" placeholder="Recherche" />
  </div>
</form>
```

#### Inline Label (Labels are displayed `block` by default)

```
<form>
  <div>
    <Label htmlFor="idInput2" block={false}>This is an inline label</Label>
    <Input id="idInput2" placeholder="Recherche" />
  </div>
</form>
```

#### Label when there's an error

```
<form>
  <div>
    <Label htmlFor="idInput2" error>This is an error label</Label>
    <Input id="idInput2" error placeholder="Recherche" />
    </div>
</form>
```
