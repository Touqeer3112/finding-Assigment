function word() {
    var result = document.getElementById('new');
    var para = document.getElementById('para').innerHTML;
    
    var input = document.getElementById('input');
    for (var i =0; i < para.length ; i++){
        if (para.slice(i, i + 4) === input.value){
            result.innerHTML = para.slice(i , i+4);
        }
    }
}
