import BookedListCard from "./BookedListCard"

// function will display db.json in a list format 
function List({list}){
    return(
        <div>
            <div>
                <BookedListCard students={list} />
            </div>
        </div>
    )
}

export default List