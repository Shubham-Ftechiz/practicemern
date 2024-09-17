const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const shoesRoutes = require('./routes/shoesRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

app.use(express.static('public'));

app.use(cors());

app.use(express.json());

// Shoes Service Health Test APIs
app.get("/", (req, res)=> {
    res.send({
        message: "Healt Success!"
    });
});

// routes

shoesRoutes(app);

// Describe the port here

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Shoes Service backend is up now!', PORT)
})


