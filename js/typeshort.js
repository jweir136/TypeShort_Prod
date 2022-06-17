function setCursor(pos) {
    let el = document.getElementById("editor");
    let range = document.createRange();
    let sel = window.getSelection();

    range.setStart(el.childNodes[0], pos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
}

var results = [];

$(document).ready(function() {
    $("#editor").bind("input propertychange", function() {
        let text = document.getElementById("editor").textContent;
        let limit = 10;

        if (true){//text[text.length - 1] == '.' || text[text.length - 1] == '?' || text[text.length - 1] == '!') {
            let newtext;        
            for (var input_phrase in data) {
                if (text.includes(input_phrase)) {
                    text = text.replace(input_phrase, data[input_phrase]);
                    results.push(text);

                    setCursor(document.getElementById('editor').textContent.length);
                    if (results.length > 0) {
                        document.getElementById("editor").textContent = results[results.length - 1];
                        setCursor(document.getElementById('editor').textContent.length);
                    }

                    console.log(results);

                }
            }

            
            /*
            if (results.length == 1) {
                document.getElementById("editor").textContent = results[0];
                setCursor(document.getElementById("editor").textContent.length);
            } else if (results.length % 2 == 0) {
                document.getElementById("editor").textContent = results[results.length / 2];
                setCursor(document.getElementById("editor").textContent.length);
            } else if (results.length % 2 == 1) {
                document.getElementById("editor").textContent = results[Math.floor(results.length / 2) + 1];
                setCursor(document.getElementById("editor").textContent.length);
            } else {
                document.getElementById("editor").textContent = results[0];
                setCursor(document.getElementById("editor").textContent.length);
            }
            */
        }
    });
});