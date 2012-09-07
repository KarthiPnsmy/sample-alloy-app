function Controller() {
    function sayHello() {
        alert("Hello Titans!!!");
    }
    function setTableData(books) {
        var data = [];
        _.each(books, function(book) {
            var args = {
                title: book.title,
                authors: book.authors,
                image: book.image
            }, row = Alloy.getController("row", args).getView();
            data.push(row);
        }), $.table.setData(data);
    }
    function searchForBooks() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                alert("this.responseText = " + this.responseText), processBookData(this.responseText);
            },
            onerror: function(e) {
                alert("Error:" + JSON.stringify(e));
            },
            timeout: 5e3
        });
        xhr.open("GET", Alloy.CFG.serverBaseUrl), xhr.send();
    }
    function processBookData(data) {
        var books = [];
        try {
            var items = JSON.parse(data).items;
        } catch (e) {
            alert("Invalid response from server. Try again.");
            return;
        }
        for (var i = 0; i < Math.min(items.length, MAX_BOOKS); i++) {
            var info = items[i].volumeInfo;
            if (!info) continue;
            var links = info.imageLinks || {}, authors = (info.authors || []).join(", ");
            books.push({
                title: info.title || "",
                authors: authors,
                image: links.smallThumbnail || links.thumbnail || "none"
            });
        }
        Ti.API.info("books data ====== " + JSON.stringify(books)), setTableData(books);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null), $.__views.win1 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Window 1",
        layout: "vertical",
        id: "win1"
    }), "Window", null), $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        text: "Label 1",
        id: "__alloyId1"
    }), "Label", $.__views.win1), $.__views.win1.add($.__views.__alloyId1), $.__views.helloBtn = A$(Ti.UI.createButton({
        top: 5,
        width: 250,
        height: 30,
        title: "Say Hello",
        id: "helloBtn"
    }), "Button", $.__views.win1), $.__views.win1.add($.__views.helloBtn), $.__views.helloBtn.on("click", sayHello), $.__views.callXhr = A$(Ti.UI.createButton({
        top: 5,
        width: 250,
        height: 30,
        title: "XHR Call",
        id: "callXhr"
    }), "Button", $.__views.win1), $.__views.win1.add($.__views.callXhr), $.__views.table = A$(Ti.UI.createTableView({
        id: "table"
    }), "TableView", $.__views.win1), $.__views.win1.add($.__views.table), $.__views.tab1 = A$(Ti.UI.createTab({
        title: "Tab 1",
        window: $.__views.win1,
        id: "tab1"
    }), "Tab", null), $.__views.index.addTab($.__views.tab1), $.__views.__alloyId3 = Alloy.getController("tabView", {
        id: "__alloyId3"
    }), $.__views.index.addTab($.__views.__alloyId3.getViewEx({
        recurse: !0
    })), $.addTopLevelView($.__views.index), _.extend($, $.__views), $.index.open(), $.callXhr.addEventListener("click", function(e) {
        alert("calling xhr"), searchForBooks();
    });
    var MAX_BOOKS = 10;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;