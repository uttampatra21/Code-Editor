const run = () => {
    let html = document.querySelector("#html").value;
    let css = document.querySelector("#css").value;
    let js = document.querySelector("#js").value;
    let output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>";
    output.contentWindow.eval(js);
}