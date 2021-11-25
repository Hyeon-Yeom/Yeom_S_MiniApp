(() => {

    //Fetch Statement
    function getData() {
        // retrieve my data object
        fetch("./data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
    }

    getData();
})();