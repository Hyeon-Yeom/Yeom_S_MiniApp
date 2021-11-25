(() => {

    const   theModels = document.querySelector("#productSection"),
            theTemplates = document.querySelector("#car-models").content;


    //Fetch Statement
    function getData() {

        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                buildCarInfos(data);
            })

        // .catch(error => console.error(error));
    }

    function buildCarInfos(info) {

        const theCars = Object.keys(info);

        theCars.forEach(car => {
            let panel = theTemplates.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${info[car].carImg}`;

            containers[1].textContent = info[car].model;
            containers[2].textContent = info[car].price;
            containers[3].textContent = info[car].description;

            theModels.appendChild(panel);
            
        });
    }

    getData();
})();