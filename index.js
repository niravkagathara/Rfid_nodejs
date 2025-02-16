const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
                    .then(
                        () => {
                            console.log("connected");
                        })
                    .catch(
                        () => {
                            console.log('error')
                        });

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('student @ 5000');
})




