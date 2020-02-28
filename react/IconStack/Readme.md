### IconStack

A component to put something in the background and align (default center) an
other component on the foreground

```
import IconStack from 'cozy-ui/transpiled/react/IconStack';
import Icon from 'cozy-ui/transpiled/react/Icon';
<IconStack
  background={<Icon icon="file-duotone" color="blue"  size={32} />}
  foreground={<Icon icon="bank" color="red" height={16} width={16} />}
/>
```

### IconStack with bottom right aligment

```
import IconStack from 'cozy-ui/transpiled/react/IconStack';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Circle from 'cozy-ui/transpiled/react/Circle';
 <IconStack
      align="bottom-right"
      background={<Icon icon="file-duotone" color="blue"  size={32} />}
      foreground={
        <div
          style={{
            borderRadius: '10px',
            width: '20px',
            height: '20px',
            border: 'solid 1px var(--silver)',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box'
          }}
        >
          <Icon icon="link" height={10} width={10} />
        </div>
      }
    />
```

```
import IconStack from 'cozy-ui/transpiled/react/IconStack';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Circle from 'cozy-ui/transpiled/react/Circle';
 <IconStack
      align="bottom-right"
      background={<Icon icon="file-duotone" color="blue"  size={32} />}
      foreground={
        <div
          style={{
            borderRadius: '6px',
            width: '24px',
            height: '24px',
            border: 'solid 1px var(--silver)',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box'
          }}
        >
          <Icon icon="folder" size={16} />
        </div>
      }
    />
```