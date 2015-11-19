module.exports =
    drawer: ->
        toggler = document.querySelector '[formaction="drawer/toggle"]'
        drawer  = document.querySelector '[role="application"] aside'

        toggler.addEventListener 'click', ->
            isExpanded = drawer.getAttribute('aria-expanded') is 'true'
            drawer.setAttribute 'aria-expanded', not isExpanded
