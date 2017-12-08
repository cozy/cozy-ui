#### Different themes:

```
<div>
  <div>
    <Button theme='regular'>normal action</Button>
    <Button theme='danger'>erase or destroy</Button>
    <Button theme='highlight'>events communication</Button>
  </div>
  <br />
  <div>
    <Button theme='secondary'>cancel or second option</Button>
    <Button theme='danger-outline'>erase but not in danger</Button>
  </div>
</div>
```

#### Add a action on click

```
<Button theme='danger-outline' onClick={ () => alert('yay !') }>Show alert</Button>
```

#### When loading, put a spinner

```
<Button busy>Loading</Button>
```

```
initialState = { busy:false };
<Button onClick={() => {setState(state => ({busy: !state.busy}))}} busy={state.busy}>Toggle busy</Button>
```

#### Create a button with an icon

```
const icons = require('../../src/icons');
<div>
  <Button theme="danger"><Icon icon={ icons['delete'] } color="white" />delete</Button>
</div>
```
