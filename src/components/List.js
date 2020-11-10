import Card from '../components/Card'
function List (props) {
    return (
        <div>
            {
                props.info.map(x => {
                    return ( // X
                        <Card key={ x.id } name={ x.name } image={ x.image }></Card>
                    )
                })
            }
        </div>
    )
}

export default List