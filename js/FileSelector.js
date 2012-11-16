var FileSelector = function (fileInput) {
    this.fileInput = fileInput;
    this._fileContainer = [];

    this.fileInput.addEventListener("change", this._onFileChange.bind(this));
};

FileSelector.prototype = {
    _onFileChange : function (evt) {
        var files = this.fileInput.files,
            i,
            l = files.length;
        this._fileContainer = []; //reset files on change

        for (i = 0; i < l; i += 1) {
            this._addFile(files[i]);
        }

        this.onChange(this._fileContainer);

    },
    _addFile : function (file) {
        if (file.type.match('image.*')) {
            this._fileContainer.push(new ImageContainer(file));
        }
    },
    onChange : function () {
    }
};