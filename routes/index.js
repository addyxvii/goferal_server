require('.env').load();
var unirest = require('unirest')
unirest.get("https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[state_cont]=Colorado&radius=50")
.header("X-Mashape-Key", apiKey)
.header("Accept", "text/plain")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
