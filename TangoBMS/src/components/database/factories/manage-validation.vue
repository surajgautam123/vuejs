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
                                                <option value="India">India</option>
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
                        <hr>
                        <button class="btn btn-primary btn-mrn" @click="fetchData">Get Data</button>
                        <br><br>
                        <div class="vgt-responsive">
                        <!--List of factories-->
                        <table class="table table-striped table-bordered table-hover hidden" id="factorytable">
                          <thead>
                            <tr>
                              <th class="vgt-left-align sorting"><span>Ref. No.</span></th>
                              <th class="vgt-left-align sorting"><span>Factory Name</span></th>
                              <th class="vgt-right-align sorting"><span>Point of Contact</span></th>
                              <th class="vgt-right-align sorting"><span>Designation</span></th>
                              <th class="vgt-right-align sorting"><span>Country</span></th>
                              <th class="vgt-right-align sorting"><span>Email</span></th>
                              <th class="vgt-left-align sorting"><span>Contact No.</span></th>
                              <th class="vgt-right-align sorting"><span>Zip Code</span></th>
                              <th class="vgt-right-align sorting"><span>Action</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="factory in factoryinfos">
                                <td width="10%">{{factory.referencenumber}}</td>
                                <td>{{factory.factoryname}}</td>
                                <td width="15%">{{factory.pointofcontact}}</td>
                                <td>{{factory.designation}}</td>
                                <td>{{factory.country}}</td>
                                <td nowrap="true"><a href="mailto:">{{factory.email}}</a></td>
                                <td width="10%">{{factory.contactnumber}}</td>
                                <td width="10%" nowrap="true">{{factory.zipcode}}</td>
                                <td nowrap="true" width="1%">
                                    <div class="btn-group">
                                        <a id="dLabel" data-target="#" href="javascript:void(0);" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><i class="fa fa-bars"></i></a>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a href="javascript:void(0)" title="View"><i class="fa fa-paste"></i> View</a></li>
                                            <li><a href="javascript:void(0)" title="Edit"><i class="fa fa-pencil"></i> Edit</a></li>
                                            <li><a href="javascript:void(0)" title="Delete"><i class="fa fa-trash-o"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                this.reset();
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                  this.submitStatus = 'OK'
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
        
        fetchData() {
            $('#factorytable').removeClass('hidden');
            $('#factorytable').addClass('visible');
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
<style>
.visible{visibility: visible;}
.error{color:#FF0000;}
.hpanel .alert{font-size:16px; margin-bottom:22px;}
</style>