Empty (or error) view in a listing container

_See **layout** difference on mobile view_

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';
import Button from 'cozy-ui/transpiled/react/Button';
import Empty from 'cozy-ui/transpiled/react/Empty';
import Variants from 'cozy-ui/docs/components/Variants';

const styles = {
  empty: {
    position: 'relative',
    transform: 'translateZ(0)',
    height: '500px',
    display: 'flex'
  }
};

const initialVariants = [
  { layout: false, large: false, medium: false, withContent: false }
];

<>
  {!isTesting() && (
    <Variants initialVariants={initialVariants}>
      {variant => (
        <Empty
          icon={CozyIcon}
          iconSize={variant.large ? 'large' : variant.medium ? 'medium' : 'normal'}
          layout={variant.layout}
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
      <div style={styles.empty}>
        <Empty icon={CozyIcon} layout={false} title="This list is empty" text="Try adding some content to this list"/>
      </div>
      <div>
        <Empty icon={CozyIcon} layout={false} title="This list is empty" text="Try adding some content to this list"/>
      </div>
      <div style={styles.empty}>
        <Empty id='empty' layout={false} icon={CozyIcon} title="An error occured" text="It's maybe nothing, just refresh to be sure">
          <Button className='u-mt-1' label="Try refreshing" />
        </Empty>
      </div>
      <div>
        <Empty icon={CozyIcon} layout={false} title="This list is empty" text="Try adding some content to this list"/>
        <Empty icon={CozyIcon} layout={false} iconSize="medium" title="This list is empty" text="Try adding some content to this list" />
        <Empty icon={CozyIcon} layout={false} iconSize="large" title="This list is empty" text="Try adding some content to this list" />
      </div>
    </>
  )}
</>
```
