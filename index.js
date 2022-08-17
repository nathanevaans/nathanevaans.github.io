const main = document.getElementsByTagName('main')[0]

//
// PRELOAD PAGES
//

const load = async (uri) => {
    let result
    await fetch(uri)
        .then(response => response.text())
        .then(text => result = text)

    return result
}

const projectsHTML = load('projects/index.html')

const educationHTML = load('education/index.html')

const homeHTML = load('home/index.html')


//
// PROJECTS
//

const projects = document.getElementById('projects')
projects.onclick = () => focus(projects)


//
// EDUCATION
//

const education = document.getElementById('education')
education.onclick = () => focus(education)


//
// HOME
//

const home = document.getElementById('home')
home.onclick = () => focus(home)


//
// LOGIC
//

const focus = async (elem) => {
    // get current and remove the current class
    const current = document.getElementsByClassName('_nav-current')[0]
    current.classList.remove('_nav-current')
    // add current class to the new element
    elem.classList.add('_nav-current')

    // clear main
    main.innerHTML = ''

    // get the current stylesheet and remove from the head
    const link = document.getElementById('main')
    document.head.removeChild(link)
    // add the new stylesheet
    const newLink = document.createElement('link')
    newLink.id = 'main'
    newLink.rel = 'stylesheet'
    newLink.href = elem.id + '/index.css'
    document.head.appendChild(newLink)

    // get the new html
    switch (elem.id) {
        case 'projects':
            main.innerHTML = await projectsHTML
            break;
        case 'education':
            main.innerHTML = await educationHTML
            break;
        case 'home':
            main.innerHTML = await homeHTML
            break;
    }
}

//
// ENTRY
//

focus(projects).then(_ => _)
