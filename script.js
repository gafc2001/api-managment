document.addEventListener("DOMContentLoaded",async function(){
    const citiesSelect = document.getElementById("cities-select");
    const citiesImages = [
        {
            "city":"Lima",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Peru_-_Lima_Department_%28locator_map%29.svg/492px-Peru_-_Lima_Department_%28locator_map%29.svg.png?20090715073711"
        },
        {
            "city":"Arequipa",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Peru_-_Lima_Department_%28locator_map%29.svg/492px-Peru_-_Lima_Department_%28locator_map%29.svg.png?20090715073711"
        },
        {
            "city":"Piura",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Peru_-_Piura_Department_%28locator_map%29.svg/492px-Peru_-_Piura_Department_%28locator_map%29.svg.png?20100204194719"
        },
        {
            "city":"La Libertad",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Peru_-_La_Libertad_Department_%28locator_map%29.svg/492px-Peru_-_La_Libertad_Department_%28locator_map%29.svg.png?20100204202410"
        },
        {
            "city":"Callao",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Peru_-_Callao%2C_Constitutional_Province_of_%28locator_map%29.svg/492px-Peru_-_Callao%2C_Constitutional_Province_of_%28locator_map%29.svg.png?20090721074545"
        },
        {
            "city":"Ancash",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Peru_-_Ancash_Department_%28locator_map%29.svg/492px-Peru_-_Ancash_Department_%28locator_map%29.svg.png?20090715071457"
        },
        {
            "city":"Junin",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Peru_-_Jun%C3%ADn_Department_%28locator_map%29.svg/492px-Peru_-_Jun%C3%ADn_Department_%28locator_map%29.svg.png?20100204201226"
        },
        {
            "city":"Cusco",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Peru_-_Cuzco_Department_%28locator_map%29.svg/492px-Peru_-_Cuzco_Department_%28locator_map%29.svg.png?20100204203508"
        },
        {
            "city":"Lambayeque",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Peru_-_Lambayeque_Department_%28locator_map%29.svg/492px-Peru_-_Lambayeque_Department_%28locator_map%29.svg.png?20100204195554"
        },
        {
            "city":"Ica",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Peru_-_Ica_Department_%28locator_map%29.svg/492px-Peru_-_Ica_Department_%28locator_map%29.svg.png?20100204202415"
        },
        {
            "city":"Cajamarca",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Peru_-_Cajamarca_Department_%28locator_map%29.svg/492px-Peru_-_Cajamarca_Department_%28locator_map%29.svg.png?20100204191042"
        },
        {
            "city":"Puno",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Peru_-_Puno_Department_%28locator_map%29.svg/492px-Peru_-_Puno_Department_%28locator_map%29.svg.png?20180501192844"
        },
        {
            "city":"San Martin",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Peru_-_San_Mart%C3%ADn_Department_%28locator_map%29.svg/492px-Peru_-_San_Mart%C3%ADn_Department_%28locator_map%29.svg.png?20100204201408"
        },
        {
            "city":"Loreto",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Peru_-_Loreto_Department_%28locator_map%29.svg/492px-Peru_-_Loreto_Department_%28locator_map%29.svg.png?20180501193102"
        },
        {
            "city":"Tacna",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Peru_-_Tacna_Department_%28locator_map%29.svg/492px-Peru_-_Tacna_Department_%28locator_map%29.svg.png?20180501192548"
        },
        {
            "city":"Huanuco",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Peru_-_Hu%C3%A1nuco_Department_%28locator_map%29.svg/492px-Peru_-_Hu%C3%A1nuco_Department_%28locator_map%29.svg.png?20100204201258"
        },
        {
            "city":"Moquegua",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Peru_-_Moquegua_Department_%28locator_map%29.svg/492px-Peru_-_Moquegua_Department_%28locator_map%29.svg.png?20180501193113"
        },
        {
            "city":"Ayacucho",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Peru_-_Ayacucho_Department_%28locator_map%29.svg/492px-Peru_-_Ayacucho_Department_%28locator_map%29.svg.png?20100204192224"
        },
        {
            "city":"Amazonas",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Peru_-_Amazonas_Department_%28locator_map%29.svg/492px-Peru_-_Amazonas_Department_%28locator_map%29.svg.png?20100204192711"
        },
        {
            "city":"Ucayali",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Peru_-_Ucayali_Department_%28locator_map%29.svg/492px-Peru_-_Ucayali_Department_%28locator_map%29.svg.png?20100204203445"
        },
        {
            "city":"Apurimac",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Peru_-_Apur%C3%ADmac_Department_%28locator_map%29.svg/492px-Peru_-_Apur%C3%ADmac_Department_%28locator_map%29.svg.png?20100204192731"
        },
        {
            "city":"Tumbes",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Peru_-_Tumbes_Department_%28locator_map%29.svg/492px-Peru_-_Tumbes_Department_%28locator_map%29.svg.png?20100204194550"
        },
        {
            "city":"Huancavelica",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peru_-_Huancavelica_Department_%28locator_map%29.svg/492px-Peru_-_Huancavelica_Department_%28locator_map%29.svg.png?20100204195857"
        },
        {
            "city":"Pasco",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Peru_-_Pasco_Department_%28locator_map%29.svg/492px-Peru_-_Pasco_Department_%28locator_map%29.svg.png?20100204194826"
        },
        {
            "city":"Madre de Dios",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peru_-_Madre_de_Dios_Department_%28locator_map%29.svg/492px-Peru_-_Madre_de_Dios_Department_%28locator_map%29.svg.png?20100204195811"
        }
    ]
    citiesImages.forEach(cityItem => {
        const option = document.createElement("option");
        option.value = cityItem.city;
        option.innerHTML = cityItem.city;
        citiesSelect.appendChild(option);
    });
    let citiesData;
    const getData = async() => {
        const request = await fetch("https://servicioapigfarfan.azure-api.net/covid").then(resp => resp.json());
        citiesData = request;
    }
    const formatDate = (data) => {
        const date = new Date(data);
        return `${date.getDate()} / ${date.getMonth() + 1}/ ${date.getFullYear()}`;
    }
    const setupGeneralInfo = async() => {
        const confirmGeneral = document.getElementById("confirm-general");
        const deathGeneral = document.getElementById("death-general");
        const date = document.getElementById("date");
        const request = await fetch("https://servicioapigfarfan.azure-api.net/covid/general").then(resp => resp.json());
        confirmGeneral.innerText = request.confirmed.value;
        deathGeneral.innerText = request.deaths.value;
        date.innerText = formatDate(request.lastUpdate);
    }
    await setupGeneralInfo();
    await getData();
    const setCityInfo = (city) => {   
        const confirmed = document.getElementById("confirmed-specific");
        const deaths = document.getElementById("deaths-specific");
        const active = document.getElementById("active-specific");
        const lastCases = document.getElementById("last-cases-specific");
        const lastDeaths = document.getElementById("last-deaths-specific")
        const cityImage = document.getElementById("city-image");
        confirmed.innerText = city.confirmed;
        deaths.innerText = city.deaths;
        active.innerText = city.active;
        lastCases.innerText = city.cases28Days;
        lastDeaths.innerText = city.deaths28Days;
        cityImage.src = citiesImages.find(e=> e.city == city.provinceState).image
    }
    const filterCities = (value) => {
        const filteredCities = citiesData.find( city => city.provinceState == value);
        setCityInfo(filteredCities);
    }
    filterCities(citiesSelect.value);
    citiesSelect.addEventListener("change",function(e){
        const city = e.target.value;
        filterCities(city);
    });
    
    
})
