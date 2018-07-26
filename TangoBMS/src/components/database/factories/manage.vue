<template>
    <div class="content">
        <div class="row">
                <div class="col-md-12">
                    <div class="hpanel">
                        <div class="panel-body">
                            <div class="row">
                                <form role="form" name="add_factory_form">
                                    <div class="field-box col-md-12">
                                        <div class="field-box-title"><h4>Factory's Information</h4></div>
                                        <div class="row">
                                            <div class="form-group col-md-2 col-sm-2">
                                                <label class="col-md-12">Factory Ref. No.:</label>
                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="ReferenceNumber">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-4 col-sm-4">
                                                <label class="col-md-12">Factory Name<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="factory_name"  required maxlength="50">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3">
                                                <label class="col-md-12">Point of Contact<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="contact_person" required maxlength="30">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3">
                                                <label class="col-md-12">Designation<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="designation" required maxlength="30">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 col-sm-6 clear-l">
                                                <label class="col-md-12">Email<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="email" class="form-control" name="email" validemail required maxlength="70">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3 p-r0">
                                                <label class="col-md-12">Contact Number<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <div class="col-md-5 p-lr0">
                                                        <select name="countryCode" class="form-control">
                                                            <option value="">Code</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <input type="text" class="form-control" name="contact_number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field-box col-md-12">
                                        <div class="field-box-title"><h4>Factory Address</h4></div>
                                        <div class="row">
                                            <div class="form-group col-md-6 col-sm-6">
                                                <label class="col-md-12">Address Line 1<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <textarea class="form-control" required name="addressline1"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 col-sm-6">
                                                <label class="col-md-12">Address Line 2:</label>
                                                <div class="col-md-12">
                                                    <textarea class="form-control" name="addressline2"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-3 col-sm-3 clear-l">
                                                <label class="col-md-12">Country<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <select name="country" class="form-control">
                                                        <option value="">Select Country</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3">
                                                <label class="col-md-12">State/County<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="text" class="form-control">                                            
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3">
                                                <label class="col-md-12">City<span class="error">*</span>:</label>
                                                <div class="col-md-12">
                                                    <input type="text" name="city" class="form-control" maxlength="30">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-3 col-sm-3">
                                                <label class="col-md-12">Zip/Post Code<span class="error">*</span>:</label>
                                                <div class="col-md-6">
                                                <input type="text" class="form-control" name="zipcode" maxlength="7"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="button-block right col-md-12">
                                        <button title="Save" type="submit" class="btn btn-primary btn-mrn"><i class="fa fa-save"></i>Save</button>
                                        <button title="Cancel" type="button" ui-sref="database.factories" class="btn btn-primary btn-mrn"><i class="fa fa-times"></i>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
 </template>