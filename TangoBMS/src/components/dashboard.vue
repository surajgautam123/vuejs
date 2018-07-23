<template>
    <div id="home">
        <div small-header="" class="normalheader transition ng-scope">
            <div class="hpanel" tour-step="" order="1" title="Page header" content="Place your page title and breadcrumb. Select small or large header or give the user choice to change the size." placement="bottom">
                <div class="panel-body" title="">
                    <div id="hbreadcrumb" class="pull-right m-t-lg">
                        <ol class="hbreadcrumb breadcrumb">
                            <li><a ui-sref="dashboard.page" title="" href="#/dashboard/dashboard">Dashboard</a></li>
                        </ol>
                    </div>
                    <h2 class="font-light m-b-xs ng-binding">
                        Dashboard
                    </h2>
                    <small class="ng-binding"> </small>
                </div>
            </div>
        </div>
        <div class="content" animate-panel effect="zoomIn">
            <div class="row">
                <!-- Start: Revenue Section -->
                <div class="col-md-12">
                    <div class="hpanel">
                        <div class="panel-heading clearfix ng-binding">
                            <div class="panel-tools">
                                <select class="form-control ng-pristine ng-untouched ng-valid" name="revenue-years" ng-options="year.Value as year.Text for year in dbCtrl.years" ng-init="dbCtrl.revenueYear = dbCtrl.CurrentYear" ng-model="dbCtrl.revenueYear" ng-change="dbCtrl.getRevenueGraphData(dbCtrl.revenueYear)"><option label="2018" value="number:2018">2018</option><option label="2017" value="number:2017">2017</option><option label="2016" value="number:2016">2016</option><option label="2015" value="number:2015">2015</option><option label="2014" value="number:2014">2014</option><option label="2013" value="number:2013">2013</option><option label="2012" value="number:2012">2012</option><option label="2011" value="number:2011">2011</option><option label="2010" value="number:2010">2010</option><option label="2009" value="number:2009">2009</option></select>
                            </div>
                            Revenue - 2018
                        </div>
                        <div class="panel-body">
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £317,958.10
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £317,958.10
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options1" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div id="stacked-bar-plot1-chart1" class="c3 ng-isolate-scope" style="max-height: 320px; position: relative;">
                                    <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
                                </div>
                            </div>
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £372,345.78
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £372,345.78
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options2" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div id="stacked-bar-plot1-chart1" class="c3 ng-isolate-scope" style="max-height: 320px; position: relative; padding-bottom: 20px;">
                                    <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Revenue Section -->
                <!-- Start: Profit/Loss - 2018 Section -->
                <div class="col-md-12">
                    <div class="hpanel">
                        <div class="panel-heading clearfix ng-binding">
                            <div class="panel-tools">
                                <select class="form-control ng-pristine ng-untouched ng-valid" name="revenue-years" ng-options="year.Value as year.Text for year in dbCtrl.years" ng-init="dbCtrl.revenueYear = dbCtrl.CurrentYear" ng-model="dbCtrl.revenueYear" ng-change="dbCtrl.getRevenueGraphData(dbCtrl.revenueYear)"><option label="2018" value="number:2018">2018</option><option label="2017" value="number:2017">2017</option><option label="2016" value="number:2016">2016</option><option label="2015" value="number:2015">2015</option><option label="2014" value="number:2014">2014</option><option label="2013" value="number:2013">2013</option><option label="2012" value="number:2012">2012</option><option label="2011" value="number:2011">2011</option><option label="2010" value="number:2010">2010</option><option label="2009" value="number:2009">2009</option></select>
                            </div>
                            Profit/Loss - 2018
                        </div>
                        <div class="panel-body">
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £317,958.10
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £317,958.10
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options3" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div class="" style="max-height: 320px; position: relative; padding-bottom: 20px;">
                                    <line-chart :data="{'2017-05-10': 0, '2017-05-11': -215, '2017-05-12': 1, '2017-05-13': 102, '2017-05-14': 5, '2017-05-15': 3}"></line-chart>
                                </div>
                            </div>
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £372,345.78
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £372,345.78
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options4" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div class="" style="max-height: 320px; position: relative; padding-bottom: 20px;">
                                    <line-chart :data="{'2017-05-10': 0, '2017-05-11': -215, '2017-05-12': 1, '2017-05-13': 102, '2017-05-14': 5, '2017-05-15': 3}"></line-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Profit/Loss - 2018 Section -->
                <!-- Start: Profit/Loss - July 2018 Section -->
                <div class="col-md-12">
                    <div class="hpanel">
                        <div class="panel-heading clearfix ng-binding">
                            <div class="panel-tools">
                                <select class="form-control ng-pristine ng-untouched ng-valid" name="revenue-years" ng-options="year.Value as year.Text for year in dbCtrl.years" ng-init="dbCtrl.revenueYear = dbCtrl.CurrentYear" ng-model="dbCtrl.revenueYear" ng-change="dbCtrl.getRevenueGraphData(dbCtrl.revenueYear)"><option label="2018" value="number:2018">2018</option><option label="2017" value="number:2017">2017</option><option label="2016" value="number:2016">2016</option><option label="2015" value="number:2015">2015</option><option label="2014" value="number:2014">2014</option><option label="2013" value="number:2013">2013</option><option label="2012" value="number:2012">2012</option><option label="2011" value="number:2011">2011</option><option label="2010" value="number:2010">2010</option><option label="2009" value="number:2009">2009</option></select>
                            </div>
                            Revenue - 2018
                        </div>
                        <div class="panel-body">
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £317,958.10
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £317,958.10
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options5" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div class="" style="max-height: 320px; position: relative; padding-bottom: 20px;">
                                    <line-chart :data="{'0': 10, '1': 1, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 6, '19': 70, '20': 6, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0}"></line-chart>
                                </div>
                            </div>
                            <div class="col-md-1 font-16px">
                                <p class="m-b30 ng-binding">
                                    <b>Actual</b><br>
                                    £0.00
                                </p>
                                <p class="m-b30 ng-binding">
                                    <b>Projected</b><br>
                                    £372,345.78
                                </p>
                                <p class="ng-binding">
                                    <b>Total</b><br>
                                    £372,345.78
                                </p>
                            </div>
                            <div class="col-md-5">
                                <b>By Ordered Date</b>
                                <div class="chart-toggle-button text-right">
                                    <label class="m-r5">
                                        <input type="radio" name="options" ng-model="dbCtrl.revenueChartPO" ng-click="dbCtrl.getRevenueGraphDataCompletedByPO(dbCtrl.revenueYear)" ng-value="'Completed'" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Completed">
                                        <span class="clicked-btn btn btn-primary btn-outline">Completed</span>                            
                                    </label>
                                    <label>
                                        <input type="radio" name="options6" checked="checked" autocomplete="off" class="ng-pristine ng-untouched ng-valid" value="Active">
                                        <span class="clicked-btn btn btn-primary btn-outline">Active</span>
                                    </label>
                                </div>
                                <div class="" style="max-height: 320px; position: relative; padding-bottom: 20px;">
                                    <line-chart :data="{'0': 0, '1': 1, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 6, '10': 70, '11': 6, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0}"></line-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Profit/Loss - July 2018 Section -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {};
        }
    }
</script>

<style>
</style>