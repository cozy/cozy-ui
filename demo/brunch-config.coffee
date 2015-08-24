exports.config =
    paths:
        watched: ['app']

    conventions:
        ignored: [
            /[\\/]_/
            /[\\/]cozy-ui/
        ]

    files:
        javascripts:
            joinTo: 'scripts/app.js'

        stylesheets:
            joinTo: 'styles/app.css'

    plugins:
        stylus:
            # As long as the Normalize.css file is included by the plugin, but
            # this last isn't directly used in demo, we include it manually
            # here.
            imports: [
                '../node_modules/normalize.css/normalize.css'
            ]
