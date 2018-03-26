Display notications!  
Include the `<Alerter />` component somewhere in your app, but only once. After that, you can use the static methods `Alerter.info`, `Alerter.success` and `Alerter.error` to trigger a notification.

```
<div>
  <button onClick={() => Alerter.info("hi!")}>Show alert</button>
  <Alerter />
</div>
```
### Alert with a button

The `ALerter` methods support an optionnal second parameter, which can be used to add a button to the notification, with the `buttonText` and `buttonAction` keys:

```
const triggerAlert = () => {
  Alerter.info("Accept our terms and conditions and subscribe to our newsletter", {
    buttonText: "ok",
    buttonAction: () => alert("Thanks!")
  });
};

<div>
  <button onClick={triggerAlert}>Show alert</button>
  <Alerter />
</div>
```
