Display notications!  
Include the `<Alerter />` component somewhere in your app, but only once. After that, you can use the static methods `Alerter.info`, `Alerter.success` and `Alerter.error` to trigger a notification.

```
<div>
  <button onClick={() => Alerter.info("This is an info alert!")}>Show alert info</button>
  <button onClick={() => Alerter.error("This is an error alert!")}>Show alert error</button>
  <button onClick={() => Alerter.success("This is a success alert")}>Show alert success</button>
  <Alerter />
</div>
```

### Alert with a button

The `Alerter` methods support an optionnal second parameter, which can be used to add a button to the notification, with the `buttonText` and `buttonAction` keys:

```
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

<div>
  <button onClick={triggerAlert}>Show alert</button>
  <button onClick={triggerAlertError}>Show alert error</button>
  <button onClick={triggerAlertSuccess}>Show alert success</button>
  <Alerter />
</div>
```
