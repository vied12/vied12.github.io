const { execSync } = require('child_process')
const  fs = require('fs')
const sqip = require('sqip')
const async = require('async')
const dsv = require('d3-dsv')
const camelCase = require('lodash/camelCase')
const originDir = 'public/screenshots'
const outputDir = 'src/assets/placeholder'

fs.readFile('./src/projects.tsv', 'utf8', (err, raw) => {
  const pictures = dsv.tsvParse(raw)
    .filter(p => p.isTool || p.isStoryTelling || p.isArt)
    .map(p => p.picture)

  async.each(pictures, (file, cb) => {
    execSync(`convert -verbose  "${originDir}/${file}[0]" /tmp/${file}`)
    const result = sqip({
      filename: `/tmp/${file}`,
    })
    fs.writeFile(`${outputDir}/${file}.svg`, result.final_svg, err => {
      if (err) {
        console.error(err)
      }
      cb()
    })
  })
  const filesToExport = pictures.map(p => `${p}.svg`)
  var index = filesToExport
    .map(file => `import ${camelCase(file)} from './${file}';`).join('\n')
  index += `\nexport {\n${filesToExport.map(file => camelCase(file)).join(',\n')}\n}`
  fs.writeFile(`${outputDir}/index.js`, index)
})
