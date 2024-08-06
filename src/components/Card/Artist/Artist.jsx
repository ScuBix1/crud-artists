import './Artist.css'

const Artist = ({ artistInfo }) => {
    return (
        <div className="container-card-artist">
            <p className="artist-info">{artistInfo ? artistInfo : 'Aucune information'}</p>
        </div>
    )
}

export default Artist
