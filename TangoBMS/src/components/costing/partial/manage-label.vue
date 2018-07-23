<template>
<div class="modal-header">
    <button type="button" class="close" ng-click="csCtrl.closeModel()" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="modal-title" id="myModalLabel">Add New Label</h4>
</div>
<div class="modal-body add-customer-label">
    <div class="row">
        <form role="form" name="add_customer_label_form" novalidate="novalidate"
              ng-submit="csCtrl.addExtraLabelsToForm(add_customer_label_form);"
               validate-on-form-submit="true">
            <div class="form-inline">
                <div class="row">
                    <div class="form-group col-md-12 col-sm-12 m-b20">
                        Select number of text boxes want to add
                        <select class="form-control" ng-model="csCtrl.TotalExtraLabelToAdd">
                            <option value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                        </select>
                        <button class="btn btn-primary btn-mrn m-l10" type="button" title="Add Label & Text box" ng-click="csCtrl.addExtraFields()"><i class="fa fa-plus-circle"></i> Add Label & Text box</button>
                    </div>

                    <div class="form-group col-md-12 col-sm-12 m-b20" ng-repeat="labelObject in csCtrl.extraLabels">
                        <input type="text" class="form-control" ng-model="labelObject.LabelName" name="label" required>
                        <button class="btn btn-primary" type="button" title="Remove Label" ng-click="csCtrl.removeExtraLabelsToForm(labelObject)">
                            <i aria-hidden="true" class="fa fa-trash-o m-r0"></i>
                        </button>
                    </div>
                    <div class="button-block right col-md-12">
                        <button title="Done" type="submit" class="btn btn-primary btn-mrn">
                            <i class="fa fa-save"></i>Done
                        </button>
                        <button title="Close" type="button" ng-click="csCtrl.closeModel()" class="btn btn-primary m-r5">
                            <i aria-hidden="true" class="fa fa-close"></i>Close
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

</template>