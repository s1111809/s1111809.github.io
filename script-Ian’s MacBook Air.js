/**
 * @author Demonstrator-3
 * @description Javascript code for demonstrator project 3
 * 
 */

// onderstaande code zet alvast de scene en alles klaar. De html-file 'old_world' wordt ingeladen.

let currentChildren = new Set()

const scene = document.querySelector('a-scene')          // Get the scene class
const all_ids = document.querySelectorAll('*[id]')

async function loadWorld(name) {
    const newWorld = await (await fetch(`/${name}.html`)).text()
    const template = document.createElement('div')
    template.innerHTML = newWorld

    // const content = scene.querySelector('#content');
    // content.appendChild(template)

    // Remove all children listen
    for ( child of currentChildren) {
        scene.removeChild(child)
    }
    currentChildren.clear()
    
    // Add all new elements from the new document in the scene and children list
    for ( child of template.children) {
        console.log(child);
        currentChildren.add(child)
        scene.appendChild(child)
    }
}


loadWorld('old_world')

