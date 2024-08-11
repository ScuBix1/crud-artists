import './Delete.css'
const Delete = ({ text, onClick }) => {
    return (
        <button type="button" className="delete-artist" onClick={onClick ? onClick : ''}>
            {text ? text : <i className="fa-solid fa-trash"></i>}
        </button>
    )
}
export default Delete
