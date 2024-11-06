import "bootstrap"

console.log("Hello!!!")

let a = [1 ,3, "four", 5, 9]

console.log(a)
console.log(a.length)

console.log(a[4])


//console.log(a[-1]) Not Supportted 

for(let i = 0; i < a.length; i++){
    console.log(a[i])
}


for(let e of a){
    console.log(e)

}


let obj = {
    number: "CS 2350",
    title: "Client side web dev",
    credits: 4,
    "number of students": 12, 
    class_meeting: "10:30 - 12:20",
    desctription: "TBD"

}

console.log(obj)

console.log(obj["title"])

console.log(obj.title)

console.log(obj["number of students"])

console.log(obj.class_meeting)

console.log(obj.keys)

for(let key in obj){
    console.log(key,"==>", obj[key])
}


const nav_links = [
    {
        text:"Home",
        url: "/home",
        active: true,
        disabled: false,
    },    {
        text:"Products",
        url: "/products",
        active: false,
        disabled: false,
    },    {
        text:"Serivices",
        url: "/services",
        active: true,
        disabled: false,
    },    {
        text:"About",
        url: "/about",
        active: true,
        disabled: false,
    },    {
        text:"Contact",
        url: "/contact",
        active: false,
        disabled: false,
    }


]


let html =""
for(let link of nav_links){
    html += `
        <li class="nav-item">
            <a class="nav-link${link.active ? " active" : ""}" aria-current="page" href="${link.url}">${link.text}</a>
        </li>
    `

}

document.querySelector(".navbar-nav").innerHTML = html