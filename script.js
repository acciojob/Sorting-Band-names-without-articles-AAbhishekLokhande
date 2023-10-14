// //your code here
// let arr = [abhi, the king, a kind man,];
// let f = function sorting(elements, index,arrlist) {
// 	if()
// }
// arr.foreach(f)
let band = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function sortBandNames(band) {
    const articles = ['a', 'an', 'the'];
    const sortedBands = band.slice().sort((a, b) => {
        const nameA = a.replace(/^(a |an |the )/i, '');
        const nameB = b.replace(/^(a |an |the )/i, '');
        return nameA.localeCompare(nameB);
    });

    const ul = document.createElement('ul');
    ul.setAttribute('id', 'band');

    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(band));
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

sortBandNames(band);
