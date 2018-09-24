var wordList = [];
var x;
window.addEventListener('keyup', function (event) {
    event.preventDefault();

    if (event.keyCode === 13) {
        x = document.getElementById('button').value;
        if (x != ''){
            wordList.push(x);
            document.getElementById('button').value = '';
            document.getElementById('list').innerHTML = wordList.join(', ');
        }
        else{
            this.alert('Must be an item!');
        }
    }
})
window.onload = function sortList() {
    document.getElementById('work').onclick = function(){
        wordList.sort();
        document.getElementById('list').innerHTML = wordList.join(', ')
    }
}
