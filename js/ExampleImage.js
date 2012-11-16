var ExampleImage = function (imageContainer) {
    this._container = imageContainer;
};

ExampleImage.prototype = {
    appendTo : function (el) {
        this._container.getCssDeclaration(function (css) {
            var li = document.createElement('li'),
                preview = document.createElement('div'),
                cssObject = css.toObject(),
                content = "",
                style;

            for (style in cssObject) {
                try {
                    preview.style[style] = cssObject[style];
                } catch (e) {
                    //
                }
            }
            content += '<div class="preview"></div>';

            content += '<div><textarea rows="5" cols="60">' + css.toString() + '</textarea> </div>';
            li.innerHTML = content;

            li.querySelector('.preview').appendChild(preview);
            el.appendChild(li);

        });
    }
};