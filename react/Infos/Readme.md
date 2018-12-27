### Infos display info

```
const Infos = require('./index').default;
//style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
<div>
    <Infos text="My small persistent information! " />
    <div style={{height : '10px'}}/>
    <Infos
        text="My small persistent information, with an icon. And lot of text ? Again and again..."
        icon="plus"
    />
</div>
```
