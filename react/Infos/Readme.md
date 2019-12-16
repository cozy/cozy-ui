### Infos display

```
import Infos from 'cozy-ui/transpiled/react/Infos';
import Button from 'cozy-ui/transpiled/react/Button';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Text, { SubTitle } from 'cozy-ui/transpiled/react/Text';
import Variants from 'cozy-ui/docs/components/Variants';

const initialVariants = [
  { title: true, action: false, secondaryTheme: false, secondaryTheme: false },
  { title: true, action: true, dangerTheme: true },
  { title: true, multiActions: true, dangerTheme: false, dismissAction: true },
];

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

    <hr />
    <h2>New API</h2>

    <Variants initialVariants={initialVariants}>{
      variant => (
        <Infos
          theme={variant.secondaryTheme ? 'secondary' : variant.dangerTheme ? 'danger' : 'primary'}
          description={<>
            {variant.title && <SubTitle className={variant.dangerTheme ? 'u-pomegranate' : ''}>{content.ada.facts[0].title}</SubTitle>}
            <Text>{content.ada.facts[0].description}</Text>
          </>}
          action={(variant.action || variant.multiActions) && <>
            {variant.action && <Button label="ok" theme={variant.dangerTheme ? 'danger' : 'primary'} />}
            {variant.multiActions && ['one', 'two', 'three'].map(label => <Button label={label} theme={variant.dangerTheme ? 'danger' : 'primary'} />)}
          </>}
          dismissAction={variant.dismissAction ? () => alert('dismissed') : null}
        />
      )
    }</Variants>
</div>
```
