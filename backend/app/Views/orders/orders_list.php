<?= view('layouts/header_data-table'); ?>
<?= view('layouts/navbar'); ?>
<?= view('layouts/main_sidebar'); ?>

<?php if (session()->has('msg')) : ?>
  <script>
    function tempAlert(msg, duration) {
      var el = document.createElement("div");
      el.setAttribute('class', 'alert alert-success text-white');
      el.setAttribute("style", "position:absolute;top:20%;left:50%;");
      el.innerHTML = msg;
      setTimeout(function() {
        el.parentNode.removeChild(el);
      }, duration);
      document.body.appendChild(el);
    }

    tempAlert('<?= session()->msg; ?>', 5000);
  </script>
<?php endif; ?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Orders</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item active">All Orders</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Orders List</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <pre>
                <?php
                // print_r($orders);
                //print_r($orderdetails);
                //print_r($delivery_addresses); 
                ?>
              </pre>
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>Order Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  foreach ($orders as $index => $order) :
                  ?>
                    <tr>
                      <td class="align-middle text-center"><?= $index + 1; ?></td>
                      <td>
                        <ul>
                          <?php
                          foreach ($orderdetails as $ord_det) :
                            if ($ord_det['order_id'] == $order['order_id']) :
                          ?>
                              <li><?= $ord_det['product_name'] . ' - (' . $ord_det['product_quantity'] . ')'; ?></li>
                          <?php
                            endif;
                          endforeach;
                          ?>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <?php
                          foreach ($orderdetails as $ord_det) :
                            if ($ord_det['order_id'] == $order['order_id']) :
                          ?>
                              <li><strong>&#2547;</strong> <?= $ord_det['product_price']; ?></li>
                          <?php
                            endif;
                          endforeach;
                          ?>
                        </ul>
                      </td>
                      <td class="align-middle text-center"><strong>&#2547;</strong> <?= $order['total_price'] ?></td>
                      <td class="align-middle text-center"><?= $order['order_status'] ?></td>
                      <td class="align-middle">
                        <?php
                        foreach ($delivery_addresses as $ord_addr) :
                          if ($ord_addr['order_id'] == $order['order_id']) :
                        ?>
                            <address>
                              <?= $ord_addr['customer_name'] ?>, <br>
                              <?= $ord_addr['dv_address'] ?>, <br>
                              <?= $ord_addr['dv_zip'] ?>, <br>
                              <?= $ord_addr['dv_phone'] ?> <br>
                            </address>
                        <?php
                          endif;
                        endforeach;
                        ?>
                      </td>
                      <td class="align-middle text-center"><?= date("d M, Y - h:i A", strtotime($order['created_at'])); ?></td>
                      <td class="d-flex justify-content-center">


                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="<?= site_url('orders/show/' . $order['order_id']); ?>" class="dropdown-item"><i class="fa fa-eye text-primary mr-1"></i> View Order</a>

                            <?php if ($order['order_status'] == 'pending') : ?>
                              <a href="<?= base_url('orders/update/' . $order['order_id']); ?>" status="confirmed" class="dropdown-item changestatus"><i class="fa fa-check text-primary mr-1"></i> Confirm Order</a>
                              <a href="<?= base_url('orders/update/' . $order['order_id']); ?>" status="cancelled" class="dropdown-item changestatus"><i class="fa fa-times text-warning mr-1"></i> Cancel Order</a>
                            <?php endif; ?>

                            <?php if ($order['order_status'] == 'cancelled') : ?>
                              <a href="<?= base_url('orders/delete/' . $order['order_id']); ?>" class="dropdown-item delete" onclick="confirm('Are you sure want to delete?')"><i class="fa fa-trash text-danger mr-1"></i> Delete Order</a>
                            <?php endif; ?>

                            <?php if ($order['order_status'] == 'confirmed') : ?>
                              <a href="<?= base_url('orders/update/' . $order['order_id']); ?>" status="delivered" class="dropdown-item changestatus"><i class="fa fa-check text-success mr-1"></i> Mark Delivered</a>
                            <?php endif; ?>

                          </div>
                        </div>

                      </td>
                    </tr>
                  <?php
                  endforeach;
                  ?>
                </tbody>
                <tfoot>
                  <tr>
                    <th>SL No.</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>Order Time</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>

      </div>
      <!-- /.row -->
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?= view('layouts/footer_data-table'); ?>

<script>
  $(function() {
    var csrfName = '<?= csrf_token(); ?>',
      csrfHash = '<?= csrf_hash(); ?>';

    // $(".delete").click(function(e) {
    //   e.preventDefault();
    //   var link = this.href;
    //   var dataJson = {
    //     [csrfName]: csrfHash
    //   };

    //   $.ajax({
    //     url: link,
    //     type: 'post',
    //     data: dataJson,
    //     success: function() {
    //       location.reload();
    //     }
    //   });
    // });

    $('.changestatus').click(function(e) {
      e.preventDefault();
      var cur = $(this);
      var link = cur.attr('href');
      var status = cur.attr('status');
      // alert(link)
      // alert(status);
      var dataJson = {
        [csrfName]: csrfHash,
        status
      };

      $.ajax({
        url: link,
        type: 'post',
        data: dataJson,
        success: function(data) {
          location.reload();
          // alert(data)
        }
      });
    });

  });
</script>