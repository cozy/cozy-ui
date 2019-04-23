## Push Client Banner
Banner to advertise for Cozy desktop client.

### Basic usage

```
<BannerClient
  text="Ajoutez vos documents et photos à votre Cozy depuis votre ordinateur : ils seront sauvegardés en lieu sûr et accessibles à tout moment !"
  hrefMobile="https://cozy.io"
  hrefDesktop="https://cozy.io"
  labelMobile="Téléchargez Cozy Drive sur votre mobile !"
  labelDesktop="Installer maintenant"
/>
```

### Options
#### action
You can add a function to `onClick` prop on top of the hyperlink
```
<BannerClient
  text="Ajoutez vos documents et photos à votre Cozy depuis votre ordinateur : ils seront sauvegardés en lieu sûr et accessibles à tout moment !"
  hrefMobile="https://cozy.io"
  hrefDesktop="https://cozy.io"
  labelMobile="Téléchargez Cozy Drive sur votre mobile !"
  labelDesktop="Installer maintenant"
  onClick={() => alert("Clicked!")}
/>
```
