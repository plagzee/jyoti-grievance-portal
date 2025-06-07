const jwt = require("jsonwebtoken");

const checkLogin = () => {
    if (typeof window === "undefined") return false;

    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.login === true) {
            return true;
        }
        return false;
    } catch (err) {
        console.error("Invalid token:", err);
        return false;
    }
};

export default checkLogin;
