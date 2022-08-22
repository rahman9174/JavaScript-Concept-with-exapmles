let btn = document.getElementById("btn");
btn.addEventListener("click",fetchApiCall);

function fetchApiCall(){
    fetch('https://dummyjson.com/todos').then((res)=>{
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json();
    }).then((data)=>{
        console.log(data);
        let opt = document.getElementById("allData");
       data.forEach((elem)=>{
           opt.innerHTML += `
           <div>id : ${elem.id}</div>
           `
       })
        
        
    })
}