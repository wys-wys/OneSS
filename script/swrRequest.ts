import axios from "axios";

const fetcher = (url: string) => axios.get(url).then(res => res.data)
const fetcherPost = (url: string) => axios.post(url).then(res => res.data)
