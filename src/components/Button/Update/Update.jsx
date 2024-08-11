import './Update.css'
const Update = ({ text, onClick }) => {
    return (
        <button type="button" className="update-artist" onClick={onClick ? onClick : ''}>
            {text ? text : <i className="fa-solid fa-pen"></i>}
        </button>
    )
}
export default Update
