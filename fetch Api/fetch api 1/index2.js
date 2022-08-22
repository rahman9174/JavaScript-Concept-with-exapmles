var btn = document.getElementById("btn");
btn.addEventListener("click", makeRequest);

function makeRequest(){
    console.log("button clicked");
    fetch("data1.txt").then((res)=>{
        if(!res.ok){
            throw Error(res.statusText);
        }
        console.log(res);
        return res.text();
    }).then((data)=>{
        document.getElementById("dataTarget").innerHTML=data;
        // console.log(data);
    }).catch((result)=>{
        document.getElementById("dataTarget").innerHTML = result;
        console.log("document not found ....."+result);
    })
} 
