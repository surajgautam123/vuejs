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
                                        <div class="form-group col-md-4 col-sm-4" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">Factory Name<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="factory_name" maxlength="50" v-model.trim="factoryinfo.factoryname">
                                                <div class="error" v-if="!$v.factoryinfo.factoryname.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                                <div class="error" v-if="!$v.factoryinfo.factoryname.minLength">Name must have at least {{$v.factoryinfo.factoryname.$params.minLength.min}} letters.</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">Point of Contact<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="contact_person" maxlength="30" v-model="factoryinfo.pointofcontact">
                                                <div class="error" v-if="!$v.factoryinfo.pointofcontact.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">Designation<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="designation" maxlength="30" v-model="factoryinfo.designation">
                                                <div class="error" v-if="!$v.factoryinfo.designation.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 clear-l" :class="{ 'invalid': $v.factoryinfo.email.$error }">
                                            <label class="col-md-12">Email<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="email" id="email" class="form-control" name="email" maxlength="70" v-model="factoryinfo.email">
                                                <div class="error" v-if="!$v.factoryinfo.email.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                                <div class="error" v-if="!$v.factoryinfo.email.email">Please provide a valid email address.</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3 p-r0" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">Contact Number<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <div class="col-md-5 p-lr0">
                                                    <select name="countryCode" class="form-control">
                                                        <option value="">Code</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-7">
                                                    <input type="number" class="form-control" name="contact_number" v-model="factoryinfo.contactnumber">
                                                    <div class="error" v-if="!$v.factoryinfo.contactnumber.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="field-box col-md-12">
                                    <div class="field-box-title"><h4>Factory Address</h4></div>
                                    <div class="row">
                                        <div class="form-group col-md-6 col-sm-6" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
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

                                        <div class="form-group col-md-3 col-sm-3 clear-l" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">Country<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <select name="country" class="form-control" v-model="factoryinfo.country" v-on:input="$v.factoryinfo.country.$touch">
                                                    <option value="">Select Country</option>
                                                    <option v-for="country in country_list" v-bind:value="country.code">{{ country.name }}</option>
                                                </select>
                                                <div class="error" v-if="!$v.factoryinfo.country.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">State/County<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" v-model="factoryinfo.state">
                                                <div class="error" v-if="!$v.factoryinfo.state.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
                                            <label class="col-md-12">City<span class="error">*</span>:</label>
                                            <div class="col-md-12">
                                                <input type="text" name="city" class="form-control" maxlength="30" v-model="factoryinfo.city">
                                                <div class="error" v-if="!$v.factoryinfo.city.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-3 col-sm-3" :class="{ 'invalid': $v.factoryinfo.factoryname.$error }">
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
import { required, numeric, minLength, email } from 'vuelidate/lib/validators'
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
            country_list:[ 
{name: "Afghanistan", code: "AF"}, 
{name: "land Islands", code: "AX"}, 
{name: "Albania", code: "AL"}, 
{name: "Algeria", code: "DZ"}, 
{name: "American Samoa", code: "AS"}, 
{name: "AndorrA", code: "AD"}, 
{name: "Angola", code: "AO"}, 
{name: "Anguilla", code: "AI"}, 
{name: "Antarctica", code: "AQ"}, 
{name: "Antigua and Barbuda", code: "AG"}, 
{name: "Argentina", code: "AR"}, 
{name: "Armenia", code: "AM"}, 
{name: "Aruba", code: "AW"}, 
{name: "Australia", code: "AU"}, 
{name: "Austria", code: "AT"}, 
{name: "Azerbaijan", code: "AZ"}, 
{name: "Bahamas", code: "BS"}, 
{name: "Bahrain", code: "BH"}, 
{name: "Bangladesh", code: "BD"}, 
{name: "Barbados", code: "BB"}, 
{name: "Belarus", code: "BY"}, 
{name: "Belgium", code: "BE"}, 
{name: "Belize", code: "BZ"}, 
{name: "Benin", code: "BJ"}, 
{name: "Bermuda", code: "BM"}, 
{name: "Bhutan", code: "BT"}, 
{name: "Bolivia", code: "BO"}, 
{name: "Bosnia and Herzegovina", code: "BA"}, 
{name: "Botswana", code: "BW"}, 
{name: "Bouvet Island", code: "BV"}, 
{name: "Brazil", code: "BR"}, 
{name: "British Indian Ocean Territory", code: "IO"}, 
{name: "Brunei Darussalam", code: "BN"}, 
{name: "Bulgaria", code: "BG"}, 
{name: "Burkina Faso", code: "BF"}, 
{name: "Burundi", code: "BI"}, 
{name: "Cambodia", code: "KH"}, 
{name: "Cameroon", code: "CM"}, 
{name: "Canada", code: "CA"}, 
{name: "Cape Verde", code: "CV"}, 
{name: "Cayman Islands", code: "KY"}, 
{name: "Central African Republic", code: "CF"}, 
{name: "Chad", code: "TD"}, 
{name: "Chile", code: "CL"}, 
{name: "China", code: "CN"}, 
{name: "Christmas Island", code: "CX"}, 
{name: "Cocos (Keeling) Islands", code: "CC"}, 
{name: "Colombia", code: "CO"}, 
{name: "Comoros", code: "KM"}, 
{name: "Congo", code: "CG"}, 
{name: "Congo, The Democratic Republic of the", code: "CD"}, 
{name: "Cook Islands", code: "CK"}, 
{name: "Costa Rica", code: "CR"}, 
{name: "Cote D\'Ivoire", code: "CI"}, 
{name: "Croatia", code: "HR"}, 
{name: "Cuba", code: "CU"}, 
{name: "Cyprus", code: "CY"}, 
{name: "Czech Republic", code: "CZ"}, 
{name: "Denmark", code: "DK"}, 
{name: "Djibouti", code: "DJ"}, 
{name: "Dominica", code: "DM"}, 
{name: "Dominican Republic", code: "DO"}, 
{name: "Ecuador", code: "EC"}, 
{name: "Egypt", code: "EG"}, 
{name: "El Salvador", code: "SV"}, 
{name: "Equatorial Guinea", code: "GQ"}, 
{name: "Eritrea", code: "ER"}, 
{name: "Estonia", code: "EE"}, 
{name: "Ethiopia", code: "ET"}, 
{name: "Falkland Islands (Malvinas)", code: "FK"}, 
{name: "Faroe Islands", code: "FO"}, 
{name: "Fiji", code: "FJ"}, 
{name: "Finland", code: "FI"}, 
{name: "France", code: "FR"}, 
{name: "French Guiana", code: "GF"}, 
{name: "French Polynesia", code: "PF"}, 
{name: "French Southern Territories", code: "TF"}, 
{name: "Gabon", code: "GA"}, 
{name: "Gambia", code: "GM"}, 
{name: "Georgia", code: "GE"}, 
{name: "Germany", code: "DE"}, 
{name: "Ghana", code: "GH"}, 
{name: "Gibraltar", code: "GI"}, 
{name: "Greece", code: "GR"}, 
{name: "Greenland", code: "GL"}, 
{name: "Grenada", code: "GD"}, 
{name: "Guadeloupe", code: "GP"}, 
{name: "Guam", code: "GU"}, 
{name: "Guatemala", code: "GT"}, 
{name: "Guernsey", code: "GG"}, 
{name: "Guinea", code: "GN"}, 
{name: "Guinea-Bissau", code: "GW"}, 
{name: "Guyana", code: "GY"}, 
{name: "Haiti", code: "HT"}, 
{name: "Heard Island and Mcdonald Islands", code: "HM"}, 
{name: "Holy See (Vatican City State)", code: "VA"}, 
{name: "Honduras", code: "HN"}, 
{name: "Hong Kong", code: "HK"}, 
{name: "Hungary", code: "HU"}, 
{name: "Iceland", code: "IS"}, 
{name: "India", code: "IN"}, 
{name: "Indonesia", code: "ID"}, 
{name: "Iran, Islamic Republic Of", code: "IR"}, 
{name: "Iraq", code: "IQ"}, 
{name: "Ireland", code: "IE"}, 
{name: "Isle of Man", code: "IM"}, 
{name: "Israel", code: "IL"}, 
{name: "Italy", code: "IT"}, 
{name: "Jamaica", code: "JM"}, 
{name: "Japan", code: "JP"}, 
{name: "Jersey", code: "JE"}, 
{name: "Jordan", code: "JO"}, 
{name: "Kazakhstan", code: "KZ"}, 
{name: "Kenya", code: "KE"}, 
{name: "Kiribati", code: "KI"}, 
{name: "Korea, Democratic People\'S Republic of", code: "KP"}, 
{name: "Korea, Republic of", code: "KR"}, 
{name: "Kuwait", code: "KW"}, 
{name: "Kyrgyzstan", code: "KG"}, 
{name: "Lao People\'S Democratic Republic", code: "LA"}, 
{name: "Latvia", code: "LV"}, 
{name: "Lebanon", code: "LB"}, 
{name: "Lesotho", code: "LS"}, 
{name: "Liberia", code: "LR"}, 
{name: "Libyan Arab Jamahiriya", code: "LY"}, 
{name: "Liechtenstein", code: "LI"}, 
{name: "Lithuania", code: "LT"}, 
{name: "Luxembourg", code: "LU"}, 
{name: "Macao", code: "MO"}, 
{name: "Macedonia, The Former Yugoslav Republic of", code: "MK"}, 
{name: "Madagascar", code: "MG"}, 
{name: "Malawi", code: "MW"}, 
{name: "Malaysia", code: "MY"}, 
{name: "Maldives", code: "MV"}, 
{name: "Mali", code: "ML"}, 
{name: "Malta", code: "MT"}, 
{name: "Marshall Islands", code: "MH"}, 
{name: "Martinique", code: "MQ"}, 
{name: "Mauritania", code: "MR"}, 
{name: "Mauritius", code: "MU"}, 
{name: "Mayotte", code: "YT"}, 
{name: "Mexico", code: "MX"}, 
{name: "Micronesia, Federated States of", code: "FM"}, 
{name: "Moldova, Republic of", code: "MD"}, 
{name: "Monaco", code: "MC"}, 
{name: "Mongolia", code: "MN"}, 
{name: "Montenegro", code: "ME"},
{name: "Montserrat", code: "MS"},
{name: "Morocco", code: "MA"}, 
{name: "Mozambique", code: "MZ"}, 
{name: "Myanmar", code: "MM"}, 
{name: "Namibia", code: "NA"}, 
{name: "Nauru", code: "NR"}, 
{name: "Nepal", code: "NP"}, 
{name: "Netherlands", code: "NL"}, 
{name: "Netherlands Antilles", code: "AN"}, 
{name: "New Caledonia", code: "NC"}, 
{name: "New Zealand", code: "NZ"}, 
{name: "Nicaragua", code: "NI"}, 
{name: "Niger", code: "NE"}, 
{name: "Nigeria", code: "NG"}, 
{name: "Niue", code: "NU"}, 
{name: "Norfolk Island", code: "NF"}, 
{name: "Northern Mariana Islands", code: "MP"}, 
{name: "Norway", code: "NO"}, 
{name: "Oman", code: "OM"}, 
{name: "Pakistan", code: "PK"}, 
{name: "Palau", code: "PW"}, 
{name: "Palestinian Territory, Occupied", code: "PS"}, 
{name: "Panama", code: "PA"}, 
{name: "Papua New Guinea", code: "PG"}, 
{name: "Paraguay", code: "PY"}, 
{name: "Peru", code: "PE"}, 
{name: "Philippines", code: "PH"}, 
{name: "Pitcairn", code: "PN"}, 
{name: "Poland", code: "PL"}, 
{name: "Portugal", code: "PT"}, 
{name: "Puerto Rico", code: "PR"}, 
{name: "Qatar", code: "QA"}, 
{name: "Reunion", code: "RE"}, 
{name: "Romania", code: "RO"}, 
{name: "Russian Federation", code: "RU"}, 
{name: "RWANDA", code: "RW"}, 
{name: "Saint Helena", code: "SH"}, 
{name: "Saint Kitts and Nevis", code: "KN"}, 
{name: "Saint Lucia", code: "LC"}, 
{name: "Saint Pierre and Miquelon", code: "PM"}, 
{name: "Saint Vincent and the Grenadines", code: "VC"}, 
{name: "Samoa", code: "WS"}, 
{name: "San Marino", code: "SM"}, 
{name: "Sao Tome and Principe", code: "ST"}, 
{name: "Saudi Arabia", code: "SA"}, 
{name: "Senegal", code: "SN"}, 
{name: "Serbia", code: "RS"}, 
{name: "Seychelles", code: "SC"}, 
{name: "Sierra Leone", code: "SL"}, 
{name: "Singapore", code: "SG"}, 
{name: "Slovakia", code: "SK"}, 
{name: "Slovenia", code: "SI"}, 
{name: "Solomon Islands", code: "SB"}, 
{name: "Somalia", code: "SO"}, 
{name: "South Africa", code: "ZA"}, 
{name: "South Georgia and the South Sandwich Islands", code: "GS"}, 
{name: "Spain", code: "ES"}, 
{name: "Sri Lanka", code: "LK"}, 
{name: "Sudan", code: "SD"}, 
{name: "Suriname", code: "SR"}, 
{name: "Svalbard and Jan Mayen", code: "SJ"}, 
{name: "Swaziland", code: "SZ"}, 
{name: "Sweden", code: "SE"}, 
{name: "Switzerland", code: "CH"}, 
{name: "Syrian Arab Republic", code: "SY"}, 
{name: "Taiwan, Province of China", code: "TW"}, 
{name: "Tajikistan", code: "TJ"}, 
{name: "Tanzania, United Republic of", code: "TZ"}, 
{name: "Thailand", code: "TH"}, 
{name: "Timor-Leste", code: "TL"}, 
{name: "Togo", code: "TG"}, 
{name: "Tokelau", code: "TK"}, 
{name: "Tonga", code: "TO"}, 
{name: "Trinidad and Tobago", code: "TT"}, 
{name: "Tunisia", code: "TN"}, 
{name: "Turkey", code: "TR"}, 
{name: "Turkmenistan", code: "TM"}, 
{name: "Turks and Caicos Islands", code: "TC"}, 
{name: "Tuvalu", code: "TV"}, 
{name: "Uganda", code: "UG"}, 
{name: "Ukraine", code: "UA"}, 
{name: "United Arab Emirates", code: "AE"}, 
{name: "United Kingdom", code: "GB"}, 
{name: "United States", code: "US"}, 
{name: "United States Minor Outlying Islands", code: "UM"}, 
{name: "Uruguay", code: "UY"}, 
{name: "Uzbekistan", code: "UZ"}, 
{name: "Vanuatu", code: "VU"}, 
{name: "Venezuela", code: "VE"}, 
{name: "Viet Nam", code: "VN"}, 
{name: "Virgin Islands, British", code: "VG"}, 
{name: "Virgin Islands, U.S.", code: "VI"}, 
{name: "Wallis and Futuna", code: "WF"}, 
{name: "Western Sahara", code: "EH"}, 
{name: "Yemen", code: "YE"}, 
{name: "Zambia", code: "ZM"}, 
{name: "Zimbabwe", code: "ZW"} 
],
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
                required,
                email
            },
            contactnumber: {
                required,
                numeric
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
                required,
                numeric
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
.hpanel .alert{font-size:16px; margin-bottom:22px;}
</style>