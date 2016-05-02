// var url = 'https://api.github.com/KloseD/Geist/tree/master';
// var url = 'https://api.github.com/repos/KloseD/Geist/branches/master';

var url = 'https://api.github.com/repos/KloseD/Geist/contents/core/index.js';
// var url = 'https://api.github.com/repos/KloseD/Geist/contents';
// var url = 'https://api.github.com/repos/KloseD/Geist';
// var url = 'https://api.github.com/users/KloseD/repos';
// var url = 'https://raw.githubusercontent.com/KloseD/Geist/master/README.md';

$.get(url, onSuccess);

function onSuccess (result) {
    console.log(atob(result.content));
}