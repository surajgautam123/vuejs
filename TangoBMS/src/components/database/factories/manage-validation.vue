<template>
    <div class="content" id="factoryinfobox">
        <div class="row">
            <div class="col-md-12">
                <div class="hpanel">
                    <div class="panel-body">
                        <form @submit.prevent="submit">
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
                                    <div class="form-group col-md-4 col-sm-4" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Factory Name<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="factory_name" maxlength="50" v-model.trim="$v.factoryname.$model" />
                                            <div class="error" v-if="!$v.factoryname.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Point of Contact<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="contact_person" maxlength="30" v-model="factoryinfo.pointofcontact">
                                            <div class="error" v-if="!$v.pointofcontact.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Designation<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="designation" maxlength="30" v-model="factoryinfo.designation">
                                            <div class="error" v-if="!$v.designation.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 clear-l" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Email<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" name="email" maxlength="70" v-model="factoryinfo.email">
                                            <div class="error" v-if="!$v.email.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3 p-r0" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Contact Number<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <div class="col-md-5 p-lr0">
                                                <select name="countryCode" class="form-control">
                                                    <option value="">Code</option>
                                                </select>
                                            </div>
                                            <div class="col-md-7">
                                                <input type="text" class="form-control" name="contact_number" v-model="factoryinfo.contactnumber">
                                                <div class="error" v-if="!$v.contactnumber.required && submitStatus === 'ERROR'">Required</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="field-box col-md-12">
                                <div class="field-box-title"><h4>Factory Address</h4></div>
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-6" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Address Line 1<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" name="addressline1" v-model="factoryinfo.addressline1"></textarea>
                                            <div class="error" v-if="!$v.addressline1.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6">
                                        <label class="col-md-12">Address Line 2:</label>
                                        <div class="col-md-12">
                                            <textarea class="form-control" name="addressline2" v-model="factoryinfo.addressline2"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-3 col-sm-3 clear-l" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Country<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <select name="country" class="form-control" v-model="factoryinfo.country">
                                                <option value="">Select Country</option>
                                                <option value="">India</option>
                                            </select>
                                            <div class="error" v-if="!$v.country.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">State/County<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="factoryinfo.state">
                                            <div class="error" v-if="!$v.state.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">City<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" name="city" class="form-control" maxlength="30" v-model="factoryinfo.city">
                                            <div class="error" v-if="!$v.city.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3 col-sm-3" :class="{ 'form-group--error': $v.factoryname.$error }">
                                        <label class="col-md-12">Zip/Post Code<span class="error">*</span>:</label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="zipcode" maxlength="7" v-model="factoryinfo.zipcode">
                                            <div class="error" v-if="!$v.zipcode.required && submitStatus === 'ERROR'">Required</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-block right col-md-12">
                                <button class="btn btn-primary btn-mrn" @click="submit"><i class="fa fa-save"></i> Save</button>
                                <button title="Cancel" type="button" ui-sref="database.factories" class="btn btn-primary btn-mrn"><i class="fa fa-times"></i>Cancel</button>
                            </div>
                        </div>
                        </form>
                        <hr>
                        <button class="btn btn-primary btn-mrn" @click="fetchData">Get Data</button>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="factory in factoryinfos">
                                {{factory.referencenumber}}<br>
                                {{factory.factoryname}}
                            </li>
                        </ul>
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
                submitStatus: null,
                factoryinfos: []
                // resource: {},
                // node: 'data'
            };
        },
        validations: {
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
        methods: {
            submit() {
                //console.log(this.factoryinfo);
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                }
                else if(this.username == this.$parent.mockAccount.username && this.password == this.$parent.mockAccount.password){
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    this.$http.post('', this.factoryinfo) 
                    .then(response => {
                        console.log(response);
                    }, error =>{
                        console.log(error);
                    });
                }
            },
            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.factoryinfos = resultArray;
                    })
            }
        },
    }
</script>
<style scoped>
.error{color:#FF0000;}
</style>