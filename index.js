const main = document.getElementsByTagName('main')[0]


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

const focus = (elem) => {
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
    fetch(elem.id + '/index.html')
        .then(response => response.text())
        .then(text => main.innerHTML = text);
}


//
// ENTRY
//

focus(projects)
