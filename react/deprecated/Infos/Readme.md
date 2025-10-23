### Infos display

```jsx
import Infos from 'cozy-ui/transpiled/react/deprecated/Infos'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [
  { title: true, action: false, secondaryTheme: false, secondaryTheme: false },
  { title: true, action: true, dangerTheme: true },
  { title: true, multiActions: true, dangerTheme: false, dismissAction: true },
]

;

<div className='u-stack-m'>
    <Variants initialVariants={initialVariants}>{
      variant => (
        <Infos
          theme={variant.secondaryTheme ? 'secondary' : variant.dangerTheme ? 'danger' : 'primary'}
          description={<>
            {variant.title && <Typography variant='h5' className={variant.dangerTheme ? 'u-error' : ''}>{content.ada.facts[0].title}</Typography>}
            <Typography variant='body1'>{content.ada.facts[0].description}</Typography>
          </>}
          action={(variant.action || variant.multiActions) && <>
            {variant.action && <Button label="ok" theme={variant.dangerTheme ? 'danger' : 'primary'} />}
            {variant.multiActions && ['one', 'two', 'three'].map((label, index) =>
              <Button key={index} label={label} theme={variant.dangerTheme ? 'danger' : 'primary'} />
            )}
          </>}
          dismissAction={variant.dismissAction ? () => alert('dismissed') : null}
        />
      )
    }</Variants>
</div>
```
