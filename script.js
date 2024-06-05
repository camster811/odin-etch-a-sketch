const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = `1632px`;
container.style.height = "1632px";


for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.border = "solid";
    div.style.borderWidth = "1px";
    div.style.width = "100px";
    div.style.height = "100px";
    container.appendChild(div)

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "yellow";
    });
}

