import './Card.css'


function Card({icon:Icon,title,para}){
    return(
        <div className="Card">
            <div className="Icon-Container"><Icon  className="Icon"/></div>
            <h1  className="Card-Title">{title}</h1>
            <p className="Card-Para">{para}</p>

        </div>
    )
}

export default Card