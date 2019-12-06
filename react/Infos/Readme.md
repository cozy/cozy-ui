### Infos display info

```
import Infos from 'cozy-ui/transpiled/react/Infos';
import Button from 'cozy-ui/transpiled/react/Button';
<div className='u-stack-m'>
    <Infos text="My small persistent information! " />
    <Infos text="In a slightly different style" className='u-maw-none u-bdrs-0'/>
    <Infos
        text="My small persistent information, with an icon. And a lot of text ? Again and again..."
        icon="info"
    />
    <Infos
        actionButton={<Button theme="danger" label="A CTA button" />}
        title="Infos breaking news"
        text="My small persistent information, with an icon. And a lot of text ? Again and again..."
        icon="warning"
        isImportant
    />
</div>
```
