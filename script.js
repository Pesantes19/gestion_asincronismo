
let charactersIds = [1,2,3,4,5,6,7,8]
let baseApiUrl =  'https://api.jikan.moe/v4'
let charactersEndPoint = '/characters'


document.addEventListener('DOMContentLoaded', async ()=>{
    let req = new XMLHttpRequest();
    req.onload = function(){
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    oReq.open('get', `${baseApiUrl}${charactersEndPoint}/${charactersIds[0]}`, true);
    oReq.send();
    fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[0]}`).then((res)=>{
        res.json().then(function(data) {
            console.log(data);
            fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[1]}`).then((res2)=>{
                res2.json().then(function(data2) {
                    console.log(data2);
                    fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[2]}`).then((res3)=>{
                        res3.json().then(function(data3) {
                            console.log(data3);
                            fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[3]}`).then((res4)=>{
                                res4.json().then(function(data4) {
                                    console.log(data4);
                                    fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[4]}`).then((res5)=>{
                                        res5.json().then(function(data5) {
                                            console.log(data5);
                                            fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[5]}`).then((res6)=>{
                                                res6.json().then(function(data6) {
                                                    console.log(data6);
                                                    fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[6]}`).then((res7)=>{
                                                        res7.json().then(function(data7) {
                                                            console.log(data7);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    });
    var results =await Promise.all([
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[0]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[1]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[2]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[3]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[4]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[5]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[6]}`),
        fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[7]}`)
    ]);
    console.log(results);
    let response = await fetch(`${baseApiUrl}${charactersEndPoint}/${charactersIds[0]}`);
    console.log(response);
    let data  = await response.json();
    console.log(data);
});
