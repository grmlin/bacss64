var ImageContainer = function (file) {
    this._file = file;
};

ImageContainer.prototype = {
    getBase64Url : function (callback) {
        var reader = new FileReader();
        reader.readAsDataURL(this._file);
        reader.onload = function (e) {
            callback.call(null, e.target.result);
        }.bind(this);

    },
    getCssDeclaration : function (callback) {
        var name = this._file.name.match(/(.+?)(\.[^.]*$|$)/)[1];

        this.getBase64Url(function (url) {
            var image = new Image();
            image.onload = function () {
                callback.call(null, new CssDeclaration(name, image.width, image.height, url));
            }.bind(this);
            image.src = url;

        }.bind(this));

    }
}
;