<template>
    <div class="content">
    <div class="row">
        <div class="col-lg-4">
            <div class="hpanel hgreen">
                <div class="panel-body">
                    <div class="pull-right text-right">
                        <div class="btn-group">
                            <a href="javascript:void(0)" title="Facebook"><i class="fa fa-facebook btn btn-default btn-xs"></i></a>
                            <a href="javascript:void(0)" title="Twitter"><i class="fa fa-twitter btn btn-default btn-xs"></i></a>
                            <a href="javascript:void(0)" title="Linkedin"><i class="fa fa-linkedin btn btn-default btn-xs"></i></a>
                        </div>
                    </div>
                    <img alt="logo" class="img-circle m-b m-t-md" src="/dist/profile.jpg">
                    <h3><a href="">Suraj Gautam</a></h3>
                    <div class="text-muted font-bold m-b-xs">Indore, INDIA</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.
                    </p>
                    <uib-progressbar value="65" type="success" class="progress-small full progress-striped active"></uib-progressbar>
                </div>
                <div class="panel-body">
                    <dl>
                        <dt>Description lists</dt>
                        <dd>A description list is perfect for defining terms.</dd>
                        <dt>Euismod</dt>
                        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                        <dt>Malesuada porta</dt>
                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    </dl>
                </div>
                <div class="panel-footer contact-footer">
                    <div class="row">
                        <div class="col-md-4 border-right">
                            <div class="contact-stat"><span>Projects: </span> <strong>200</strong></div>
                        </div>
                        <div class="col-md-4 border-right">
                            <div class="contact-stat"><span>Messages: </span> <strong>300</strong></div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-stat"><span>Views: </span> <strong>400</strong></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-lg-8">
            <div class="hpanel">
                <div class="hpanel">
                    <tabset>
                        <tab>
                            <tab-heading>
                                Project
                            </tab-heading>
                            <div class="panel-body">
                                <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>

                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of
                                    existence in this spot, which was created for the bliss of souls like mine.</p>

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Project </th>
                                            <th>Name </th>
                                            <th>Phone </th>
                                            <th>Company </th>
                                            <th>Completed </th>
                                            <th>Task</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Project <small>This is example of project</small></td>
                                            <td>Patrick Smith</td>
                                            <td>0800 051213</td>
                                            <td>Inceptos Hymenaeos Ltd</td>
                                            <td><pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-success"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Alpha project</td>
                                            <td>Alice Jackson</td>
                                            <td>0500 780909</td>
                                            <td>Nec Euismod In Company</td>
                                            <td><pie-chart :data="[['Hello', 64], ['Hey', 23]]"></pie-chart></td>
                                            <td>40%</td>
                                            <td>Jul 16, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-success"></i></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </tab>
                        <tab>
                            <tab-heading>
                                Messages
                            </tab-heading>
                            <div class="panel-body no-padding">

                                <div class="chat-discussion" style="height: auto">

                                    <div class="chat-message" >
                                        <img class="message-avatar" src="images/profile.jpg" alt="" >
                                        <div class="message">
                                            <a class="message-author" href="#"> Michael Smith </a>
                                            <span class="message-date"> Mon Jan 26 2015 - 18:39:23 </span>
                                                <span class="message-content">
    											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                </span>

                                            <div class="m-t-md">
                                                <a class="btn btn-xs btn-default"><i class="fa fa-thumbs-up"></i> Like </a>
                                                <a class="btn btn-xs btn-success"><i class="fa fa-heart"></i> Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-message">
                                        <img class="message-avatar" src="images/profile.jpg" alt="" >
                                        <div class="message">
                                            <a class="message-author" href="#"> Karl Jordan </a>
                                            <span class="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                                <span class="message-content">
    											Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.
                                                </span>
                                            <div class="m-t-md">
                                                <a class="btn btn-xs btn-default"><i class="fa fa-thumbs-up"></i> Like </a>
                                                <a class="btn btn-xs btn-default"><i class="fa fa-heart"></i> Love</a>
                                                <a class="btn btn-xs btn-primary"><i class="fa fa-pencil"></i> Message</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-message">
                                        <img class="message-avatar" src="images/profile.jpg" alt="" >
                                        <div class="message">
                                            <a class="message-author" href="#"> Michael Smith </a>
                                            <span class="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                                <span class="message-content">
    											There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                </span>
                                        </div>
                                    </div>
                                    <div class="chat-message">
                                        <img class="message-avatar" src="images/profile.jpg" alt="" >
                                        <div class="message">
                                            <a class="message-author" href="#"> Michael Smith </a>
                                            <span class="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                                <span class="message-content">
    											There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab>
                    </tabset>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    
</script>