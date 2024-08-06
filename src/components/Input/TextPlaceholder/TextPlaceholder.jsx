import './TextPlaceholder.css'
const TextPlaceholder = ({placeholder, value, onChange}) => {
    return (
        <input
            type="text"
            className='input-text-with-placeholder'
            placeholder={placeholder?placeholder:'Veuillez entrer du texte'}
            value={value?value:''}
            onChange={onChange?onChange:''}
        />
    )
}
export default TextPlaceholder