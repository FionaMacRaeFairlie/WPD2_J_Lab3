const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));


const router = require('./routes/guestbookRoutes');
app.use('/', router); 


app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})

