import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
        <Link to="/" className="t-[#FFD700]">
            Oyow Tours & Protection
        </Link>
        <div className="space-x-6 font-medium">
            <Link to="/">Home</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/bookings">Bookings</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" className="bg-[#FFD700] text-[#0033A0] px-3 py-1 rounded-lg">Login</Link>
        </div>
        </nav>
    );
}
