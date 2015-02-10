exports.config =
    paths:
        watched: ['app', 'test', 'vendor', 'node_modules/cozy-ui/lib/cozy-ui']
    files:
        javascripts:
            joinTo: 'scripts/app.js'

        stylesheets:
            joinTo: 'styles/app.css'
            order:
                before: [
                    'vendor/styles/normalize.css'
                ]

        templates:
            joinTo: 'scripts/app.js'

    plugins:
        stylus:
            plugins: [
                'cozy-ui'
            ]
