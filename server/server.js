const express = require('express');
const bodyParser = require("body-parser");
const logger = require('morgan');
const axios = require('axios');
const _ = require('lodash');


const app = express();
// Log activity
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.set('port', (process.env.PORT || 3001));

app.post('/data', (req, res) =>{
  console.log("hit this route>>>");
  //console.log("req.body is >>>>", req.body);
  const query = JSON.parse(req.body).recipeTitle;
  console.log("query is >>>", query);
  axios.get(`https://api.edamam.com/search?app_id=1545788b&app_key=5c332eb2294588a3ad22f581faeb578f&q=${query}`)
  .then(results=>{
    //console.log("results is >>>", JSON.stringify(results.data.hits, null,2));
    let recipes = [];
    _.forEach(results.data.hits, d=>{
      recipes.push(d.recipe);
    })
    res.json(recipes);
  })
})

const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

