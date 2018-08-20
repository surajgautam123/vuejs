<template>
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="hpanel">
                    <div class="panel-body">
                        <form @submit.prevent="submit" id="formtest" ref="form">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="alert alert-success" v-if="submitStatus === 'OK'">
                                        <strong>Success!</strong> Thanks for your submission!
                                    </div>
                                    <div class="alert alert-danger" v-if="submitStatus === 'ERROR'">
                                        <strong>Info!</strong> Please fill the form correctly.
                                    </div>
                                    <div class="alert alert-info" v-if="submitStatus === 'PENDING'">
                                        <strong>Info!</strong> Sending...
                                    </div>
                                </div>
                            </div>
                        <div class="row">
                            <div class="field-box col-md-12">
                                <div class="field-box-title"><h4>Factory's Information</h4></div>
                                <div class="row">
                                    <div class="form-group col-md-2 col-sm-2">
                                        <label class="col-md-12">Factory Ref. No.:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="ReferenceNumber" v-model="factoryinfo.referencenumber">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4 col-sm-4" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Factory Name<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="factory_name" maxlength="50" v-model.trim="factoryinfo.factoryname">
                                            <div class="error" v-if="!$v.factoryinfo.factoryname.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            <div class="error" v-if="!$v.factoryinfo.factoryname.minLength">Name must have at least {{$v.factoryinfo.factoryname.$params.minLength.min}} letters.</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Point of Contact<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="contact_person" maxlength="30" v-model="factoryinfo.pointofcontact">
                                            <div class="error" v-if="!$v.factoryinfo.pointofcontact.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Designation<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="designation" maxlength="30" v-model="factoryinfo.designation">
                                            <div class="error" v-if="!$v.factoryinfo.designation.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 clear-l" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Email<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" name="email" maxlength="70" v-model="factoryinfo.email">
                                            <div class="error" v-if="!$v.factoryinfo.email.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3 p-r0" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Contact Number<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <div class="col-md-5 p-lr0">
                                                <select name="countryCode" class="form-control">
                                                    <option value="">Code</option>
                                                </select>
                                            </div>
                                            <div class="col-md-7">
                                                <input type="text" class="form-control" name="contact_number" v-model="factoryinfo.contactnumber">
                                                <div class="error" v-if="!$v.factoryinfo.contactnumber.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="field-box col-md-12">
                                <div class="field-box-title"><h4>Factory Address</h4></div>
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-6" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Address Line 1<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" name="addressline1" v-model="factoryinfo.addressline1"></textarea>
                                            <div class="error" v-if="!$v.factoryinfo.addressline1.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6">
                                        <label class="col-md-12">Address Line 2:</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" name="addressline2" v-model="factoryinfo.addressline2"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-3 col-sm-3 clear-l" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select name="country" class="form-control" v-model="factoryinfo.country" v-on:input="$v.factoryinfo.country.$touch">
                                                <option value="">Select Country</option>
                                                <option value="India" v-for="country in country_list">{{ country }}</option>
                                            </select>
                                            <div class="error" v-if="!$v.factoryinfo.country.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">State/County<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="factoryinfo.state">
                                            <div class="error" v-if="!$v.factoryinfo.state.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">City<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" name="city" class="form-control" maxlength="30" v-model="factoryinfo.city">
                                            <div class="error" v-if="!$v.factoryinfo.city.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryinfo.factoryname.$error }">
                                        <label class="col-md-12">Zip/Post Code<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" name="zipcode" maxlength="7" v-model="factoryinfo.zipcode">
                                            <div class="error" v-if="!$v.factoryinfo.zipcode.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-block right col-md-12">
                                <!-- <button class="btn btn-primary btn-mrn" @click="submit"><i class="fa fa-save"></i> Save</button> -->
                                <button type="submit" class="btn btn-primary btn-mrn" title="Save" :disabled="submitStatus === 'PENDING'"><i class="fa fa-save"></i> Save</button>
                                <button type="button" class="btn btn-primary btn-mrn" title="Cancel" @click="reset"><i class="fa fa-times"></i>Cancel</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            factoryinfo: {
                referencenumber: '',
                factoryname: '',
                pointofcontact: '',
                designation: '',
                email: '',
                contactnumber: '',
                addressline1: '',
                addressline2: '',
                country: '',
                state: '',
                city: '',
                zipcode: ''
            },
            country_list:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor LEste","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
            name: '',
            submitStatus: null,
            errormsg: 'This field is required',
            factoryinfos: []
        };
    },
    validations: {
        factoryinfo: {
            factoryname: {
                required,
                minLength: minLength(4)
            },
            pointofcontact: {
                required
            },
            designation: {
                required
            },
            email: {
                required
            },
            contactnumber: {
                required
            },
            addressline1: {
                required
            },
            country: {
                required
            },
            state: {
                required
            },
            city: {
                required
            },
            zipcode:{
                required
            }
        },
    },
    methods: {
        reset(){
            console.log('Reset All Fields!');
            this.$refs.form.reset()
        },
        submit(event) {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                  this.submitStatus = 'OK'
                  // Reset form data
                  this.reset();
                  Object.assign(this.$data, this.$options.data.call(factoryinfo));
                  // Page Re-direct after submit
                  // this.$router.replace({ name: "tango-factories" });
                }, 500);
                //console.log(this.factoryinfo);
                this.$http.post('', this.factoryinfo)
                    .then(response => {
                        console.log(response);
                    }, error =>{
                        console.log(error);
                    });
            }
        },
        
        // fetchData() {
        //     $('#factorytable').removeClass('hidden');
        //     $('#factorytable').addClass('visible');
        //     this.$http.get('')
        //         .then(response => {
        //             return response.json();
        //         })
        //         .then(data => {
        //             const resultArray = [];
        //             for (let key in data) {
        //                 resultArray.push(data[key]);
        //             }
        //             this.factoryinfos = resultArray;
        //         })
        // }
    },
}
</script>
<style>
.visible{visibility: visible;}
.error{color:#FF0000;}
.hpanel .alert{font-size:16px; margin-bottom:22px;}
</style>