var btn = document.getElementById("btn");
btn.addEventListener("click", makeRequest);

function makeRequest(){
    console.log("button clicked");
    const PromiseObj = fetch( 'data.txt');
    console.log(PromiseObj);
    PromiseObj.then((res)=>{
        console.log(res);
        return res.text();
    }).then((final)=>{
        console.log(final);
    })
} 
