function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to check if input starts with 'pet_' and is followed by alphanumeric characters
    let regex = /^pet_(19|20)\d{2}[A-Z][a-zA-Z0-9]+$/.test(input);

    if (regex) {
        result = 'Valid Syntax ';
    } else {
        result = 'Invalid Syntax 🔴';
    }

    document.getElementById('result').innerText = result;
}