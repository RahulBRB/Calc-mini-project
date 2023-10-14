const addInput = (value) => {
    const input = document.getElementById('in_out');
    input.value += value ;
}

const clearInput = () => {
    const input = document.getElementById('in_out');
    input.value = '';
}

const result = () => {
    const input = document.getElementById('in_out');
    input.value = eval(input.value);
}