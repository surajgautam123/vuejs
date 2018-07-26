<template>
<div>
    <div class="row">
        <div class="col-md-12">
            <div class="hpanel">
                <div class="panel-body">
                    <div class="row">
                        <form name="form_costing" id="CostingForm">
                            <div class="field-box col-md-12">
                                <div class="field-box-title">
                                    <h4>Details</h4>
                                </div>
                                <div class="required-input m-r10">*Mandatory field</div>
                                <i class="clear"></i>
                                <div class="row">
                                    <div class="form-group col-md-2 col-sm-3">
                                        <label class="col-md-12">
                                            Date<span class="error">*</span>:
                                        </label>
                                        <div class="col-md-12">
                                            <p class="input-group">
                                                <input type="text" id="styleDate" readonly="readonly" class="form-control" uib-datepicker-popup="dd-MMM-yy" show-weeks="false" close-text="Close" />
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-default">
                                                        <i class="glyphicon glyphicon-calendar"></i>
                                                    </button>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-3">
                                        <label class="col-md-12">
                                            Style Number<span class="error">*</span>:
                                        </label>
                                        <div class="col-md-12">
                                            <input class="form-control" id="styleNumber" type="text" maxlength="100" />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">
                                            Agent/Sales Person<span class="error">*</span>:
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" id="agentSalesPerson" name="agent">
                                                <option value="">Select Employee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-2">
                                        <label class="col-md-12">
                                            Product Type:
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" name="Gender">
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-3">
                                        <label class="col-md-12">
                                            Gauge (GG/GSM):
                                        </label>
                                        <div class="col-md-12">
                                            <input class="form-control" type="text" maxlength="100">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 col-sm-4 clear-l">
                                        <label class="col-md-12">
                                            Composition:
                                        </label>
                                        <div class="col-md-12">
                                            <input class="form-control" type="text" maxlength="100">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">Weight of Garment (in Kgs)<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" id="weightOfGarment" class="form-control" maxlength="10">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 col-sm-4">
                                        <label class="col-md-12">
                                            Style Picture:
                                        </label>
                                        <div class="col-md-12">
                                            <input type="file" class="form-control" >
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6 clear-l">
                                        <label class="col-md-12">Customer's Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select class="form-control" id="CustomerCountry" name="CustomerCountry">
                                                <option value="">Customer Country</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">Select Customer<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select class="form-control" name="UserName" id="UserName">
                                                <option value="">Select Customer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--<i class="clear"></i>-->
                                    <div class="description-section cst-description">
                                        <div class="form-group col-md-4 col-sm-4">
                                            <label class="col-md-12">
                                                Garment Description<span class="error">*</span>:
                                            </label>
                                            <div class="col-md-12">
                                                <textarea class="form-control" id="garmentDescription"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-2 col-sm-2 m-t20">
                                            <label class="small-text col-md-12">
                                                <input type="checkbox">
                                                <span>Get Yarn Section</span>
                                            </label>
                                        </div>
                                        <div class="col-md-12 table-responsive">
                                            <div class="col-md-12">
                                                <label>
                                                    <span class="p-t10 ">Yarn Section:</span>
                                                </label>
                                                <button class="btn btn-primary btn-mrn btn-sm m-b0 pull-right" title="Add More" type="button">
                                                    <i class="fa fa-plus-circle">
                                                    </i> Add More
                                                </button>
                                            </div>
                                            <div class="col-md-12">
                                                <table class="table table-bordered table-hover" show-filter="false" width="50%">
                                                    <tr>
                                                        <td title="'Yarn Name'" width="15%" class="form-group">
                                                            <input type="text" class="form-control" name="YarnName" id="txtYarnName">
                                                        </td>
                                                        <td title="'No. of Ends'" width="10%" class="form-group">
                                                            <input type="text" class="form-control" name="NoOfEnds" id="txtNoOfEnds">
                                                        </td>
                                                        <td title="'Yarn Consumption/unit (in Kgs)'" align="center" class="form-group">
                                                            <input type="text" class="form-control" name="YarnConsumptionPerUnit" id="txtYarnConsumptionPerUnit">
                                                        </td>
                                                        <td title="'Yarn Price / Kg'" class="form-group" align="center">
                                                            <div class="form-inline w100-pr">
                                                                <select class="form-control w80 p-lr5 m-r5">
                                                                    <option value="GBP">GBP</option>
                                                                    <option value="EURO">EURO</option>
                                                                    <option value="USD">USD</option>
                                                                </select>
                                                                <input type="text" class="form-control w80 p-lr5" name="Price">
                                                            </div>
                                                        </td>
                                                        <td title="'Total Yarn Price'" valign="middle" align="center" width="10%" nowrap="true">
                                                            Total Yarn Price
                                                        </td>
                                                        <td class="form-group" align="center">
                                                            <button title="'Remove Row'" class="btn btn-primary btn-mrn">
                                                                <i class="fa fa-trash-o m-r0"> </i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="9">
                                                            <span>No records available</span>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <i class="clear"></i>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Gross Weight of the Yarn:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Total Yarn Price:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Knitting Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0 clear-l">
                                                    <label class="col-md-12 p-l0">Mockup Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Packaging Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Other Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <i class="clear"></i>
                                        <div class="form-group col-md-12 col-sm-12 m-t20">
                                            <div class="col-md-12">
                                                <div class="row total-value">
                                                    <h2 class="col-md-4">Lowest Quote</h2>
                                                    <h5 class="col-md-8">
                                                        <span class="pull-left ammount-section m-b15">
                                                            &#163; csCtrl.lowestQuoteFactory.TotalPrice
                                                        </span>
                                                        <span class="victory-miles">csCtrl.lowestQuoteFactory.FactoryName</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.description-section -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <div class="col-md-12 p-b20">
                                <div class="row">
                                    <p class="col-md-12 massage-note"><strong>Note:</strong> Please select Country and then its associated Factory for quoting.</p><i class="clear"></i>
                                    <div class="form-group col-md-4 col-sm-4 p-lr0">
                                        <label class="col-md-12">Select Factory Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select name="country" class="form-control">
                                                <option value="">Select Country</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-5 col-sm-5 p-l0">
                                        <label class="col-md-12">Select Factory<span class="error">*</span>:</label>
                                        <div class="col-md-10">
                                            <select name="selectedFactoryForOptions>
                                                <option value="">Select Factory</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2"><button class="btn btn-primary m-r5" title="Add Factory"><i class="fa fa-plus-circle"></i> Add Factory</button></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-6 m-b30">
                                        <label>Exchange Rate:</label><i class="clear"></i>
                                        <div class="form-inline">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="input-group">
                                                        <div class="input-group-addon addon-highlight">1 GBP =</div>
                                                        <input type="number" class="form-control" maxlength="6">
                                                        <div class="input-group-addon addon-highlight">EURO</div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="input-group">
                                                        <div class="input-group-addon addon-highlight">1 GBP =</div>
                                                        <input type="number" class="form-control" maxlength="6">
                                                        <div class="input-group-addon addon-highlight">USD</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="costing-tab-panel hpanel col-md-12 horizontal-tab horizontal-tab-costing">
                                <div id="tabSet">
                                    <div class="uib-tab" title="factory FactoryName" active="$index===csCtrl.currentindex">
                                        <div class="uib-tab-heading">
                                            <div class="tooltip tooltip-common">
                                                <span aria-hidden="true">factory.FactoryName</span>
                                                <span class="tooltiptext tooltip-top">This Factory provides Lowest Quote</span>
                                            </div>
                                            <a href="javascript:void(0)" title="Remove"><i class="fa fa-close delete-factory"></i></a>
                                        </div>
                                        <div class="panel-body">
                                            <i class="clear"></i>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Factory Price / Unit<span class="error">*</span>:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" required type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Processing Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    UK Handling Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Other Costs / Unit:
                                                </label><i class="clear"></i>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Freight Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-4">
                                                <label class="white-space-nowrap">
                                                    Local Delivery Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <i class="clear"></i>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Testing Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <label>
                                                    Import Duty / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-3 p-r0">
                                                    <select class="form-control p-lr3">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4 col-sm-4 p-r0">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control col-md-2">
                                                        <div class="input-group-addon">%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-sm-7 clear-l">
                                                <div id="chkAG" class="form-group col-md-6 col-sm-6 m-t25">
                                                    <label class="small-text">
                                                        <input type="checkbox">
                                                        <span>Agent Commission By Selling Price</span>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6 col-sm-6 m-t25 p-lr0">
                                                    <label class="small-text">
                                                        <input type="checkbox">
                                                        <span>Agent Commission By Factory Price</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <label>
                                                    Agent Commision / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-3 p-r0">
                                                    <select class="form-control p-lr3">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4 col-sm-4 p-r0">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control col-md-2">
                                                        <div class="input-group-addon">%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-1 col-sm-2">
                                                
                                            </div>
                                            <div class="col-md-3 col-sm-4 clear-l">
                                                <label>
                                                    Label Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-4">
                                                <label>
                                                    Trim Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-4">
                                                <label>
                                                    Inspection Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!--START: Repeat for Extra labels.-->
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    <span>:</span>
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!--END: Repeat for Extra labels.-->
                                            <i class="clear"></i>
                                            <div class="text-right col-md-12">
                                                <button class="btn btn-primary btn-mrn" title="Add New Label and Box" type="button">
                                                    <i class="fa fa-plus-circle">
                                                    </i> Add New Label and Box
                                                </button>
                                            </div>
                                            <div class="clearfix">
                                            </div>
                                            <div class="total-section p-b20">
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        <br />Net Price / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" readonly="readonly">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        <br />Discount / Unit (%):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" min="0" max="100.00">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Net Price / Unit (&#163;) with Discount Terms:
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" readonly="readonly">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        <br />Margin / Unit (%):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" min="0" max="100.00">
                                                </div>
                                                <!-- <i class="clear"></i> -->
                                                <div class="form-group col-md-4 col-sm-4">
                                                    <div class="d-table-cell">
                                                        <div class="form-group">
                                                            <label class="col-md-12 p-lr0"><br />Total Price / Unit (&#163;):</label>
                                                            <div class="form-group col-md-12 p-lr0">
                                                                <div class="d-table-cell p-l0">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control text-right">
                                                                        <div class="input-group-addon">GBP</div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-table-cell p-lr0">
                                                                    <div class="input-group m-l15 m-r54">
                                                                        <input type="text" class="form-control text-right">
                                                                        <div class="input-group-addon">factory.FactoryPriceCurrency</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Price to Quote / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Agreed Price / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10">
                                                </div>
                                                <i class="clear"></i>
                                                <div class="text-right col-md-12">
                                                    <button class="btn btn-primary btn-mrn" type="button" name="save" title="Finalize Costing">
                                                        <i class="fa fa-save" /> Save Changes
                                                    </button>
                                                    <button type="button" name="saveAsNew" class="btn btn-primary btn-mrn" title="Finalize as a new Costing">
                                                        <i class="fa fa-save" /> Save as New
                                                    </button>
                                                    <button class="btn btn-primary btn-mrn" name="createOrder" type="button" title="Finalize Costing and Create Order">
                                                        <i class="fa fa-plus-circle" /> Create Order
                                                    </button>
                                                </div>
                                                <i class="clear">
                                                </i>
                                            </div>
                                            <!-- /.total-section -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>