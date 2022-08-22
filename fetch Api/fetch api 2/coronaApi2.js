const appDAta = document.getElementById("appData");
fetch('https://api.covid19api.com/summary').then((res)=>{
//   console.log( res.json())
// console.log(res)

return res.json();

}).then((data)=>{
    console.log(Object.keys(data).length);
    console.log(data.Countries[0]);
    const cntry = data.Countries[0];
    for(var i = 0 ; i<data.length;)
    appDAta.innerHTML = `The country name : ${cntry.Country}  <br> the country code is : ${cntry.CountryCode}<br>
    New confirmed cases : ${cntry.NewConfirmed}<br>
    New Deaths : ${cntry.NewDeaths}<br>
    New Recovered : ${cntry.NewRecovered}<br>
    Total Confirmed : ${cntry.TotalConfirmed}<br>
    Total Deaths : ${cntry.TotalDeaths}<br>
    Total Recovered : ${cntry.TotalRecovered}
    `
})