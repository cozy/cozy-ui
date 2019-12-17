### Infos display

```
import Infos from 'cozy-ui/transpiled/react/Infos';
import Button from 'cozy-ui/transpiled/react/Button';
import Text, { SubTitle } from 'cozy-ui/transpiled/react/Text';
import Variants from 'cozy-ui/docs/components/Variants';

const initialVariants = [
  { title: true, action: false, secondaryTheme: false, secondaryTheme: false },
  { title: true, action: true, dangerTheme: true },
  { title: true, multiActions: true, dangerTheme: false, dismissAction: true },
];

<div className='u-stack-m'>
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
