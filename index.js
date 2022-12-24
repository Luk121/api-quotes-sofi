var quotesSofi = require('./quotesSofi');
const app = require('express')();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`data are succesfuly running`));

app.get('/quote', (req, res) => {
    res.status(200).send({
        quote: quotesSofi.quotes[Math.floor(Math.random()*quotesSofi.quotes.length)]
    })
})