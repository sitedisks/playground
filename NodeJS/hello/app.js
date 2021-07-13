var express = require('express')
var app = express()

// JavaScript
const common = require("oci-common");
// Using default configurations

// Using personal configuration
const configurationFilePath = "~/.oci/config";
const configProfile = "config";
// const provider = new common.ConfigFileAuthenticationDetailsProvider(
//   configurationFilePath,
//   configProfile
// );

const config = common.ConfigFileReader.parseDefault(configurationFilePath);


// const configurationFilePath = "~/";
// const configProfile = "eBrochure_oci.config";
// const provider = new common.ConfigFileAuthenticationDetailsProvider(
//     configurationFilePath,
//     configProfile
// );
// const config = common.ConfigFileReader.parseDefault(configurationFilePath);
// const profile = config.accumulator.configurationsByProfile.get(configProfile);
// customCompartmentId = profile.get("customCompartmentId") || "";



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world ');
})

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

app.listen(3000, () => {
    console.log("Server running on port 3000");
});