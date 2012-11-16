var CssDeclaration = function (name, width, height, url) {
    this._name = name;
    this._width = width;
    this._height = height;
    this._url = url;
    
    this.url = url;
};

CssDeclaration.prototype = {
    toObject : function () {
        return {
            width : this._width + "px",
            height : this._height + "px",
            backgroundSize : "containt",
            backgroundRepeat : "no-repeat",
            backgroundImage : 'url("' + this._url + '")'
        }
    },
    toString : function () {
        return '.' + this._name + ' {\n' +
            '  width: ' + this._width + 'px;\n' +
            '  height: ' + this._height + 'px;\n' +
            '  background-size: contain;\n' +
            '  background-repeat: no-repeat;\n' +
            '  background-image: url("' + this._url + '");\n' +
            '}';
    }
};