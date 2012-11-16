var ImageContainer = function (file) {
    this._file = file;
};

ImageContainer.prototype = {
    _getSvgString : function (svgXml) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(svgXml, "text/xml");
        var serializer = new XMLSerializer();
        var svg = serializer.serializeToString(xmlDoc.querySelector('svg'));
        return svg;
    },
    getBase64Url : function (callback) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var svg = this._getSvgString(e.target.result),
                base64 = Base64.encode(svg);
            callback.call(null, "data:" + this._file.type + ";base64," + base64);
        }.bind(this);

        reader.readAsText(this._file);
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
};