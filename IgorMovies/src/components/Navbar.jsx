import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>
        <h2>
          <Link to="/"><BiCameraMovie/> IgorMovies</Link>
        </h2>
        <form>
            <input type="text" />
            <button type='submit'><BiSearchAlt2/></button>
        </form>
      </nav>
  )
}

export default Navbar