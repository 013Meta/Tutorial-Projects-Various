import axios from 'axios';



export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID LriTVKKVg2jvqThoQRoQi27RrRm3vguhDv-p3kkMoUA'
    }
});