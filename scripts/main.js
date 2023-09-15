const handleNav = () =>{


    const projectsNavHTML = document.querySelector('.projects_nav')
    const projectsHTML = document.querySelector('.projects_container')

    const contactNavHTML = document.querySelector('.contact_nav')
    const contactHTML = document.querySelector('.contact_container')
    const spanHTML = document.querySelector('.span_to_projects')



    const presentationNavHTML = document.querySelector('.presentation_nav')
    const presentationHTML = document.querySelector('.presentation_container')





    projectsNavHTML.addEventListener('click', () =>{
        projectsHTML.classList.add('projects_view')
        contactHTML.classList.remove('contact_view')
        presentationHTML.classList.add('presentation_view_initial')
    })  

    spanHTML.addEventListener('click', () =>{
        contactHTML.classList.add('contact_view')
        projectsHTML.classList.remove('projects_view')
        presentationHTML.classList.remove('presentation_view')
        presentationHTML.classList.remove('presentation_view_initial')
    }) 


    presentationNavHTML.addEventListener('click', () =>{
        presentationHTML.classList.add('presentation_view')
        contactHTML.classList.remove('contact_view')
        projectsHTML.classList.remove('projects_view')
        presentationHTML.classList.remove('presentation_view_initial')
    })  


    contactNavHTML.addEventListener('click', () =>{
        contactHTML.classList.add('contact_view')
        projectsHTML.classList.remove('projects_view')
        presentationHTML.classList.remove('presentation_view')
        presentationHTML.classList.remove('presentation_view_initial')

    })  
}



handleNav()