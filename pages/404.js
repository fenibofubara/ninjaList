import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
const Notfound = () => {
    const router = useRouter()
    useEffect(()=>{
      setTimeout(()=>{
     // router.go(-1)
      router.push('/')
      },3000)     
    },[])// [] fires useEffect onces when conponent mounts and not again when state changes
    return (
        <div className='not-found'>
            <h1>Oooooops.....</h1>
            <h2>That page can not be found</h2>
            <p>go back to the <Link href='/'><a>hompage</a></Link></p>
        </div>
      );
}
 
export default Notfound;