import './TextInfo.css'
const TextInfo = ({value, onChange, onKeyDown})=>{
    return(
        <input
            type="text"
            className='input-text-without-placeholder'
            value={value}
            onChange={onChange?onChange:''}
            onKeyDown={onKeyDown?onKeyDown:''}
        />
    )
}
export default TextInfo