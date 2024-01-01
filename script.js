document.addEventListener('paste', e => {
    e.preventDefault();
    splitLinks(e.clipboardData.getData('text/plain'))
});

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
