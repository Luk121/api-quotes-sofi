var quotesSofi = require('./quotesSofi');
const app = require('express')();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(
    cors({
        origin: "http://127.0.0.1:5500",
    })
)

app.listen(PORT, () => console.log(`data are succesfuly running`));

app.get('/quote', (req, res) => {
    res.status(200).send({
        quote: quotesSofi.quotes[Math.floor(Math.random()*quotesSofi.quotes.length)]
    })
})