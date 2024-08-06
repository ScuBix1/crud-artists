import Artists from '../components/Artists'
import H1 from '../components/Title/H1/H1'
import Artist from '../components/Card/Artist/Artist'
import Delete from '../components/Button/Delete/Delete'
import Update from '../components/Button/Update/Update'
import TextPlaceholder from '../components/Input/TextPlaceholder/TextPlaceholder'
import TextInfo from '../components/Input/TextInfo/TextInfo'
import Add from '../components/Button/Add/Add'
import { useEffect, useState } from 'react'

export const Home = () => {
    const [artists, setArtists] = useState(Artists)
    const [fullName, setFullName] = useState('')
    const [editIndex, setEditIndex] = useState(null)
    const [editName, setEditName] = useState('')

    const handleAddArtist = () => {
        if (fullName) {
            const [firstName, lastName] = fullName.split(' ').filter(Boolean)

            if (firstName && lastName) {
                const newArtist = { firstName, lastName }
                artists.push(newArtist)
                setFullName('')
            } else {
                alert('Entrez au format suivant: "Bastian Monnin"')
            }
        }
    }
    const handleDeleteArtist = (index) => {
        setArtists((artist) => artist.filter((_, i) => i !== index))
        setEditIndex(null)
    }
    const handleEditArtist = (index) => {
        setEditIndex(index)
        setEditName(`${artists[index].firstName} ${artists[index].lastName}`)
    }
    const handleSaveEdit = (index) => {
        const [firstName, lastName] = editName.split(' ').filter(Boolean)
        if (firstName && lastName) {
            const updatedArtists = [...artists]
            updatedArtists[index] = { firstName, lastName }
            setArtists(updatedArtists)
            setEditIndex(null)
            setEditName('')
        } else {
            alert('Entrez au format suivant: "Bastian Monnin"')
        }
    }
    const handlePressEnter = (e, index) => {
        if (e.key === 'Enter') {
            handleSaveEdit(index)
        }
    }

    useEffect(() => {
        setArtists(artists)
    }, [artists])

    return (
        <>
            <H1>Top artistes chanteurs</H1>
            {artists.map((artist, index) => {
                return (
                    <>
                        {editIndex === index ? (
                            <Artist
                                key={index}
                                artistInfo={
                                    <>
                                        <TextInfo
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            onKeyDown={(e) => handlePressEnter(e, index)}
                                        />
                                    </>
                                }
                            >
                                <Delete onClick={() => handleDeleteArtist(index)} />
                            </Artist>
                        ) : (
                            <Artist
                                key={index}
                                artistInfo={`${artist.firstName} ${artist.lastName}`}
                            >
                                <Update onClick={() => handleEditArtist(index)} />
                                <Delete onClick={() => handleDeleteArtist(index)} />
                            </Artist>
                        )}
                    </>
                )
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
