import {useEffect} from 'react'

const Home = () => {
   
    useEffect(() => {
        window.scroll(0,0)
    }, [])
   
    return (
        <>
         <h4>Home Page</h4>   
        </>
    )
}

export default Home
