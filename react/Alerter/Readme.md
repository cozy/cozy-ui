Display notications!
Include the `<Alert />` component somewhere in your app, but only once. After that, you can use the static methods `Alert.info`, `Alert.success` and `Alert.error` to trigger a notification.

```
import Alerter from 'cozy-ui/transpiled/react/Alerter';

if (isTesting()) {
  setTimeout(() => {
    Alerter.success('This is a success alert')
  }, 1)
}

<div>
  <button onClick={() => Alert.info("This is an info alert!")}>Show alert info</button>
  <button onClick={() => Alert.error("This is an error alert!")}>Show alert error</button>
  <button onClick={() => Alert.success("This is a success alert")}>Show alert success</button>
  {/* The Alerter must be rendered once in the App */ }
  <Alerter />
</div>
```

### Alert with a button

The `Alert` methods support an optionnal second parameter, which can be used to add a button to the notification, with the `buttonText` and `buttonAction` keys:

```
import Alerter from 'cozy-ui/transpiled/react/Alerter';
const triggerAlert = () => {
  Alerter.info("Accept our terms and conditions and subscribe to our newsletter", {
    buttonText: "ok",
    buttonAction: () => alert("Thanks!")
  });
};
const triggerAlertError = () => {
  Alerter.error("An error occured, try refreshing", {
    buttonText: "Refresh",
    buttonAction: () => alert("Here you go!")
  });
};
const triggerAlertSuccess = () => {
  Alerter.success("The operation worked successfully", {
    buttonText: "cancel",
    buttonAction: () => alert("Thanks!")
  });
};

// Alert already included in the example before
<div>
  <button onClick={triggerAlert}>Show alert</button>
  <button onClick={triggerAlertError}>Show alert error</button>
  <button onClick={triggerAlertSuccess}>Show alert success</button>
</div>
```

### Dismiss an alert

A dismiss function is provided to the `buttonAction` as argument which allow you to dismiss the alert before the duration ends from anywhere in your `buttonAction` code:

```
import Alerter from 'cozy-ui/transpiled/react/Alerter';

const triggerAlertWithDismiss = () => {
  Alerter.info("This is an alert with a dismiss button. Dismiss me ->", {
    buttonText: "dismiss",
    buttonAction: dismiss => dismiss(),
    duration: 20000
  });
};

// Alert already included in the example before
<div>
  <button onClick={triggerAlertWithDismiss}>Show alert with dismiss</button>
</div>
```
