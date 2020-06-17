const fetch = require('node-fetch')


const Url = 'http://localhost:3000/'
const djId = ""
const songId = "5eea3a8c1177ec0f28b4bf24"

//DJ-Funktionen
//Dj erstellen
async function postDj(url = Url, data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

//Alle Dj's
async function getDj() {
    fetch(Url + 'dj')
.then(data => {return data.json()})
.then(res=>{console.log(res)})
}

//Einen DJ
async function getOneDj(url = Url, id = djId) {
    const res = await fetch(url)
    return res.json();
}

//DJ löschen
async function deleteDj(url = Url, id = djId) {
    const res = await fetch(url, {
        method: 'DELETE'
    })
    return res.json();
}

//Aufruf der verschiedenen  DJ-Funktionen
/* postDj(Url + 'dj', { name: "Happ", vorname: "Kevin", kuenstlerName: "Happy"})
.then(data => {
    console.log(data)
}); */

/*getDj();
getOneDj(Url + 'dj/' + djId,  )
.then(id => {
    console.log(id)
});*/

/*deleteDj(Url + 'dj/' + djId, )
.then(id => {
    console.log(id)
})*/

/* getDj() */

//Song-Funktionen
//Song erstellen
async function postSong(url = Url, data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

//Alle Songs
async function getSongs() {
    fetch(Url + 'songs')
.then(data => {return data.json()})
.then(res=>{console.log(res)})
}

//Einen Song
async function getOneSong(url = Url, id = songId) {
    const res = await fetch(url)
    return res.json();
}

//Song löschen
async function deleteSong(url = Url, id = songId) {
    const res = await fetch(url, {
        method: 'DELETE'
    })
    return res.json();
}

//Song verändern
async function changeSong(url = Url, data = {}) {
    const res = await fetch(Url + 'songs/' + songId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}

//Aufruf der verschiedenen Song-Funktionen
/* postSong(Url + 'songs', { title: "Mockingbird", artist: "Eminem"})
.then(data => {
    console.log(data)
}); */

/* getSongs() */

/* getOneSong(Url + 'songs/' + songId,  )
.then(id => {
    console.log(id)
}); */

/* deleteSong(Url + 'songs/' + songId, )
.then(id => {
    console.log(id)
}) */

/* changeSong(Url + 'songs/' + songId, { title: "Mockingbird", artist: "Eminem"})
.then(data => {
    console.log(data)
}); */








