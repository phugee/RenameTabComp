({  
    handleRecordUpdated: function (component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.isConsoleNavigation().then(function (result) {
            if (result) {
                workspaceAPI.getFocusedTabInfo().then(function (result) {
                    var record = component.get("v.recordData");
                    var selectedField = component.get("v.selectedField");

                    workspaceAPI.setTabLabel(
                        { 
                            tabId: result.tabId, 
                            label: record[selectedField]
                        }).then(function (result) {
                    }, function (err) {
                        console.log('onRender.setTabLabel.err', err); // Error: "It broke"
                    });
                }, function (err) {
                    console.log('onRender.getFocusedTabInfo.err', err); // Error: "It broke"
                });        
            }
        }, function(err) {
            console.log('onRender.isConsoleNavigation.err', err);
        });
    }     
})
