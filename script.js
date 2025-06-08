function buttonClick(val) {
    document.getElementById('screenId').value+= val
}

function calculatesum(){

 var value = document.getElementById("screenId").value




    try{
        document.getElementById('screenId').value = eval(value)

    }catch{
        document.getElementById('screenId').value = 'Error'
    }

}

function clearScreen() {
    document.getElementById('screenId').value=''
}