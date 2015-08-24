Cozy Ui - Demo app
==================

Here is a demo app for Cozy Ui behaviors. You can use it to test interfaces
components, and learn how to use them to build your own Ui. This apps
demonstrate how to use styles provided by Cozy Ui, as well as markups and
attributes to get it working perfectly.


## How to develop Cozy Ui

If you plan to develop on Cozy Ui, you'll need be aware of some tricks that in
use in the _demo_ app. You may consider this app as a sandbox for your tests.
This app use [Brunch][brunch.io] as asset builder (as well as all Cozy apps).
Due to some restrictions in the Brunch watcher, we cannot simply link to node
module and expect to have a full live-reload system. Instead, the lib is
symlinked into the `app/styles` folder, and then available for import in the
`app/styles/app.styl` main file.

To work onto the demo app with the live reload, you need brunch installed on
your system:

```sh
$ npm install -g brunch
```

Then, simply use the `npm start` command from the `demo` dir. It runs brunch in
watch mode with a server, so point your browser to
[http://localhost:3333](http://localhost:3333) to view the demo app in action.

You can now works into the `lib` dir and expect your changes directly reloaded
in the demo app.



[brunch.io]: http://brunch.io/
