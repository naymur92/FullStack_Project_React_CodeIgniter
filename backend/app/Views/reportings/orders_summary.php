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
          <h1 class="m-0">Orders Summary</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item active">Orders Summary</li>
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
          <form action="" class="my-4 d-flex align-items-center" id="report_form">
            <!-- <?= csrf_field(); ?> -->

            <div class="form-group d-flex justify-content-between align-items-center">
              <label style="min-width: fit-content;" for="st_date">Start Date:</label>
              <input type="date" id="st_date" required class="form-control mx-2">
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
              <label style="min-width: fit-content;" for="end_date">End Date:</label>
              <input type="date" id="end_date" required class="form-control mx-2">
            </div>

            <div class="form-group">
              <select name="status" id="status" class="form-control mx-2">
                <option value="" selected hidden>Select Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div class="form-group mx-3">
              <input type="button" id="submit" value="Generate Report" class="btn btn-success mx-2">
              <input type="reset" value="Reset" class="btn btn-outline-danger">
            </div>
          </form>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Orders List</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body" id="data_container">
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
  $(document).ready(function() {
    $("#submit").click(function() {
      var startdate = $("#st_date").val();
      var enddate = $("#end_date").val();
      var status = $('#status').val();

      $.get(
        '<?= base_url('reportings/makeordersummary') ?>', {
          startdate,
          enddate,
          status
        },
        function(data) {
          // alert(data);
          $('#data_container').html(data);

          // This for data table
          $('#example1').DataTable({
            "destroy": true, //use for reinitialize datatable
            "responsive": true,
            "lengthChange": false,
            "autoWidth": false,
            "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
          }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
        }
      );
    });
  });
</script>