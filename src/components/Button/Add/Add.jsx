import './Add.css'
const Add = ({ text, onClick }) => {
    return (
        <button type="button" className="add-artist" onClick={onClick ? onClick : ''}>
            {text ? text : <i class="fa-solid fa-plus"></i>}
        </button>
    )
}
export default Add
