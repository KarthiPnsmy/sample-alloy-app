function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.__alloyId6 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "required",
        id: "__alloyId6"
    }), "Window", null), $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        text: "This is a required tab",
        id: "__alloyId7"
    }), "Label", $.__views.__alloyId6), $.__views.__alloyId6.add($.__views.__alloyId7), $.__views.tabView = A$(Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "required",
        id: "tabView"
    }), "Tab", null), $.addTopLevelView($.__views.tabView), _.extend($, $.__views), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;