document.getElementById("button").onclick = function() {
    key = document.getElementById("input").value;
    message = document.getElementById("secret_message").value;
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    var  new_alphabet = alphabet.slice();

    appendage = new_alphabet.splice(0, key);
    for (x in appendage){
        new_alphabet.push(appendage[x]);
    }

    var decoded_message = [];
    for (y in message){
        connection_value = new_alphabet.indexOf(message[y]);
        decoded_message.push(alphabet[connection_value]);
    }
    document.getElementById("output").innerHTML = decoded_message.join("");
}