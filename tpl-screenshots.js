const fs = require('fs')

const Handlebars = require('handlebars')

const tpl = Handlebars.compile(`
<style>
  .diff {
    display: flex;
    flex-wrap: none;
  }

  .diff img {
    flex-basis: 1;
    flex-shrink: 1;
    flex-grow: 0;
    min-width: auto;
    width: 33%;
  }
</style>

{{#each components }}
  <h3>{{ this.filename }}</h3>
  <pre>
    {{ this.pixelmatch }}
  </pre>
  <div class='diff'>
      <img src='./old_screenshots/{{ this.filename }}' />
      <img src='./screenshots/{{ this.filename }}' />
      <img src='./diffs/{{ this.filename }}' />
  </div>
{{/each}}
`)

const softRead = filename => {
  try {
    return fs.readFileSync(filename).toString()
  } catch (e) {
    return ''
  }
}

const main = async () => {
  const components = fs
    .readdirSync('./screenshots')
    .filter(x => x.endsWith('png'))
    .map(x => {
      const pixelmatchOutput = softRead(`./diffs/${x}.pixelmatch.txt`)
      return {
        pixelmatch: pixelmatchOutput,
        filename: x
      }
    })
  fs.writeFileSync('./screenshots.html', tpl({ components }))
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
