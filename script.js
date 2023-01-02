const container = document.querySelector('#container');
const reset = document.querySelector('#resetButton');
const title = document.querySelector('.title');
const footer = document.querySelector('.footer');
const rainbow = document.querySelector('#rainbowButton');
const black = document.querySelector('#blackButton');
const site = document.querySelector('html');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';
container.style.border = '1px solid black';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

title.style.textAlign = 'center';
container.style.margin = 'auto';

footer.style.textAlign = 'center';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.flexDirection = 'column';

title.style.fontSize = '50px';
title.style.fontFamily = 'roboto';
title.style.fontWeight = 'bold';


rainbow.addEventListener('click', () => {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
        )
    }
    )
}
)

black.addEventListener('click', () => {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        }
        )
    }
    )
}
)

let mouse_over_count = 0;


function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.border = '0';
        div.style.flexWrap = 'wrap';
        div.classList.add('grid');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        }
        )
        div.addEventListener('mouseover', () => {
            if (mouse_over_count % 25 == 0) {
                rainbow.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                title.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
            mouse_over_count++;
            console.log(mouse_over_count);
        }
        )
        container.appendChild(div);
    }
}

createGrid();


reset.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid()
});



const grid = document.querySelectorAll('.grid');
grid.forEach((grid) => {
    grid.addEventListener('onmouseover', () => {
        grid.style.backgroundColor = 'black';
    }
    )
});



