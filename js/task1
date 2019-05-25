let DATA_URL = "https://jsonplaceholder.typicode.com";
let provider = new Provider();

function Provider() {
    this.cachedData = {};
    this.showItem = initTodoItem;
}

function initTodoItem(id, callback) {
    if (!id || !callback || !callback instanceof Function) {
        return;
    }

    if (this.cachedData[id]) {
        callback(this.cachedData[id]);
        return;
    }

    dataService.getItemById(id, callback).then(
        result => {
            callback(result.title);
            this.cachedData[id] = result.title;
        },
        error => {
            console.log("Something went wrong.");
        }
    );
}

let dataService = {
    getItemById: function (id) {
        return new Promise(function (resolve, reject) {
            fetch(DATA_URL + "/todos/" + id)
                .then(response => response.json())
                .then(json => resolve(json));
        });
    }
};

function runLogic() {
    let itemIdInput = document.getElementById("itemId");
    if (itemIdInput && itemIdInput.value && Number.isInteger(+itemIdInput.value)) {
       provider = provider || new Provider();
       provider.showItem(+itemIdInput.value, console.log);
    } else {
        console.log("wrong input");
    }
}

function resetProvider() {
    provider = new Provider();
}