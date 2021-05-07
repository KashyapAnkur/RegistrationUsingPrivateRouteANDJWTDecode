import jwt_decode from "jwt-decode";
var decoded = localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")) : null;
export {decoded};