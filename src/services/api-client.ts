import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'eee7ec90f44b4f57aea44dabc040a29f'
    }
})