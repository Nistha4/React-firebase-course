import './Navbar.css'

import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import {useTheme} from '../hooks/useTheme'

export default function Navbar() {
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking-Ninja</h1>
                </Link>
                <SearchBar />
                <Link to="create">
                    <h1>Create Recipe</h1>
                </Link>
            </nav>
        </div>
    )
}
