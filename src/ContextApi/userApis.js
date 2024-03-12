import axios from "axios";
const server_url = process.env.REACT_APP_SERVER_URL;


const apiLogin = async (user) => {
    try {
        const res = await axios.post(`${server_url}/user/login`, user, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

const apiSignin = async (user) => {
    try {
        const res = await axios.post(`${server_url}/user/register`, user, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

const apiLogout = async () => {
    try {
        const res = await axios.post(`${server_url}/user/logout`,null, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

const apiSendOTP = async (email) => {
    try {
        const res = await axios.post(`${server_url}/user/sendOTP`, email, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

const apiVerifyOTP = async (data) => {
    try {
        const res = await axios.post(`${server_url}/user/verifyOTP`, data, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

const apiIsLogin = async () => {
    try {
        const res = await axios.get(`${server_url}/user`, {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        return error;
    }
}

export {
    apiLogin,
    apiSignin,
    apiLogout,
    apiVerifyOTP,
    apiSendOTP,
    apiIsLogin,
}
