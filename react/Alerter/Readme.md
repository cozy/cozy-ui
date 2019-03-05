Display notications!
Include the `<Alert />` component somewhere in your app, but only once. After that, you can use the static methods `Alert.info`, `Alert.success` and `Alert.error` to trigger a notification.

```
// we have to put the Alert only once in the app
<div>
  <button onClick={() => Alert.info("This is an info alert!")}>Show alert info</button>
  <button onClick={() => Alert.error("This is an error alert!")}>Show alert error</button>
  <button onClick={() => Alert.success("This is a success alert")}>Show alert success</button>
  <Alert />
</div>
```

### Alert with a button

The `Alert` methods support an optionnal second parameter, which can be used to add a button to the notification, with the `buttonText` and `buttonAction` keys:

```
const triggerAlert = () => {
  Alert.info("Accept our terms and conditions and subscribe to our newsletter", {
    buttonText: "ok",
    buttonAction: () => alert("Thanks!")
  });
};
const triggerAlertError = () => {
  Alert.error("An error occured, try refreshing", {
    buttonText: "Refresh",
    buttonAction: () => alert("Here you go!")
  });
};
const triggerAlertSuccess = () => {
  Alert.success("The operation worked successfully", {
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
const triggerAlertWithDismiss = () => {
  Alert.info("This is an alert with a dismiss button. Dismiss me ->", {
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
