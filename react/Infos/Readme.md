### Infos display info

```
const Infos = require('./index').default;
const Button = require('../Button').default;
//style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
<div>
    <Infos text="My small persistent information! " />
    <div style={{height : '10px'}}/>
    <Infos
        text="My small persistent information, with an icon. And lot of text ? Again and again..."
        icon="info"
    />
    <div style={{height : '10px'}}/>
    <Infos
        actionButton={<Button theme="danger">A CTA button</Button>}
        title="Infos breaking news"
        text="My small persistent information, with an icon. And lot of text ? Again and again..."
        icon="warning"
        isImportant
    />
</div>
```
