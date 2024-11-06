import "bootstrap"

import { images } from './images'

for(let m of images){
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.url}" alt="${m.title}" class="img-thumbnail"/>
    `
    m_thumb.onclick = function(){
        displayMovie(m)
    }

    window.onload = function(){
        displayMovie(m)
    }

}




let featured_image = document.querySelector(".featured")
function displayMovie(image){
    featured_image.innerHTML = `
                <div class="card">
                    <img src="${image.url}" class="card-img-top" alt="${image.title}">
                    <div class="card-header"><h1>${image.title}</h1></div>
                    <div class="card-body">
                      <p class="card-text">${image.description}</p>
                    </div>
                </div>
    `
}