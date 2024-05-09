

function getInfo() {
    let charId = document.getElementById("charCapture").value


    //https://jsonplaceholder.typicode.com/posts
    let url = `https://jsonplaceholder.typicode.com/posts/${charId}`

    //let url = `https://jsonplaceholder.typicode.com/comments/${charId}`

    console.log(charId)
    console.log(url)
    fetch(url)  //Realiza la solicitud asíncrona para obtener los datos de la API.
        // Le da formato a la informacion de la API
        .then(res => res.json())    //Manipula la promesa, devolución de llamada con éxito.

        .then( data => {            // Procesa los datos

            console.log(data)   // data toma el contenido de la información de la API.
            // la variable html toma la cadena con código HTML y trae.

            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> 
                                            <b>Id del usuario:<b>
                                            ${data.userId}
                                        </h5>
                                        <p class="card-text">
                                            <h2><b>Id tema:<b>
                                            ${data.id}
                                            </h2>
                                        </p>

                                        <p class="card-text">
                                            <b>Título libro:<b>
                                            ${data.title}
                                        </p>

                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                <b>Reseña del libro:<b>
                                                ${data.body} 
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        
            document.getElementById("charContent").innerHTML = html
        })
}
            /*
            document.getElementById("charContent").innerHTML = html
            Método obtiene el primer elemento del documento HTML que tiene el ID “charContent”. 
            Si no existe ningún elemento con ese ID, este método devuelve null.
            */



