({
    onInit : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var sObjectName = component.get("v.sObjectName");
        console.log('onInit.recordId', recordId);
        console.log('onInit.sObjectName', sObjectName);
        var record = component.get("v.recordData");
        console.log('onInit.record', record);//no record is loaded
    },

    onRender: function (component, event, helper) {
        var recordId = component.get("v.recordId");
        var sObjectName = component.get("v.sObjectName");
        console.log('onRender.recordId', recordId);
        console.log('onRender.sObjectName', sObjectName);

        var record = component.get("v.recordData");
        var selectedField = component.get("v.selectedField");

        console.log('onRender.record', record);
        console.log('onRender.selectedField', selectedField);

        var workspaceAPI = component.find("workspace");
        workspaceAPI.isConsoleNavigation().then(function (result) {
            console.log('onRender.isConsoleNavigation', result);
            if (result) {
                workspaceAPI.getFocusedTabInfo().then(function (result) {
                    //console.log('onRender.result.tabId', result.tabId); // "Stuff worked!"
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
