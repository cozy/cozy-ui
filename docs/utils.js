import translations from './fixtures/en.json'
import get from 'lodash/get'
/** Fake cozy.client.intents.create to demonstrate features in Styleguide */
export const fakeIntentCreate = (action, doctype, options) => {
  let res
  const p = new Promise(resolve => {
    res = resolve
  })
  p.start = node => {
    const iframe = document.createElement('iframe')
    iframe.onload = () => {
      iframe.contentDocument.body.innerHTML = `
        Action: ${action}<br/>
        Doctype: ${doctype}<br/>
        options: ${JSON.stringify(options)}<br/>
        <br/>
        Click to complete intent`
      iframe.contentDocument.addEventListener('click', () => {
        node.removeChild(iframe)
        res({ result: 'OK' })
      })
    }
    node.appendChild(iframe)
    return p
  }
  return p
}

export const t = (path) => {
  return get(translations, path)
}
