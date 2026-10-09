import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            background: "#2874F0",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div style={{ color: "white", fontSize: "16px" }} onClick={() => navigate("/")}>Home</div>
            <div style={{ color: "white", fontSize: "16px" }} onClick={() => navigate("/products")}>Products</div>
            <div style={{ color: "white", fontSize: "16px" }} onClick={() => navigate("/cart")}>Cart</div>
            <div style={{ color: "white", fontSize: "16px" }} onClick={() => navigate("/contact")}>Contact</div>
        </div>
    )
}

export default Header