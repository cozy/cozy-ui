import React from 'react'
import Preview from 'react-styleguidist/lib/rsg-components/Preview'
import fs from 'fs'
import chunkify from 'react-styleguidist/loaders/utils/chunkify'
import pretty from 'pretty'

const testFromStyleguidist = (name, markdown, require) => {
  const evalInContext = a =>
    // eslint-disable-next-line no-new-func
    new Function(
      'require',
      'state',
      'setState',
      'const React = require("react");' + a
    ).bind(null, require)

  const options = {
    context: {
      config: {
        compilerConfig: {
          objectAssign: 'Object.assign'
        }
      }
    }
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
          expect(rendered).toMatchSnapshot()
        })
        done()
      }
      codes.forEach(() => {
        const root = mount(
          <Preview code={codes[0].content} evalInContext={evalInContext} />,
          options
        )
        requestAnimationFrame(() => {
          root.update()
          rendered.push(pretty(root.html()))
          doneCounter++
          if (doneCounter == codes.length) {
            finish()
          }
        })
      })
    })
  })
}

export default testFromStyleguidist
