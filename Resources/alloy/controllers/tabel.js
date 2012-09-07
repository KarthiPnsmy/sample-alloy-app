function Controller() {
    function openModalDialog(e) {
        Ti.API.info(" openModalDialog " + JSON.stringify(e.source)), $.login.setLeftNavButton($.login_cancel), $.login.open({
            modal: !0
        });
    }
    function closeModalDialog(e) {
        Ti.API.info(" closeModalDialog " + JSON.stringify(e.source)), $.login.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    exports.index = function(_tab) {
        _tab.open($.win2);
    }, $.__views.win2 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        tabBarHidden: !0,
        title: "Window 2",
        layout: "vertical",
        id: "win2"
    }), "Window", null), $.addTopLevelView($.__views.win2), $.__views.__alloyId6 = A$(Ti.UI.createLabel({
        text: "Window Two",
        top: "20",
        id: "__alloyId6"
    }), "Label", $.__views.win2), $.__views.win2.add($.__views.__alloyId6), $.__views.nextWindowBtn = A$(Ti.UI.createButton({
        title: "Open Modal",
        id: "nextWindowBtn",
        top: "20"
    }), "Button", $.__views.win2), $.__views.win2.add($.__views.nextWindowBtn), $.__views.nextWindowBtn.on("click", openModalDialog), $.__views.login = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        tabBarHidden: !0,
        id: "login"
    }), "Window", null), $.addTopLevelView($.__views.login), $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        text: "Login Window",
        top: "20",
        id: "__alloyId7"
    }), "Label", $.__views.login), $.__views.login.add($.__views.__alloyId7), $.__views.login_cancel = A$(Ti.UI.createButton({
        title: "Cancel",
        id: "login_cancel"
    }), "Button", null), $.addTopLevelView($.__views.login_cancel), $.__views.login_cancel.on("click", closeModalDialog), _.extend($, $.__views), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;