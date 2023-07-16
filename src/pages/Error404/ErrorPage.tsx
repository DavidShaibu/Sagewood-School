import { Link } from "react-router-dom";


export default function ErrorPage() {
  
  return (
    <div className="errorsContainer">
        <p className="text404">404 Error</p>
        <p className="textBold">Page Not Found</p>
        <div className="buttons">
            <Link to="/"><button>Go back</button></Link>
            <Link to="/"><button>Take me Home</button></Link>
        </div>
    </div>
  )
}
