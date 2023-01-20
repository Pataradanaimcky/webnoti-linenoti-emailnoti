var details = {
  'message':'hellooo from mcky',
  'stickerPackageId': '446',
  'stickerId': '1988',
}

var formBody = [];
for (var property in details) {
var encodedKey = encodeURIComponent(property);
var encodedValue = encodeURIComponent(details[property]);
formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

let status;

fetch('https://notify-api.line.me/api/notify', {
method: 'POST',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Authorization': 'Bearer mp9OqAcaQJQUVayv1oLfOx4uVPEFemUyWFUyUWQBHpL'
},
body: formBody
}).then((res) => { 
    // status = res.status; 
    return res.json() 
  }).then((jsonResponse) => {
    console.log(jsonResponse);
    // console.log(status);
  }).catch((err) => {
    // handle error
    console.error(err);
  });