let btn = document.getElementById("btn");
btn.addEventListener("click",fetchData);
function fetchData(){
    fetch('https://dummyjson.com/products/1').then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)

       document.getElementById("id").innerHTML=`id : ${data.id}`
       document.getElementById("title").innerHTML="Title :"+data.title
       document.getElementById("description").innerHTML="description :"+data.description
       document.getElementById("price").innerHTML="price :"+data.price
       document.getElementById("discount").innerHTML="discountPercentage :"+data.discountPercentage

    })
}