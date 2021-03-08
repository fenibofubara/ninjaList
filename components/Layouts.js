import Footer from "./footer"
import Navbar from "./navbar"

const Layouts = ({children}) => {
    return (
        <div className='content'>
            <Navbar/>
            {children}
            <Footer/>

        </div>
      );
}
 
export default Layouts;