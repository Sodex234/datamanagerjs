const read = require("read-data");

function loadPanelInfo() {
    console.log(__dirname + "/panel/pageindex.json");
    
    var pageIndex = read.sync("../panel/pageindex.json");
    
    return pageIndex;
}

module.exports.loadPanelInfo = loadPanelInfo;