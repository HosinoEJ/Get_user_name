import {Hono} from 'hono'
import {cors} from 'hono/cors'
const app = new hono()

app.use('/api/*', cors());

const TwitterUserID = 1882671462210998272;

app.get('/api', async (c) =>{
    const Xapi = await fetch(`https://x.com/intent/user?user_id=${TwitterUserID}`)
    const Xdata = await Xapi.json;
    
})