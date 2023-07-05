function funCalculator(event) {
    let buttons = event.target.innerHTML;
    const displayBox = document.querySelector('.displayBox');

    if (buttons === '=') {
        displayBox.innerHTML = eval(displayBox.innerHTML);
    } else if (buttons === 'C') {
        displayBox.innerHTML = '';
    } else if (buttons === 'D') {
        displayBox.innerHTML = displayBox.innerHTML.slice(0, -1);
    } else {
        displayBox.innerHTML += buttons;
    }
}