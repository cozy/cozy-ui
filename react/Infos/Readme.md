### Infos display info

```
const Infos = require('./index').default;
const Button = require('../Button').default;
<div className='u-stack-m'>
    <Infos text="My small persistent information! " />
    <Infos text="In a slightly different style" className='u-maw-none u-bdrs-0'/>
    <Infos
        text="My small persistent information, with an icon. And lot of text ? Again and again..."
        icon="info"
    />
    <Infos
        actionButton={<Button theme="danger">A CTA button</Button>}
        title="Infos breaking news"
        text="My small persistent information, with an icon. And lot of text ? Again and again..."
        icon="warning"
        isImportant
    />
</div>
```
