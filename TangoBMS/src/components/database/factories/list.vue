<template>
<div class="content">
	<div class="row">
		<div class="col-md-12">
			<div class="panel-body">
			<div class="m-b10 text-right"><router-link to="/add-factories" class="btn btn-primary m-r5" title="Add Factory"><i aria-hidden="true" class="fa fa-plus"></i> Add Factory</router-link>
			<a href="javascript:void(0)" class="btn btn-primary m-r5" title="Print Details"><i class="fa fa-print m-r0"></i></a>
			<a href="javascript:void(0)" class="btn btn-primary" title="Export to Excel"><i class="fa fa-file-excel-o m-r0"></i></a>
			</div>
			<!--List of factories-->
			<table class="table table-striped table-bordered table-hover">
			    <tr> 
	                <td title="'Ref. No.'" width="10%">
	                    <span>factory.ReferenceNumber</span>
	                </td>
			        <td title="'Factory Name'">
			            factory.FactoryName</td>
			        <td title="'Point of Contact'" width="15%">
			            factory.PointOfContact</td>
			        <td title="'Designation'">
			            factory.Designation</td>
			        <td title="'Country'">
			            factory.CountryName</td>
			        <td title="'Email'" nowrap="true">
			            <a href="mailto:factory.Email">factory.Email</a></td>
			        <td align="center" title="'Contact No.'" width="10%">
			            factory.ISDCode-factory.ContactNumber</td>
			        <td align="center" title="'Total Orders'" width="10%" nowrap="true">
			            factory.TotalOrder</td>
			        <td title="'Action'" align="center" nowrap="true" width="1%">
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
	            <tr>
	                <td colspan="8">
	                    <span>No records available</span>
	                </td>
	            </tr>
		</table>
		<div class="pull-right form-inline show-results">
	                      <label>Show results per page:</label> <select id="pageSizeBinding" class="form-control input-sm"></select>
	                    </div><!-- /.show-results -->
		</div>
		</div><!-- /.panel-body -->
	</div>
</div>
</template>