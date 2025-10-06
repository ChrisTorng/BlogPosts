document.addEventListener('paste', e => {
    e.preventDefault();
    var mode = document.querySelector('input[name="mode"]:checked').value;
    var text = e.clipboardData.getData('text/plain');
    
    if (mode === 'removeTitle') {
        removeTitleFromLinks(text);
    } else {
        splitLinks(text);
    }
});

// Remove title attribute from markdown links using RegEx
function removeTitleFromLinks(inputText) {
    var result = inputText.replace(/(\[[^\]]+\]\([^"\)]+)(?:\s+"[^"]*")(\))/g, '$1$2');
    document.getElementById('result').innerText = result;
}

// Generate HTML <a href> from markdown links []() and split into multiple lines
function splitLinks(inputText) {
    var lines = inputText.split('\n');
    var result = '';

    lines.forEach(function(line) {
        var match = line.match(/\[(.*?)\]\((.*?)\) (.*)/);
        if (match) {
            result += `${match[1]}
<a href="${match[2]}" target="_blank">${match[2]}</a>
${match[3]}
`;
        } else {
            result += line;
        }
    });

    document.getElementById('result').innerHTML = result;
}

document.getElementById('copy').addEventListener('click', e => {
    e.preventDefault();
    var text = document.getElementById('result').innerText;
    navigator.clipboard.writeText(text)
});
