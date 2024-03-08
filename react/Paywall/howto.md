### Create new variant

A new variant is essentially a set of translations adapted to a specific context of use.

To create a new one, add your translation to the `src/react/Paywall/locales` directory. The translations for each case (default, premium or public) are grouped together under the name of your variant. A case includes a title, content and a label for the action.

```static
"variantNamePaywall": {
    "premium": {
      "title": "Upgrade your Cozy!",
      "content": "Your offer allows you to connect %{max} in your Cozy.  \n  \nTo unlock this feature, or simply support us, you can change your Cozy offer.",
      "action": "Check our plans"
    },
    ...otherCase
  }
```

Next, we create a new component returning the `Paywall`, specifying the name of the new variant. You can also use `contentInterpolation` to insert variables into the content translation.

```js static
<Paywall
  variant="variantName"
  contentInterpolation={{
    max: 10
  }}
  onClose={onClose}
/>
```
