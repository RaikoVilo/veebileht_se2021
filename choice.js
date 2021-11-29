function sorting(sortingalgorithm) {
    var temp = "<iframe class ='sortingstyle'  src='" + sortingalgorithm + "/index.html' width='638' height='414' frameBorder='0'>Browser not compatible.</iframe>";
    document.getElementById("sorting").innerHTML = temp;

    fetch(sortingalgorithm+'/description.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("descriptiontext").innerHTML = data;
        });
}
