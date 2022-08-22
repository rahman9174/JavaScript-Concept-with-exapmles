class RandomNum extends React.Component{
    render(){
        let arr = [1,2,3,4,5,6];
        let rNum = arr[Math.floor(Math.random()*arr.length)];
        let num = <h2>The random number is {rNum}</h2>
        return rNum;
    }
}