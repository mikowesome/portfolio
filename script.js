(function scriptFactory(){
    // VARIABLES
    // Filters
    const filters = document.querySelector('.filters-list')
    const filterAll = document.querySelector('#filter-all')
    const filterAbout = document.querySelector('#filter-about')
    const filterProjects = document.querySelector('#filter-projects')
    const filterMedia = document.querySelector('#filter-media')

    // Cards
    const introduction = document.querySelector('#introduction')
    const skills = document.querySelector('#skills')
    const cardSkills = document.querySelectorAll('.card-skill')
    const cardProjects = document.querySelectorAll('.card-project')
    const cardMedia = document.querySelectorAll('.card-media')

    // Projects
    const project1 = document.querySelector('#project-1')
    const project2 = document.querySelector('#project-2')
    const project3 = document.querySelector('#project-3')
    const project4 = document.querySelector('#project-4')

    // Media
    const github = document.querySelector('#github')
    const linkedin = document.querySelector('#linkedin')

    // END OF VARIABLES

    // EVENT LISTENERS
    filterAll.addEventListener('click', highlightAll)
    filterAbout.addEventListener('click', highlightAbout)
    filterProjects.addEventListener('click', highlightProjects)
    filterMedia.addEventListener('click', highlightMedia)

    function highlightAll() {
        introduction.classList.remove('unhighlight')
        skills.classList.remove('unhighlight')
        cardSkills.forEach(card => {
            card.classList.remove('unhighlight')
        })
        cardProjects.forEach(card => {
            card.classList.remove('unhighlight')
        })
        cardMedia.forEach(card => {
            card.classList.remove('unhighlight')
        })
        filterAll.classList.add('active')
        filterAbout.classList.remove('active')
        filterProjects.classList.remove('active')
        filterMedia.classList.remove('active')
        if (window.innerWidth >= 1576) {
            project1.classList.remove('highlight-xl')
            project2.classList.remove('highlight-xl')
            project3.classList.remove('highlight-xl')
            project4.classList.remove('highlight-xl')
            github.classList.remove('highlight-project-xl')
            linkedin.classList.remove('highlight-project-xl')
            github.classList.remove('highlight-about-xl')
            linkedin.classList.remove('highlight-about-xl')
            github.classList.remove('highlight-media-xl')
            linkedin.classList.remove('highlight-media-xl')
        } else if (window.innerWidth >= 1200 && window.innerWidth < 1576) {
            project1.classList.remove('highlight-l')
            project2.classList.remove('highlight-l')
            project3.classList.remove('highlight-l')
            project4.classList.remove('highlight-l')
            github.classList.remove('highlight-l')
            linkedin.classList.remove('highlight-l')
            skills.classList.remove('highlight-media-l')
        } else if (window.innerWidth >= 750 && window.innerWidth < 1200) {
            project1.classList.remove('highlight-m')
            project2.classList.remove('highlight-m')
            project3.classList.remove('highlight-m')
            project4.classList.remove('highlight-m')
            github.classList.remove('highlight-m')
            linkedin.classList.remove('highlight-m')
        } else if (window.innerWidth < 750) {
            project1.classList.remove('highlight-s')
            project2.classList.remove('highlight-s')
            project3.classList.remove('highlight-s')
            project4.classList.remove('highlight-s')
            github.classList.remove('highlight-s')
            linkedin.classList.remove('highlight-s')
        }
    }

    function unHighlightAll() {
        highlightAll()
        introduction.classList.add('unhighlight')
        skills.classList.add('unhighlight')
        cardSkills.forEach(card => {
            card.classList.add('unhighlight')
        })
        cardProjects.forEach(card => {
            card.classList.add('unhighlight')
        })
        cardMedia.forEach(card => {
            card.classList.add('unhighlight')
        })
        filterAll.classList.remove('active')
        filterAbout.classList.remove('active')
        filterProjects.classList.remove('active')
        filterMedia.classList.remove('active')
    }

    function highlightAbout() {
        unHighlightAll()
        introduction.classList.remove('unhighlight')
        skills.classList.remove('unhighlight')
        cardSkills.forEach(card => {
            card.classList.remove('unhighlight')
        })
        filterAbout.classList.add('active')
        if (window.innerWidth >= 1576) {
            github.classList.add('highlight-about-xl')
            linkedin.classList.add('highlight-about-xl')
        }
    }

    function highlightProjects() {
        unHighlightAll()
        cardProjects.forEach(card => {
            card.classList.remove('unhighlight')
        })
        filterProjects.classList.add('active')
        if (window.innerWidth >= 1576) {
            project1.classList.add('highlight-xl')
            project2.classList.add('highlight-xl')
            project3.classList.add('highlight-xl')
            project4.classList.add('highlight-xl')
            github.classList.add('highlight-project-xl')
            linkedin.classList.add('highlight-project-xl')
        } else if (window.innerWidth >= 1200 && window.innerWidth < 1576) {
            project1.classList.add('highlight-l')
            project2.classList.add('highlight-l')
            project3.classList.add('highlight-l')
            project4.classList.add('highlight-l')
        } else if (window.innerWidth >= 750 && window.innerWidth < 1200) {
            project1.classList.add('highlight-m')
            project2.classList.add('highlight-m')
            project3.classList.add('highlight-m')
            project4.classList.add('highlight-m')
        } else if (window.innerWidth < 750) {
            project1.classList.add('highlight-s')
            project2.classList.add('highlight-s')
            project3.classList.add('highlight-s')
            project4.classList.add('highlight-s')
        }
    }

    function highlightMedia() {
        unHighlightAll()
        cardMedia.forEach(card => {
            card.classList.remove('unhighlight')
        })
        filterMedia.classList.add('active')
        if (window.innerWidth >= 1576) {
            github.classList.add('highlight-media-xl')
            linkedin.classList.add('highlight-media-xl')
        } else if (window.innerWidth >= 1200 && window.innerWidth < 1576) {
            github.classList.add('highlight-l')
            linkedin.classList.add('highlight-l')
            skills.classList.add('highlight-media-l')
        } else if (window.innerWidth >= 750 && window.innerWidth < 1200) {
            github.classList.add('highlight-m')
            linkedin.classList.add('highlight-m')
        } else if (window.innerWidth < 750) {
            github.classList.add('highlight-s')
            linkedin.classList.add('highlight-s')
        }
        
    }
})()
