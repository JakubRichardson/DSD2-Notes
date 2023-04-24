const tile = document.querySelector("td.data");
const tileWidth = tile.offsetHeight;
const tileHeight = tile.offsetWidth;

const boxes = document.querySelectorAll('td[data-width]');
const boxSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--box-size'));

function setBoxSize(box) {
    const widthCols = parseInt(box.dataset.width);
    const heightCols = parseInt(box.dataset.height);
    const newWidth = (widthCols + boxSize - 1) * tile.offsetWidth;
    const newHeight = (heightCols + boxSize - 1) * tile.offsetHeight;
    box.style.width = `${newWidth}px`;
    box.style.height = `${newHeight}px`;
}

function setBoxPosition(box) {
    const position = parseInt(box.dataset.position);
    const column = position % 4 + 1;
    const row = Math.floor(position / 4) + 1;
    const newLeftPosition = (column + ((1 - boxSize) / 2)) * (tileWidth);
    const newTopPosition = (row + ((1 - boxSize) / 2)) * (tileHeight);
    box.style.left = `${newLeftPosition}px`;
    box.style.top = `${newTopPosition}px`;
}


boxes.forEach(box => {
    setBoxSize(box);
    setBoxPosition(box);
});
