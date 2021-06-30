import React from 'react'
import ReactDOM from 'react-dom'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de'

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale('de')

import App from 'App'

ReactDOM.render(<App />, document.getElementById('root'))
