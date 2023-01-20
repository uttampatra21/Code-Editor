const main = document.querySelector('.main');
main.innerHTML = `
<div id="editor">
<div class="html">
    <i class="bi bi-filetype-html"></i>
    <div class="input">
        <textarea onkeyup="run()" name="" id="html" cols="30" rows="10"></textarea>
    </div>
</div>
<div class="css">
    <i class="bi bi-filetype-css"></i>
    <div class="input">
        <textarea onkeyup="run()" name="" id="css" cols="30" rows="10"></textarea>
    </div>
</div>
<div class="js">
    <i class="bi bi-filetype-js"></i>
    <div class="input">
        <textarea onkeyup="run()" name="" id="js" cols="30" rows="10"></textarea>    
    </div>
</div>
</div>
<div class="output">
<iframe id="output">
</iframe>
</div>
`;