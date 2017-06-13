# fanburst-audio

> Scrapes [Fanburst](https://fanburst.com) url to get audio stream urls

## Install

```bash
npm install fanburst-audio
```

## Usage

```node.js
const {getStreamUrls} = require('fanburst-audio')

const url = 'https://fanburst.com/odesza'

getStreamUrls(url)
.then(streamUrls => {
  console.log(streamUrls)

  /*
  ['https://fanburst.com/stream/f9d20bbd-d94c-42e2-bc32-232fd418e422?client_id=51938de2-772a-449a-984c-35ca26f38078',
    ...
  ]
  */
})
.catch(error => {
  console.error(error)
})
```

## Test

```bash
npm test
```

NOTE: this module will most likely break in the future when Fanburst updates their audio endpoints.

## License

MIT
