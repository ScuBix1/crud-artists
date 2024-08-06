import './Artist.css'

const Artist = ({ artistInfo, children }) => {
    return (
        <div className="container-card-artist">
            <p className="artist-info">{artistInfo ? artistInfo : 'Aucune information'}</p> 
            <div className='artist-buttons'>{children?children:''}</div>
        </div>
    )
}

export default Artist
