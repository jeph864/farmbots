var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://my.farm.bot/api/sensor_readings',
    'headers': {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1bmtub3duIiwic3ViIjoxNzkzOSwiaWF0IjoxNjU0MDY1MjEwLCJqdGkiOiI0NDNkNDNmYS0zMDJiLTQ2NjQtYjEzMy0wMWM3ODI0YTRkZDMiLCJpc3MiOiIvL215LmZhcm0uYm90OjQ0MyIsImV4cCI6MTY1OTI0OTIxMCwibXF0dCI6ImNsZXZlci1vY3RvcHVzLnJtcS5jbG91ZGFtcXAuY29tIiwiYm90IjoiZGV2aWNlXzE3OTcxIiwidmhvc3QiOiJ4aWNvbmZ1bSIsIm1xdHRfd3MiOiJ3c3M6Ly9jbGV2ZXItb2N0b3B1cy5ybXEuY2xvdWRhbXFwLmNvbTo0NDMvd3MvbXF0dCJ9.k7HxXH8libiza8j377ESbf7--HR5_7qC2de_sfURRNxsGoIcRNhohtMMk9Lk_ZGfJqgJ6ylZO4G2JSfQhdrmM6w2KuZ7qtx3UDEhO-8Sf10beYJDbPBdUopAm3AjlU-jqKQv4SRBByJGjrrpWC3xKZCGa9xbJxGD6EAMW4I8rZxS2SpyD4dYGuxiTs_TCtOfrTcjJ2MJK6ckeizvJSorfPAo5NEfS4UoG4ApCFQPWGJnwlvp8QRZKxsc6dXi7iC494rdSHsO8taZYM4sxauuTmE4PFspizOQOnecI5FORXRb0ZN5BOHNWsClJpYFxHcE-bf85Fc_s_1WTzjVmxJlWw',
        'Content-Type': 'application/json',
        'Cookie': '__farmbot_session=KM250zc%2B%2BOS0mUgn5KoBHMRcvBEovArnx3rafEO4I6vNnF6c8haOZ92zE2lDPrFghixe38V5EoDUdI6S6hsRQePL5FnrFx6XunL6Wxck9fZ9GurnLzvqNxd7K18nyNCfqOL1JiJ76biiG3R%2FvueViz4xN12GI8yYlMzP6lXN%2BUhS2wpB36AgOmxbedCFAFkkCQK0gcuGE1Cl--5Twb6WeAksy286SK--E%2FcLajkB7CYT7qhznqGibA%3D%3D'
    },
    body: JSON.stringify({
        "user": {
            "email": "kalagdf@rhrk.uni-kl.de",
            "password": "mYfarm2021*"
        }
    })

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});