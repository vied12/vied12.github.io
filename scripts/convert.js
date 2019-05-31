const { execSync } = require('child_process')
const fs = require('fs')
const sqip = require('sqip')
const async = require('async')
const dsv = require('d3-dsv')
const camelCase = require('lodash/camelCase')
const originDir = 'static/screenshots'
const outputDir = 'src/assets/placeholder'

const existingFiles = fs.readdirSync(outputDir).map(d => d.replace('.svg', ''))
fs.readFile('./src/projects.tsv', 'utf8', (err, raw) => {
  const pictures = dsv
    .tsvParse(raw)
    .filter(p => p.isTool || p.isStoryTelling || p.isArt)
    .map(p => p.picture)

  async.each(
    pictures.filter(p => existingFiles.indexOf(p) === -1),
    (file, cb) => {
      console.log(file)
      if (file.indexOf('.webm') > -1) {
        execSync(
          `ffmpeg  -i "${originDir}/${file}" -y -r 1/1 -vframes 1 /tmp/${file}.png`
        )
        file = `${file}.png`
      } else {
        execSync(`convert -verbose  "${originDir}/${file}[0]" /tmp/${file}`)
      }
      const result = sqip({
        filename: `/tmp/${file}`,
      })
      if (file.indexOf('.webm.png') > 0) {
        file = file.replace('.webm.png', '.webm')
      }
      fs.writeFile(`${outputDir}/${file}.svg`, result.final_svg, err => {
        if (err) {
          console.error(err)
        }
        cb()
      })
    }
  )
  const filesToExport = pictures.map(p => `${p}.svg`)
  var index = filesToExport
    .map(file => `import ${camelCase(file)} from './${file}';`)
    .join('\n')
  index += `\nexport {\n${filesToExport
    .map(file => camelCase(file))
    .join(',\n')}\n}`
  console.log(index)
  fs.writeFile(`${outputDir}/index.js`, index, err => {
    if (err) {
      console.error(err)
    }
  })
})
