import Artists from '../components/Artists'
import H1 from '../components/Title/H1/H1'
import Artist from '../components/Card/Artist/Artist'
import TextPlaceholder from '../components/Input/TextPlaceholder/TextPlaceholder'
import Add from '../components/Button/Add/Add'
import { useEffect, useState } from 'react'

export const Home = () => {

    const [artists, setArtists] = useState(Artists)
    const [fullName, setFullName] = useState('')

    const handleAddArtist = () => {
        if (fullName) {
            const [firstName, lastName] = fullName.split(' ').filter(Boolean)

            if (firstName && lastName) {
                const newArtist = { firstName, lastName }
                artists.push(newArtist)
                setFullName('')
                console.log(artists)
            } else {
                alert('Entrez au format suivant: "Bastian Monnin"')
            }
        }
    }

    useEffect(()=>{
        setArtists(artists)
    }, [artists])

    return (
        <>
            <H1>Top artistes chanteurs</H1>
            {artists.map((artist) => {
                return <Artist artistInfo={`${artist.firstName} ${artist.lastName}`} />
            })}
            <div>
                <TextPlaceholder
                    placeholder={'Entrez le prénom et le nom'}
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value)
                    }}
                />
                <Add onClick={handleAddArtist} />
            </div>
        </>
    )
}
