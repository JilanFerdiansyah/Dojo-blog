import { Link } from "react-router-dom"

const Page404 = () => {
    return ( 
        <div className="not-found">
            <h1>404 NO DATA</h1>
            <p>data nya ga ada :(</p>
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default Page404;