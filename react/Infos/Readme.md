### Infos display info

```
const Infos = require('./index').default;
const Button = require('../Button').default;
<div>
    <Infos text="My small persistent information! " />
    <Infos text="In a slightly different style" className='u-maw-auto u-mv-1 u-bdrs-0'/>
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
