<template>
<div ng-controller="CostingCtrl as csCtrl">
    <!-- main Costing content start -->
    <div class="row">
        <div class="col-md-12">
            <div class="hpanel">
                <div class="panel-body">
                    <div class="row">
                        <form name="form_costing" id="CostingForm" novalidate>
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
                                        <div class="col-md-12" ng-controller="DatepickerCtrl">
                                            <p class="input-group">
                                                <input type="text" id="styleDate" readonly="readonly" class="form-control" uib-datepicker-popup="dd-MMM-yy" show-weeks="false" ng-model-options="{}" show-button-bar="false" is-open="opened" max-date="'06/22/2019'" datepicker-options="dateOptions" ng-model="csCtrl.attributes.CostingDate" ng-required="true" close-text="Close" />
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-default" ng-click="open($event)">
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
                                            <input class="form-control" id="styleNumber" type="text" maxlength="100" ng-model="csCtrl.attributes.StyleNumber" required>
                                        </div>
                                    </div>
                                    <!--<div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">
                                            Costing For:
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" name="country" ng-options="tangoFactory.Id as tangoFactory.FactoryName for tangoFactory in csCtrl.tangoFactories" ng-model="csCtrl.attributes.FactoryId" required>
                                                <option value="">Select Factory</option>
                                            </select>
                                            <input class="form-control" type="text" maxlength="100" ng-model="csCtrl.attributes.FactoryId" />
                                        </div>
                                    </div>-->
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">
                                            Agent/Sales Person<span class="error">*</span>:
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" id="agentSalesPerson" name="agent" ng-options="tangoEmployee.Id as tangoEmployee.Name for tangoEmployee in csCtrl.tangoEmployees" ng-model="csCtrl.attributes.AgentOrSalesPersonId" required ng-form="form_costing">
                                                <option value="">Select Employee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-2">
                                        <label class="col-md-12">
                                            Product Type:
                                        </label>
                                        <div class="col-md-12">
                                            <!--<input class="form-control" type="text">-->
                                            <!--<select class="form-control" name="Gender" ng-model="csCtrl.attributes.Gender">
                                                <option value="">Select</option>
                                                <option value="Ladies">Ladies</option>
                                                <option value="Mens">Mens</option>
                                                <option value="Boys">Boys</option>
                                                <option value="Girls">Girls</option>
                                                <option value="Toddler Boys">Toddler Boys</option>
                                                <option value="Toddler Girls">Toddler Girls</option>
                                                <option value="Baby Boys">Baby Boys</option>
                                                <option value="Baby Girls">Baby Girls</option>
                                            </select>-->
                                            <select class="form-control" name="Gender" ng-options="ProductType.Gender as ProductType.Gender for ProductType in csCtrl.ProductTypes" ng-model="csCtrl.attributes.Gender" ng-change="csCtrl.addProductType()">
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-3">
                                        <label class="col-md-12">
                                            Gauge (GG/GSM):
                                        </label>
                                        <div class="col-md-12">
                                            <input class="form-control" type="text" maxlength="100" ng-model="csCtrl.attributes.Guage">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 col-sm-4 clear-l">
                                        <label class="col-md-12">
                                            Composition:
                                        </label>
                                        <div class="col-md-12">
                                            <input class="form-control" type="text" maxlength="100" ng-model="csCtrl.attributes.Composition">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">Weight of Garment (in Kgs)<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" id="weightOfGarment" class="form-control" maxlength="10" ng-model="csCtrl.attributes.WeightOfGarment" required positivefloatweight ng-form="form_costing">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 col-sm-4">
                                        <label class="col-md-12">
                                            Style Picture:
                                        </label>
                                        <div class="col-md-12">
                                            <input type="file" class="form-control" ngf-accept="'image/*'" ngf-pattern="image/*" ngf-select ngf-multiple="false" ng-model="csCtrl.attributes.UploadedFile" valid-file name="StylePicture">
                                            <span ng-bind="mfCtrl.attributes.StylePicture.FileName"></span>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6 clear-l">
                                        <label class="col-md-12">Customer's Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select class="form-control" id="CustomerCountry" name="CustomerCountry" ng-options="Country.Id as Country.CountryName for Country in csCtrl.countriesFilteredByCustomer" ng-change="csCtrl.fillCustomerDropdown()" ng-model="csCtrl.attributes.CustomerCountryId">
                                                <option value="">Customer Country</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-6">
                                        <label class="col-md-12">Select Customer<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select class="form-control" name="UserName" id="UserName" ng-disabled="csCtrl.customerDisable" ng-options="Customer.Id as Customer.UserName for Customer in (csCtrl.customers | filter:{CountryId:csCtrl.attributes.CustomerCountryId})" ng-model="csCtrl.attributes.CustomerId" required>
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
                                                <textarea class="form-control" id="garmentDescription" required ng-form="form_costing" ng-model="csCtrl.attributes.Description"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-2 col-sm-2 m-t20">

                                            <label class="small-text col-md-12">
                                                <input type="checkbox" icheck ng-model="csCtrl.getYarnSection" ng-click="csCtrl.resetYarnValues()">
                                                <span>Get Yarn Section</span>
                                            </label>
                                        </div>
                                        <div ng-show="csCtrl.getYarnSection" class="col-md-12 table-responsive">
                                            <div class="col-md-12">
                                                <label>
                                                    <span class="p-t10 ">Yarn Section:</span>
                                                </label>
                                                <button class="btn btn-primary btn-mrn btn-sm m-b0 pull-right" title="Add More" type="button" ng-click="csCtrl.addMoreYarnCosting();">
                                                    <i class="fa fa-plus-circle">
                                                    </i> Add More
                                                </button>
                                            </div>
                                            <div class="col-md-12">
                                                <table ng-table="csCtrl.tangoTableParamsYarn" class="table table-bordered table-hover" show-filter="false" width="50%">
                                                    <tr ng-repeat="yarn in $data">
                                                        <td title="'Yarn Name'" width="15%" class="form-group">
                                                            <input type="text" class="form-control" name="YarnName" id="txtYarnName" ng-model='yarn.YarnName' ng-required="csCtrl.getYarnSection" ng-form="form_costing">
                                                        </td>
                                                        <td title="'No. of Ends'" width="10%" class="form-group">
                                                            <input type="text" class="form-control" ng-model='yarn.NoOfEnds' ng-required="csCtrl.getYarnSection" name="NoOfEnds" ng-change="csCtrl.updateYarnQuantity()" id="txtNoOfEnds" positive-int ng-form="form_costing">
                                                        </td>
                                                        <td title="'Yarn Consumption/unit (in Kgs)'" align="center" class="form-group">
                                                            <input type="text" class="form-control" ng-model='yarn.YarnConsumptionPerUnit' ng-required="csCtrl.getYarnSection" ng-change="csCtrl.updateYarnTable()" name="YarnConsumptionPerUnit" id="txtYarnConsumptionPerUnit" positivefloatweight ng-form="form_costing">
                                                        </td>
                                                        <td title="'Yarn Price / Kg'" class="form-group" align="center">
                                                            <div class="form-inline w100-pr">
                                                                <select class="form-control w80 p-lr5 m-r5" ng-model="yarn.YarnCurrency" ng-change="csCtrl.updateYarnCurrency($index)">
                                                                    <option value="GBP">GBP</option>
                                                                    <option value="EURO">EURO</option>
                                                                    <option value="USD">USD</option>
                                                                </select>
                                                                <input type="text" class="form-control w80 p-lr5" ng-model='yarn.YarnPrice' ng-required="csCtrl.getYarnSection" name="Price" ng-change="csCtrl.updateYarnTable()" id="txtPrice" positivefloat ng-form="form_costing">
                                                            </div>
                                                        </td>
                                                        <td title="'Total Yarn Price'" valign="middle" align="center" width="10%" nowrap="true">
                                                            {{yarn.TotalYarnPrice}}
                                                        </td>
                                                        <td class="form-group" align="center" ng-if="csCtrl.yarnCosting.length > 1">
                                                            <button title="'Remove Row'" class="btn btn-primary btn-mrn" ng-click="csCtrl.removeYarnCostingRow($index)">
                                                                <i class="fa fa-trash-o m-r0"> </i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr ng-show="$data==null || $data.length < 1">
                                                        <td colspan="9">
                                                            <span>No records available</span>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <i class="clear"></i>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Gross Weight of the Yarn:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" readonly="readonly" class="form-control" ng-model="csCtrl.GrossWeightYarn">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Total Yarn Price:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" readonly="readonly" class="form-control" ng-model="csCtrl.totalYarnPrice">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Knitting Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control" positivefloat ng-change="csCtrl.updateFactoryPrice()" ng-model="csCtrl.attributes.knittingCost">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control" positivefloat ng-change="csCtrl.updateFactoryPrice()" ng-model="csCtrl.attributes.Cost">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0 clear-l">
                                                    <label class="col-md-12 p-l0">Mockup Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control" positivefloat ng-change="csCtrl.updateFactoryPrice()" ng-model="csCtrl.attributes.MockupCost">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Packaging Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control" positivefloat ng-change="csCtrl.updateFactoryPrice()" ng-model="csCtrl.attributes.PackageingCost">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3 col-sm-3 m-t10 p-l0">
                                                    <label class="col-md-12 p-l0">Other Cost:</label>
                                                    <div class="col-md-12 p-l0">
                                                        <input type="text" class="form-control" positivefloat ng-change="csCtrl.updateFactoryPrice()" ng-model="csCtrl.attributes.OtherCost">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <i class="clear"></i>
                                        <div class="form-group col-md-12 col-sm-12 m-t20">
                                            <div class="col-md-12">
                                                <div class="row total-value" ng-show="csCtrl.attributes.QuoteAmount>0 || csCtrl.lowestQuoteFactory!=''">
                                                    <h2 class="col-md-4">Lowest Quote</h2>
                                                    <h5 class="col-md-8">
                                                        <span class="pull-left ammount-section m-b15">
                                                            &#163; {{csCtrl.lowestQuoteFactory.TotalPrice}}
                                                        </span>
                                                        <span class="victory-miles">{{csCtrl.lowestQuoteFactory.FactoryName}}</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.description-section -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.field-box -->
                            <div class="col-md-12 p-b20">
                                <div class="row">
                                    <p class="col-md-12 massage-note"><strong>Note:</strong> Please select Country and then its associated Factory for quoting.</p><i class="clear"></i>
                                    <div class="form-group col-md-4 col-sm-4 p-lr0">
                                        <label class="col-md-12">Select Factory Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select name="country" class="form-control" ng-options="country.Id as country.CountryName for country in csCtrl.Countries" ng-change="csCtrl.fillFactoryDropdown()" ng-model="csCtrl.attributes.FactoryCountryId" required>
                                                <option value="">Select Country</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-5 col-sm-5 p-l0" ng-class="{'has-error': csCtrl.validateFactoryTab}">
                                        <label class="col-md-12">Select Factory<span class="error">*</span>:</label>
                                        <div class="col-md-10">
                                            <select name="selectedFactoryForOptions" ng-disabled="csCtrl.factoryDisable" class="form-control" ng-options="factory.Id as factory.FactoryName for factory in (csCtrl.tangoTabFactories | filter:{CountryId:csCtrl.attributes.FactoryCountryId})" ng-model="csCtrl.selectedFactoryForOptions">
                                                <option value="">Select Factory</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2"><button class="btn btn-primary m-r5" title="Add Factory" ng-click="csCtrl.addNewFactory();"><i class="fa fa-plus-circle"></i> Add Factory</button></div>
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
                                                        <input type="number" class="form-control" maxlength="6" ng-model="csCtrl.attributes.ExchangeRateEuro" required ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                        <div class="input-group-addon addon-highlight">EURO</div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="input-group">
                                                        <div class="input-group-addon addon-highlight">1 GBP =</div>
                                                        <input type="number" class="form-control" maxlength="6" ng-model="csCtrl.attributes.ExchangeRateUSD" required ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                        <div class="input-group-addon addon-highlight">USD</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Factory Tab Sets -->
                            <div class="costing-tab-panel hpanel col-md-12 horizontal-tab horizontal-tab-costing">
                                <uib-tabset id="tabSet">
                                    <uib-tab title="{{factory.FactoryName}}" active="$index===csCtrl.currentindex" ng-repeat="factory in csCtrl.attributes.Factories" class="{{factory.FactoryId===csCtrl.lowestQuoteFactory.FactoryId ? 'lowest-quote':''}}">
                                        <uib-tab-heading>
                                            <div class="tooltip tooltip-common" ng-click="csCtrl.switchFactoryTab($index)">
                                                <span aria-hidden="true">{{factory.FactoryName}}</span>
                                                <span class="tooltiptext tooltip-top" ng-show="factory.FactoryId===csCtrl.lowestQuoteFactory.FactoryId">This Factory provides Lowest Quote</span>
                                            </div>
                                            <a href="javascript:void(0)" ng-click="csCtrl.removeFactoryTab(factory.FactoryId)" title="Remove"><i class="fa fa-close delete-factory"></i></a>
                                        </uib-tab-heading>
                                        <div class="panel-body">
                                            <i class="clear"></i>
                                            <div class="col-md-2 col-sm-4">
                                                <label>
                                                    Factory Price / Unit<span class="error">*</span>:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" required type="text" maxlength="10" ng-model="factory.FactoryPrice" ng-change="csCtrl.calculateImportDuty()" ng-disabled="csCtrl.getYarnSection" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.FactoryPriceCurrency" ng-change="csCtrl.calculateImportDuty()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.ProcessingCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.ProcessingCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.UkHandlingCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.UkHandlingCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.Cost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.CostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.FreightCost" ng-change="csCtrl.calculateImportDuty()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.FreightCostCurrency" ng-change="csCtrl.calculateImportDuty()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.LocalDeliveryCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.LocalDeliveryCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.TestingCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.TestingCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.ImportDuty" ng-change="csCtrl.calculateImportDutyPercent()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-3 p-r0">
                                                    <select class="form-control p-lr3" ng-model="factory.ImportDutyCurrency" ng-change="csCtrl.calculateImportDuty()">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4 col-sm-4 p-r0">
                                                    <div class="input-group">
                                                        <input type="text" ng-model="factory.ImportDutyPercent" ng-form="form_costing" positivefloat min="0" max="100.00" ng-change="csCtrl.calculateImportDuty()" class="form-control col-md-2">
                                                        <div class="input-group-addon">%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-sm-7 clear-l">
                                                <div id="chkAG" class="form-group col-md-6 col-sm-6 m-t25">
                                                    <label class="small-text">
                                                        <input type="checkbox" icheck ng-model="factory.AgentCommisionBySellingPrice" ng-change="csCtrl.calculateAgentCommision()">
                                                        <span>Agent Commission By Selling Price</span>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6 col-sm-6 m-t25 p-lr0">
                                                    <label class="small-text">
                                                        <input type="checkbox" icheck ng-model="factory.AgentCommisionByFactoryPrice" ng-change="csCtrl.calculateAgentCommision()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.AgentCommision" ng-change="csCtrl.calculateAgentCommisionPercent()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-3 p-r0">
                                                    <select class="form-control p-lr3" ng-model="factory.AgentCommisionCurrency" ng-change="csCtrl.calculateAgentCommision()">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4 col-sm-4 p-r0">
                                                    <div class="input-group">
                                                        <input type="text" ng-model="factory.AgentCommisionPercent" ng-form="form_costing" positivefloat min="0" max="100.00" ng-change="csCtrl.calculateAgentCommision()" class="form-control col-md-2">
                                                        <div class="input-group-addon">%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div ng-show="csCtrl.getYarnSection" class="col-md-1 col-sm-2">
                                                <!--<label>
                                                    Yarn Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" ng-disabled="true" ng-model="factory.YarnCost">
                                                </div>-->
                                                <!--<div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-disabled="true" ng-model="factory.YarnCostCurrency">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>-->
                                            </div>
                                            <div class="col-md-3 col-sm-4 clear-l">
                                                <label>
                                                    Label Cost / Unit:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.LabelCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.LabelCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.TrimCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.TrimCostCurrency" ng-change="csCtrl.calculateNetValues()">
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
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="factory.InspectionCost" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="factory.InspectionCostCurrency" ng-change="csCtrl.calculateNetValues()">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div><!--<i class="clear"></i>-->
                                            <!--START: Repeat for Extra labels.-->
                                            <div class="col-md-2 col-sm-4" ng-repeat="extraLabel in factory.ExtraLabels">
                                                <label>
                                                    <span ng-bind="extraLabel.LabelName" />:
                                                </label>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-5 p-lr0">
                                                    <input class="form-control p-lr5 text-right" type="text" maxlength="10" ng-model="extraLabel.LabelValue" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-7 p-r0">
                                                    <select class="form-control p-lr5" ng-model="extraLabel.LabelCurrency" ng-change="csCtrl.calculateNetValues()">
                                                        <option value="GBP">GBP</option>
                                                        <option value="EURO">EURO</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!--END: Repeat for Extra labels.-->
                                            <i class="clear"></i>
                                            <div class="text-right col-md-12">
                                                <button class="btn btn-primary btn-mrn" ng-click="csCtrl.addNewLabel($index)" title="Add New Label and Box" type="button">
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
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.NetPrice" readonly="readonly">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        <br />Discount / Unit (%):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.Discount" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing" min="0" max="100.00">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Net Price / Unit (&#163;) with Discount Terms:
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.NetPriceWithDiscount" readonly="readonly">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        <br />Margin / Unit (%):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.Margin" ng-change="csCtrl.calculateNetValues()" positivefloat ng-form="form_costing" min="0" max="100.00">
                                                </div>
                                                <!-- <i class="clear"></i> -->
                                                <div class="form-group col-md-4 col-sm-4">
                                                    <div class="d-table-cell">
                                                        <div class="form-group">
                                                            <label class="col-md-12 p-lr0"><br />Total Price / Unit (&#163;):</label>
                                                            <div class="form-group col-md-12 p-lr0">
                                                                <div class="d-table-cell p-l0">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control text-right" ng-model="factory.TotalPrice" ng-disabled="true" required positivefloat ng-form="form_costing">
                                                                        <div class="input-group-addon">GBP</div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-table-cell p-lr0">
                                                                    <div class="input-group m-l15 m-r54">
                                                                        <input type="text" ng-hide="factory.FactoryPriceCurrency == 'GBP'" class="form-control text-right" ng-model="factory.ActualTotalPrice" ng-disabled="true" required positivefloat ng-form="form_costing">
                                                                        <div ng-hide="factory.FactoryPriceCurrency == 'GBP'" class="input-group-addon">{{factory.FactoryPriceCurrency}}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--<label>
                                                        </br>Total Price / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.TotalPrice" readonly="readonly">-->
                                                </div>
                                                <i class="clear"></i>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Price to Quote / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.PriceToQuote" positivefloat ng-form="form_costing">
                                                </div>
                                                <div class="form-group col-md-2 col-sm-2">
                                                    <label>
                                                        Agreed Price / Unit (&#163;):
                                                    </label>
                                                    <input class="form-control text-right" type="text" maxlength="10" ng-model="factory.AgreedPrice" positivefloat ng-form="form_costing" ng-change="csCtrl.calculateAgentCommision()">
                                                </div>
                                                <i class="clear"></i>
                                                <div class="text-right col-md-12">
                                                    <button class="btn btn-primary btn-mrn" type="button" name="save" title="Finalize Costing" ng-click="csCtrl.submitCostingForm(form_costing);">
                                                        <i class="fa fa-save" /> Save Changes
                                                    </button>
                                                    <button ng-show="csCtrl.attributes.Id !== ''" type="button" name="saveAsNew" class="btn btn-primary btn-mrn" title="Finalize as a new Costing" ng-click="csCtrl.saveAsNewCostingForm(form_costing);">
                                                        <i class="fa fa-save" /> Save as New
                                                    </button>
                                                    <button class="btn btn-primary btn-mrn" name="createOrder" type="button" title="Finalize Costing and Create Order" ng-click="form_costing.$valid && csCtrl.createOrderCostingForm(form_costing);">
                                                        <i class="fa fa-plus-circle" /> Create Order
                                                    </button>
                                                </div>
                                                <i class="clear">
                                                </i>
                                            </div>
                                            <!-- /.total-section -->
                                        </div>
                                    </uib-tab>
                                    <!--<uib-tab id="btnTab" active="false" ng-click="csCtrl.addNewFactory();">
                                        <uib-tab-heading>
                                            <i class="fa fa-plus" />
                                        </uib-tab-heading>
                                    </uib-tab>-->
                                </uib-tabset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- main Costing content end -->
</div>
</template>