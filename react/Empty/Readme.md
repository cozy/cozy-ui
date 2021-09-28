Empty (or error) view in a listing container

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';
import Button from 'cozy-ui/transpiled/react/Button';
import Empty from 'cozy-ui/transpiled/react/Empty';
import Variants from 'cozy-ui/docs/components/Variants';

const initialVariants = [
  { large: false, medium: false, withContent: false }
];

<>
  {!isTesting() && (
    <Variants initialVariants={initialVariants}>
      {variant => (
        <Empty
          icon={CozyIcon}
          iconSize={variant.large ? 'large' : variant.medium ? 'medium' : 'normal'}
          title="This list is empty"
          text="Try adding some content to this list"
        >
          {variant.withContent && <Button className='u-mt-1' label="Try refreshing" />}
        </Empty>
      )}
    </Variants>
  )}

  {isTesting() && (
    <>
      <div>
        <Empty id='empty' icon={CozyIcon} title="An error occured" text="It's maybe nothing, just refresh to be sure">
          <Button className='u-mt-1' label="Try refreshing" />
        </Empty>
      </div>
      <div>
        <Empty icon={CozyIcon} title="This list is empty" text="Try adding some content to this list"/>
        <Empty icon={CozyIcon} iconSize="medium" title="This list is empty" text="Try adding some content to this list" />
        <Empty icon={CozyIcon} iconSize="large" title="This list is empty" text="Try adding some content to this list" />
      </div>
    </>
  )}
</>
```
