var ExampleImage = function (imageContainer) {
    this._container = imageContainer;
};

ExampleImage.prototype = {
    _onTextSelect : function (evt) {
        evt.currentTarget.focus();
        evt.currentTarget.select();
    },
    appendTo : function (el) {
        this._container.getCssDeclaration(function (css) {
            var li = document.createElement('li'),
                preview = document.createElement('div'),
                cssObject = css.toObject(),
                cssString = css.toString(),
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
            content += '<div><textarea rows="7" cols="60">' + cssString + '</textarea> </div>';

            li.innerHTML = content;

            li.querySelector('.preview').appendChild(preview);
            li.querySelector('textarea').addEventListener('click', this._onTextSelect.bind(this));

            el.appendChild(li);

        }.bind(this));
    }
};