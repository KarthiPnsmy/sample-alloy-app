function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.row = A$(Ti.UI.createTableViewRow({
        className: "book_row",
        id: "row"
    }), "TableViewRow", null), $.addTopLevelView($.__views.row), $.__views.thumbnail = A$(Ti.UI.createImageView({
        width: "40dp",
        left: "5dp",
        top: "2dp",
        id: "thumbnail"
    }), "ImageView", $.__views.row), $.__views.row.add($.__views.thumbnail), $.__views.__alloyId5 = A$(Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId5"
    }), "View", $.__views.row), $.__views.row.add($.__views.__alloyId5), $.__views.title = A$(Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "20dp"
        },
        top: "2dp",
        height: Ti.UI.SIZE,
        left: "60dp",
        right: "5dp",
        id: "title"
    }), "Label", $.__views.__alloyId5), $.__views.__alloyId5.add($.__views.title), $.__views.authors = A$(Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: "14dp"
        },
        top: "3dp",
        bottom: "2dp",
        height: Ti.UI.SIZE,
        left: "60dp",
        right: "5dp",
        id: "authors"
    }), "Label", $.__views.__alloyId5), $.__views.__alloyId5.add($.__views.authors), _.extend($, $.__views);
    var args = arguments[0] || {};
    $.thumbnail.image = args.image, $.title.text = args.title || "", $.authors.text = args.authors || "", _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;