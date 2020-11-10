
function Card (props) {
    const { name, image } = props
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h2>{ name }</h2>
                    <img src={ image }></img>
                </div>
            </div>
        </div>
    )
}

export default Card