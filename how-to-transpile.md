# How to use the transpiled cozy-ui

Having a transpiled version of cozy-ui allows application developers to
remove the webpack specific configs.

## How to

### 1. Install the next version of cozy-ui

```
yarn add cozy-ui@next
```

### 2. Add `stylesheet.css`

```patch
+ import 'cozy-ui/transpiled/react/stylesheet.css'
```

### 3. Replace occurences of `cozy-ui/react` by `cozy-ui/transpiled/react`

```
-import { Icon } from 'cozy-ui/react'
+import { Icon } from 'cozy-ui/transpiled/react'
```

Alternatively, you can use a webpack alias. Inside `webpack.config.js` :

```
+resolve: {
+    alias: {
+      'cozy-ui/react': 'cozy-ui/transpiled/react'
+    }
+}
```

### 4. Add the icon sprite

```patch
import { IconSprite } from 'cozy-ui/transpiled/react'

 const App = () => {
   return (
     <Layout>
       ...
       <Main>
         ...
       </Main>
+      <IconSprite />
    </Layout>
   )
 }
```

### 5. Replace palette location

```patch
-import palette from 'cozy-ui/stylus/settings/palette.json'
+import palette from 'cozy-ui/transpiled/react/palette'

```

## Caveats

You need to keep the stylus plugin if you use it in your stylus files, for example if you use a cozy-ui icon in your stylus files.

```stylus
// If you do this, then keep the stylus plugin since it adds the cozy-ui
// folder in the PATH of stylus    
background-image embedurl('../assets/icons/ui/share.svg')
```
