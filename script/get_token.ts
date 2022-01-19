import axios from "axios";
import baseSetting from "../setting/baseSetting";

export default async function getToken() {
    const res = await axios.post(baseSetting.endpoints.token_endpoint, new URLSearchParams(baseSetting.authorization), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return res.data.access_token
}