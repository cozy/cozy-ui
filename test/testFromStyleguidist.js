import React from 'react'
import Preview from 'react-styleguidist/lib/client/rsg-components/Preview'
import fs from 'fs'
import chunkify from 'react-styleguidist/lib/loaders/utils/chunkify'
import pretty from 'pretty'

import * as content from '../docs/fixtures/content'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const testFromStyleguidist = (
  name,
  markdown,
  require,
  { delay } = { delay: 0 }
) => {
  const evalInContext = a =>
    // eslint-disable-next-line no-new-func
    new Function(
      'require',
      'content',
      'isTesting',
      'state',
      'setState',
      `const React = require("react");
      ` + a
    ).bind(null, require, content, () => true)

  const options = {
    context: {
      config: {
        compilerConfig: {
          objectAssign: 'Object.assign',
          target: { ie: 11 },
          transforms: {
            modules: false,
            dangerousTaggedTemplateString: true,
            asyncAwait: false
          }
        }
      },
      codeRevision: 1337
    }
  }

  // TouchRipples can cause flaky tests
  const touchRippleRx = /<span class="MuiTouchRipple-root"><\/span>/g
  const removeTouchRipples = html => {
    return html.replace(touchRippleRx, '')
  }

  describe(name, () => {
    it('should render examples', done => {
      let doneCounter = 0
      const Readme = fs.readFileSync(markdown)
      const chunks = chunkify(Readme)
      const codes = chunks.filter(x => x.type === 'code')
      const rendered = []
      const finish = () => {
        rendered.forEach(rendered => {
          expect(rendered).toMatchSnapshot(name)
        })
        done()
      }
      codes.forEach(async code => {
        const root = mount(
          <Preview code={code.content} evalInContext={evalInContext} />,
          options
        )
        await sleep(delay) // some components (like the ActionMenu) are flaky due to external libs
        requestAnimationFrame(async () => {
          await root.update()
          rendered.push(pretty(removeTouchRipples(root.html())))
          doneCounter++
          if (doneCounter === codes.length) {
            finish()
          }
        })
      })
    })
  })
}

export default testFromStyleguidist
