export const getStaticPaths = async()=>{
    //its a next function, its runs only on build time & not rendered on browser.its just to tell next the number of static pages  to build
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(ninja =>{
        return{
            params:{
                id:ninja.id.toString()
            }
        }
    })
    return {
        paths,
        fallback:false //when id does not exits
    }
    }

export const getStaticProps = async(context)=>{
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return {
        props:{
            ninja:data
        }
    }
}
const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;