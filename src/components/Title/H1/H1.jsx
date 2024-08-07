import './H1.css'
const H1 = ({ children, icon1, icon2}) => {
    return <h1 className="principal-title">{icon1?icon1:''}{children}{icon2?icon2:''}</h1>
}
export default H1
