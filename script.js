function calTOFar(){
    event.preventDefault()
        let x = document.getElementById("inp1").value
        let result = (x * 9 / 5) + 32
        document.getElementById("out1").value = result
}
function calToKel() {
    event.preventDefault()
    let x = document.getElementById("inp2").value
    let result = parseFloat(x) + parseFloat(273.15)
    document.getElementById("out2").value = result
    }