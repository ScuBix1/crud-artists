import Artists from '../components/Artists'
import H1 from '../components/Title/H1/H1'
import Artist from '../components/Card/Artist/Artist'
export const Home = () => {
    return(
        <>
        <H1>Top artistes chanteurs</H1>
        {
            Artists.map((artist)=>{
                return(<Artist artistInfo={`${artist.firstName} ${artist.lastName}`}/>)
            })
        }
        </>
    )
}