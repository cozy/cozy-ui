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
            imports: [
                '../node_modules/normalize.css/normalize.css'
            ]
            includeCss: true
