import './Update.css'
const Update = ({ text, onClick }) => {
    return (
        <button type="button" className="delete-artist" onClick={onClick ? onClick : ''}>
            {text ? text : <i class="fa-solid fa-pen"></i>}
        </button>
    )
}
export default Update
