let initialNum = 0
let finalNum = 10 

function teste(){
    alert('O teste funcionou')
}
async function getNews(){
    
    let genNews = document.getElementById('main')

    let request = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/')
     request = request.data.items.slice(initialNum, finalNum)

    request.forEach(element => {
        const genDiv = document.createElement("div");
        const genH2 = document.createElement("h2")
        const genP = document.createElement("p")
        const genButton = document.createElement("button")
        const genA = document.createElement("a")


        genH2.innerHTML = element.titulo
        genP.innerHTML = element.introducao
        genA.href = element.link
        genButton.innerHTML = "Saiba Mais"

        genDiv.appendChild(genH2).classList.add("titleNews")
        genDiv.appendChild(genP).classList.add("introductingNews")
        genA.appendChild(genButton).classList.add("buttons")
        genDiv.appendChild(genA)


        genNews.appendChild(genDiv).classList.add("newsCard") //gerando todo o HTML

    });


    console.log(main)
}

function moreNews(){
    initialNum = initialNum + 10
    finalNum = finalNum + 10 


    getNews()
}