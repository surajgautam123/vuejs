<template>
    <div class="modal-header">
        <button type="button" class="close">
            <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Factory Details</h4>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <th width="20%">Factory Name:</th>
                            <td width="30%">
                                <label>attributes.FactoryName</label>
                            </td>
                            <th width="20%">Point of Contact:</th>
                            <td width="30%">
                                <label>attributes.PointOfContact</label>
                            </td>
                        </tr>
                        <tr>
                            <th>Designation:</th>
                            <td><label>attributes.Designation</label></td>
                            <th>Country:</th>
                            <td><label>attributes.CountryName</label></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><a href="mailto:mfCtrl.attributes.Email">mfCtrl.attributes.Email</a></td>

                            <th>Contact No.:</th>
                            <td><label>attributes.ISDCode</label>-<label>attributes.ContactNumber</label></td>
                        </tr>
                        <tr>
                            <th>Total Orders:</th>
                            <td><label>attributes.TotalOrder</label></td>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>