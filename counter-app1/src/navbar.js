const Navbar = (props) => {
    const value = props.value;
    return ( 
        <div>
            <nav className="navbar">
                <h1>Shopping Cart</h1>
                <div className="links">
                    <a href="/">Home</a>
                    
                    <a href="/create">Cart</a>
                    <p>{value}</p>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;