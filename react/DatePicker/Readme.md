`Breakpoints` & `I18n` Providers are needed for this component

### Usage

### Date Picker

```jsx
import React, { useState } from 'react';
import DemoProvider from 'cozy-ui/docs/components/DemoProvider';
import Variants from 'cozy-ui/docs/components/Variants';
import DatePicker from 'cozy-ui/transpiled/react/DatePicker';

const placeholder = isTesting() ? "01/01/2025" : undefined;

const initialVariants = [
  { enableKeyboard: false, clearable: false, showTodayButton: false, disableFuture: false, disablePast: false, disableToolbar: false, autoOk: false, animateYearScrolling: false, disabled: false, readOnly: false }
];

// Example
const [selectedDate, setSelectedDate] = useState(null);
<DemoProvider>
  <Variants initialVariants={initialVariants}>
  {variant => (
      <DatePicker
        onChange={setSelectedDate}
        value={selectedDate}
        placeholder={placeholder}
        {...variant}
      />
    )
  }
  </Variants>
</DemoProvider>
```

### DateTime Picker

```jsx
import React, { useState } from 'react';
import DemoProvider from 'cozy-ui/docs/components/DemoProvider';
import Variants from 'cozy-ui/docs/components/Variants';
import DatePicker from 'cozy-ui/transpiled/react/DatePicker';

const placeholder = isTesting() ? "01/01/2025" : undefined;

const initialVariants = [
  { enableKeyboard: false, clearable: false, showTodayButton: false, disableFuture: false, disablePast: false, disableToolbar: false, autoOk: false, animateYearScrolling: false, disabled: false, readOnly: false, ampm: false }
];

// Example
const [selectedDate, setSelectedDate] = useState(null);
<DemoProvider>
  <Variants initialVariants={initialVariants}>
  {variant => (
      <DatePicker
        mode="dateTime"
        onChange={setSelectedDate}
        value={selectedDate}
        placeholder={placeholder}
        {...variant}
      />
    )
  }
  </Variants>
</DemoProvider>
```

### Time Picker

```jsx
import React, { useState } from 'react';
import DemoProvider from 'cozy-ui/docs/components/DemoProvider';
import Variants from 'cozy-ui/docs/components/Variants';
import DatePicker from 'cozy-ui/transpiled/react/DatePicker';

const placeholder = isTesting() ? "01/01/2025" : undefined;

const initialVariants = [
  { enableKeyboard: false, clearable: false, showTodayButton: false, disableFuture: false, disablePast: false, disableToolbar: false, autoOk: false, animateYearScrolling: false, disabled: false, readOnly: false, ampm: false }
];

// Example
const [selectedDate, setSelectedDate] = useState(null);
<DemoProvider>
  <Variants initialVariants={initialVariants}>
  {variant => (
      <DatePicker
        mode="time"
        onChange={setSelectedDate}
        value={selectedDate}
        placeholder={placeholder}
        {...variant}
      />
    )
  }
  </Variants>
</DemoProvider>
```

### API

### Inheritance

