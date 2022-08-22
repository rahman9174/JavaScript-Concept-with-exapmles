class Clock extends React.Component {
    render(){
        let date = new Date();
        let time = <h2>The current date and time is : {date.toLocaleString()}</h2>
        return time;
    }
}