A little inset with text and optional icon that can be used to provide some contextual information.

### Default

```
import ContextHeader from './index';
<div>
  <ContextHeader title="Pick a book" text="What will you read today?" />
</div>
```

### With an icon

```
import ContextHeader from './index';
<div>
  <ContextHeader title="Pick a book" text="What will you read today?" icon="album" />
</div>
```

### With a closing action

```
import ContextHeader from './index';
<div>
  <ContextHeader title="Pick a book" text="What will you read today?" icon="album" onClose={() => alert('Nothing then.')} />
</div>
```
