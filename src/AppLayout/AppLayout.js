import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Posts from "../Posts/Posts";
import PostLists from "../PostLists/PostLists";
import Post from "../Post/Post";
import About from "../About/About";
import Login from "../Login/Login";
import Stats from "../Stats/Stats";
import NoMatch from "../NoMatch/NoMatch";

function AppLayout() {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    function logOut() { setUser(null); navigate("/"); }
    return (
    <>
    <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}> Home </Link>
    <Link to="/posts" style={{ padding: 5 }}> Posts </Link>
    <Link to="/about" style={{ padding: 5 }}> About </Link>
    <span> | </span>
    { user && <Link to="/stats" style={{ padding: 5 }}> Stats </Link> }
    { !user && <Link to="/login" style={{ padding: 5 }}> Login </Link> }
    { user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer'}}>
    Logout </span> }
    
    </nav>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/posts" element={<Posts />}>
<Route index element={<PostLists />} />
<Route path=":slug" element={<Post />} />
</Route> <Route path="/about" element={<About />} />
<Route path="/login" element={<Login onLogin={setUser}/>} />
<Route path="/stats" element={<Stats user={user}/>} />
<Route path="*" element={<NoMatch />} />
</Routes>
</>
    );
    }
    export default AppLayout;