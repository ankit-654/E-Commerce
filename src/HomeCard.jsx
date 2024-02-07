import "./App.css"
export default function Card(props){
    
    return(
        <div className="homecard-resp">
            <div className="card-resp">
                <img src={props.url} className="card-img" />
            </div>
        </div>
    )
}