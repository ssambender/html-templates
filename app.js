const topHalf = document.getElementById('topHalf');
const resizer = document.getElementById('resizer');
const bottomHalf = document.getElementById('bottomHalf');

let isResizing = false;

resizer.addEventListener('mousedown', function(e) {
    isResizing = true;
    document.body.style.cursor = 'row-resize';
});

document.addEventListener('mousemove', function(e) {
    if (!isResizing) return;
    let newHeight = e.clientY;
    let totalHeight = window.innerHeight;

    if (newHeight > 0 && newHeight < totalHeight) {
        topHalf.style.height = newHeight + 'px';
        bottomHalf.style.height = (totalHeight - newHeight) + 'px';
    }
});

document.addEventListener('mouseup', function(e) {
    isResizing = false;
    document.body.style.cursor = 'default';
});
