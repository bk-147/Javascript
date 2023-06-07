function clearOutputScreen() {
    document.getElementById('result').value = ''
    screen.text = ''
}
function display(x) {
    document.getElementById('result').value += x
}
function calculate() {
    let input = document.getElementById('result').value
    let output = eval(input)
    document.getElementById('result').value = output
}
