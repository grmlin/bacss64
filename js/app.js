window.addEventListener('load', function () {
    var fileSelector = new FileSelector(document.getElementById('source-select'));
    fileSelector.onChange = function (containers) {
        containers.forEach(function (container) {
            console.dir(container)
            var img = new ExampleImage(container);
            img.appendTo(document.querySelector('#examples ul'));
        }, this);
    };
});