let dataBlog = []
console.log(dataBlog);

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('input-startDate').value
    let endDate = document.getElementById('input-endDate').value
    let description = document.getElementById('input-description').value
    let technologis1 = document.getElementById('input-technologis1').checked
    let technologis2 = document.getElementById('input-technologis2').checked
    let technologis3 = document.getElementById('input-technologis3').checked
    let technologis4 = document.getElementById('input-technologis4').checked
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    //kondisi untuk checkbox (checked)
    if (technologis1) {
        technologis1 = document.getElementById('input-technologis1').value
    } else {
        technologis1 = 'Belum dicentang'
    }

    if (technologis2) {
        technologis2 = document.getElementById('input-technologis2').value
    } else {
        technologis2 = 'Belum dicentang'
    }

    if (technologis3) {
        technologis3 = document.getElementById('input-technologis3').value
    } else {
        technologis3 = 'Belum dicentang'
    }

    if (technologis4) {
        technologis4 = document.getElementById('input-technologis4').value
    } else {
        technologis4 = 'Belum dicentang'
    }
    //kondisi untuk checkbox (checked)

    let project = {
        title,
        startDate,
        endDate,
        description,
        technologis1,
        technologis2,
        technologis3,
        technologis4,
        image
    }

    dataBlog.push(project)
    console.log(dataBlog)

    renderProject()
}

function renderProject() {
    document.getElementById('listProject').innerHTML = ''

    for(let i = 0; i < dataBlog.length; i++){
        document.getElementById('listProject').innerHTML += 
        `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${dataBlog[i].image}" alt="">
                </div>
                <div class="project-content" >
                    <h2>
                        <a href="myproject-detail.html" target="_blank">
                            ${dataBlog[i].title}
                        </a>
                    </h2>
                    <div class="duration-project">
                        <p>Durasi: <span> 1 Bulan </span></p>
                    </div>
                    <div class="description-project">
                        <p>
                            ${dataBlog[i].description}
                        </p>
                    </div>
                    <div class="technologis-project">
                        <i class="fa-brands fa-${dataBlog[i].technologis1}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis2}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis3}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis4}"></i>
                    </div>
                    <div class="btn-group">
                        <div class="btn-left">
                            <button>Edit</button>
                        </div>
                        <div class="btn-right">
                            <button class="del-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div> 
        `
    }

}

