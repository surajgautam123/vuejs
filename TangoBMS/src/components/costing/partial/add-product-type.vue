<template>
<div class="modal-header">
    <button type="button" class="close" ng-click="csCtrl.closeModel()" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="modal-title" id="myModalLabel">Add New Product Type</h4>
</div>
<div class="modal-body">
    <div class="row">
        <div class="col-md-12">
            <form role="form" name="add_product_type_form" novalidate="novalidate"
                  ng-submit="csCtrl.createProductType(add_product_type_form);"
                  validate-on-form-submit="true">
                <div class="form-group col-md-6 col-sm-6">
                    <label class="col-md-12">Product Type<span class="error">*</span>:</label>
                    <div class="col-md-12 p-r0">
                        <input type="text" class="form-control" ng-model="csCtrl.ProductType" name="name" required>
                    </div>
                </div>
                <div class="text-right col-md-12">
                    <button title="Save" type="submit" class="btn btn-primary btn-mrn">
                        <i class="fa fa-save"></i>Save
                    </button>
                    <button title="Cancel" type="reset" ng-click="csCtrl.closeModel()" class="btn btn-primary btn-mrn"><i class="fa fa-times"></i>Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>