Any prop not recognized by the pickers and their sub-components are passed down to material-ui [TextField](https://v4.mui.com/api/text-field/#textfield-api) component.

`DateIOType` — date object type of your linked date-io adapter (Date-fns, DayJS, etc.)

### Props

#### **Date Picker**

|name|type|default|description|
|----|----|-------|-----------|
|onChange|(date: DateIOType) => void||onChange callback|
|value|Date||Picker value|
|allowKeyboardControl|Boolean|true|Enables keyboard listener for moving between days in calendar|
|autoOk|Boolean|false|Auto accept date on selection|
|disabled|Boolean||Disable picker and text field|
|disableFuture|Boolean|false|Disable future dates|
|disablePast|boolean|false|Disable past dates|
|disableToolbar|boolean|false|Hide toolbar and show only date/time views|
|emptyLabel|string|""|Message displaying in text field, if null passed (doesn't work in keyboard mode)|
|format|string||Format string|
|initialFocusedDate|Date||Date that will be initially highlighted if null was passed|
|inputVariant|"standard" \| "outlined" \| "filled"||Pass material-ui text field variant down, bypass internal variant prop|
|invalidDateMessage|ReactNode|"Invalid Date Format"|Message, appearing when date cannot be parsed|
|invalidLabel|string|"unknown"|Message displaying in text field if date is invalid (doesn't work in keyboard mode)|
|labelFunc|(date: DateIOType, invalidLabel: string) => string||Dynamic formatter of text field value|
|leftArrowButtonProps|Partial<IconButtonProps>||Props to pass to left arrow button|
|leftArrowIcon|ReactNode||Left arrow icon|
|loadingIndicator|Element||Custom loading indicator|
|maxDate|Date|Date(2100-01-01)|Max selectable date|
|maxDateMessage|ReactNode|"Date should not be after maximal date"|Error message, shown if date is more then maximal date|
|minDate|Date|Date(1900-01-01)|Min selectable date|
|minDateMessage|ReactNode|"Date should not be before minimal date"|Error message, shown if date is less then minimal date|
|onAccept|(date: DateIOType) => void||Callback fired when date is accepted|
|onClose|() => void||On close callback|
|onError|(error: ReactNode, value: DateIOType) => void||Callback fired when new error should be displayed (!! This is a side effect. Be careful if you want to rerender the component)|
|onMonthChange|(date: DateIOType) => void \| Promise<void>||Callback firing on month change. Return promise to render spinner till it will not be resolved|
|onOpen|Date||On open callback|
|onYearChange|Date||Callback firing on year change|
|open|boolean||Controlled picker open state|
|openTo|"date" \| "year" \| "month"||First view to show in DatePicker|
|orientation|"portrait" \| "landscape"|"portrait"|Force rendering in particular orientation|
|PopoverProps|Partial<PopoverProps>||Popover props passed to material-ui Popover (with variant="inline")|
|readOnly|boolean||Make picker read only|
|renderDay|(day: DateIOType, selectedDate: DateIOType, dayInCurrentMonth: boolean, dayComponent: Element) => Element||Custom renderer for day|
|rightArrowButtonProps|Partial<IconButtonProps>||Props to pass to right arrow button|
|rightArrowIcon|ReactNode||Right arrow icon|
|shouldDisableDate|(day: DateIOType) => boolean||Disable specific date|
|strictCompareDates|boolean|false|Compare dates by the exact timestamp, instead of start/end of date|
|TextFieldComponent|FunctionComponent<TextFieldProps>||Override input component|
|ToolbarComponent|FunctionComponent<ToolbarComponentProps>||Component that will replace default toolbar renderer|
|variant|"dialog" \| "inline" \| "static"|'dialog'|Picker container option|
|views|Array<"year" \| "date" \| "month">||Array of views to show|
___
<br>

#### **Keyboard Date Picker**

Additional props for keyboard date picker

|name|type|default|description|
|----|----|-------|-----------|
|onChange|(date: DateIOType, isValid: boolean) => void||Keyboard onChange callback, that returns the value of the input when it changes and if it is a valid Date|
|InputAdornmentProps|Partial<InputAdornmentProps>||Props to pass to keyboard input adornment|
|inputValue|string||String value for controlling value with pure input string. Overrides value prop|
|KeyboardButtonProps|Partial<IconButtonProps>||Props to pass to keyboard adornment button|
|keyboardIcon|ReactNode||Icon displaying for open picker button|
|mask|string||Custom mask. Can be used to override generate from format. (e.g. __/__/____ __:__)|
|maskChar|string|"_"|Char string that will be replaced with number (for "_" mask will be "__/__/____")|
|refuse|RegExp|/\[^\\d\]+/gi|Refuse values regexp|
|rifmFormatter|(str: string) => string||Custom formatter to be passed into Rifm component|
___
<br>

#### **DateTime & Time Picker**

Additional props for time date picker

|name|type|default|description|
|----|----|-------|-----------|
|ampm|boolean||12h/24h view for hour selection clock|
___
<br>

### Modal Wrapper

|name|type|default|description|
|----|----|-------|-----------|
|cancelLabel|ReactNode|"Cancel"|"CANCEL" label message|
|clearable|boolean||Show clear action in picker dialog|
|clearLabel|ReactNode|"Clear"|"Clear" label message|
|DialogProps|Partial<MuiDialogProps>||Props to be passed directly to material-ui Dialog|
|okLabel|ReactNode|"OK"|"OK" label message|
|showTodayButton|boolean||If true today button will be displayed. **Note:** that clear button has higher priority|
|todayLabel|ReactNode|"TODAY"|"TODAY" label message|
___
<br>

### Additional props

|name|type|default|description|
|----|----|-------|-----------|
|enableKeyboard|boolean||Enable the keyboard date picker|
|mode|"date" \| "time" \| "dateTime"|"date"|Picker mode|
___
