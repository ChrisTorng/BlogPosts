function splitLinks() {
    var inputText = document.getElementById('inputText').value;
    var lines = inputText.split('\n');
    var result = '';

    lines.forEach(function(line) {
        var match = line.match(/\[(.*?)\]\((.*?)\) (.*)/);
        if (match) {
            result += match[1] + '\n' + match[2] + '\n' + match[3] + '\n\n';
        } else {
            // 保留原有的空行和非連結文本
            result += line + '\n';
        }
    });

    document.getElementById('result').textContent = result;
}
