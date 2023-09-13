```jsx
import I18n from 'cozy-ui/transpiled/react/providers/I18n';
import DateMonthPicker from 'cozy-ui/transpiled/react/DateMonthPicker';
import Stack from 'cozy-ui/transpiled/react/Stack';
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import Dialog, { DialogContent, DialogTitle } from 'cozy-ui/transpiled/react/Dialog';
import { useCozyDialog, DialogCloseButton } from 'cozy-ui/transpiled/react/CozyDialogs'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'


const dictRequire = x => ({})
const initialState = { choosing: false, monthDate: '2019-08' }
const showPicker = () => setState({ choosing: true });
const hidePicker = () => setState({ choosing: false });
const handleSelect = monthDate => {
  setState({ monthDate })
  hidePicker()
};

const Interactive = () => {
  const { dialogProps, dialogTitleProps } = useCozyDialog({
    open: state.choosing,
    size: 'small'
    })
  return (
    <Stack>
        Month chosen: { state.monthDate ? state.monthDate : 'No date chosen yet'}<br/>
        <Button onClick={showPicker} label='Choose month'/>
        { state.choosing ? <Dialog
           onClose={hidePicker}
          size='small'
          {...dialogProps}
        >
          <DialogCloseButton onClick={hidePicker} />
          <DialogTitle {...dialogTitleProps}>
            Choose month
          </DialogTitle>
          <DialogContent>
            <DateMonthPicker
                f={x => x}
                onSelect={handleSelect}
                initialValue={state.monthDate}
              />
          </DialogContent>
        </Dialog>: null }
    </Stack>
  )
}

const Static = () => (
  <DateMonthPicker
    f={x => x}
    onSelect={handleSelect}
    initialValue={state.monthDate}
  />
);

<BreakpointsProvider>
  <I18n dictRequire={dictRequire} lang='en'>
    { isTesting() ? <Static /> : <Interactive /> }
  </I18n>
</BreakpointsProvider>
```
