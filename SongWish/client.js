const fetch = require('node-fetch')


const Url = 'http://localhost:3000/'
const djId = ""

//DJ-Funtionen

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

//Aufruf der verschiedener  DJ-Funktionen

postDj(Url + 'songs', { title: "Grenade", artist: "Bruno Mars"})
.then(data => {
    console.log(data)
});

/*getDj();

getOneDj(Url + 'dj/' + djId,  )
.then(id => {
    console.log(id)
});

deleteDj(Url + 'dj/' + djId, )
.then(id => {
    console.log(id)
})*/

//Song-Funktionen

//Song erstellen



