console.log('backend seekhenge');
require('dotenv').config();
const express=require('express');
const app=express();
const port=3200

const githubData={
    "login": "agc0der03",
    "id": 121255271,
    "node_id": "U_kgDOBzo1Zw",
    "avatar_url": "https://avatars.githubusercontent.com/u/121255271?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/agc0der03",
    "html_url": "https://github.com/agc0der03",
    "followers_url": "https://api.github.com/users/agc0der03/followers",
    "following_url": "https://api.github.com/users/agc0der03/following{/other_user}",
    "gists_url": "https://api.github.com/users/agc0der03/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/agc0der03/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/agc0der03/subscriptions",
    "organizations_url": "https://api.github.com/users/agc0der03/orgs",
    "repos_url": "https://api.github.com/users/agc0der03/repos",
    "events_url": "https://api.github.com/users/agc0der03/events{/privacy}",
    "received_events_url": "https://api.github.com/users/agc0der03/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-12-22T18:22:08Z",
    "updated_at": "2024-01-19T16:37:29Z"
}
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/github',(req,res)=>{
    res.json(githubData);
})


app.get('/twitter',(req,res)=>{
    res.send('hitesh.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log('exmaple app listening on port');
    console.log(process.env.PORT);
})