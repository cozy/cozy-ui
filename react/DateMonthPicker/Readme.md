```
import I18n from 'cozy-ui/transpiled/react/I18n';
import DateMonthPicker from 'cozy-ui/transpiled/react/DateMonthPicker';
import Stack from 'cozy-ui/transpiled/react/Stack';
import Button from 'cozy-ui/transpiled/react/Button';
import Modal, { ModalContent } from 'cozy-ui/transpiled/react/Modal';


const dictRequire = x => ({})
const initialState = { choosing: isTesting(), monthDate: '2019-08' }
const showPicker = () => setState({ choosing: true });
const hidePicker = () => setState({ choosing: false });
const handleSelect = monthDate => {
  setState({ monthDate })
  hidePicker()
}

<I18n dictRequire={dictRequire} lang='en'>
  <Stack>
      Month chosen: { state.monthDate ? state.monthDate : 'No date chosen yet'}<br/>
      <Button onClick={showPicker} label='Choose month'/>
      { state.choosing ? <Modal size='xsmall' title='Choose month' dismissAction={hidePicker}>
        <ModalContent>
          <DateMonthPicker
              f={x => x}
              onSelect={handleSelect}
              initialValue={state.monthDate}
            />
        </ModalContent>
      </Modal>: null }
  </Stack>
</I18n>
```
