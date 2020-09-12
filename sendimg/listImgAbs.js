
var fs =require( 'fs');
var axios = require('axios');

function mounted() {
    console.log("Load liste des images abs");
    axios
      .get('http://localhost:9000/essai/listerjsonimage')
      .then(response => (

        console.log(response.data)

          
          )
          )
  }

  mounted();