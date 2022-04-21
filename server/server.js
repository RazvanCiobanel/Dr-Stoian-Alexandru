const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const titlesRoute = require('./routes/titles.js')
const activityRoutes = require('./routes/activities.js')
const certificationsRoutes = require('./routes/certifications')

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(cors())
app.use('/titles', titlesRoute )
app.use('/activities', activityRoutes)
app.use('/certifications', certificationsRoutes)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))