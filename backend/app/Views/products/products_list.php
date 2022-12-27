<?= view('layouts/header_data-table'); ?>
<?= view('layouts/navbar'); ?>
<?= view('layouts/main_sidebar'); ?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Products</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item active">All Products</li>
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
              <h3 class="card-title">DataTable with default features</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>Product Name</th>
                    <th>Product Details</th>
                    <th>Product Price</th>
                    <th>Creation Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $sl_no = 1;
                  foreach ($products as $product) :
                  ?>
                    <tr>
                      <td><?= $sl_no; ?></td>
                      <td><?= $product['product_name']; ?></td>
                      <td><?= $product['product_details']; ?></td>
                      <td>Tk. <?= $product['product_price']; ?></td>
                      <td><?= date("d M, Y - h:i A", strtotime($product['product_creation_time'])); ?></td>
                      <td>
                        <a href="/products/show/<?= $product['id']; ?>" class="mx-2"><i class="fa fa-eye text-primary"></i></a>
                        <a href="/products/edit/<?= $product['id']; ?>" class="mx-2"><i class="fa fa-pen text-success"></i></a>
                        <a href="/products/delete/<?= $product['id']; ?>" class="mx-2"><i class="fa fa-trash text-danger"></i></a>
                      </td>
                    </tr>
                  <?php
                    $sl_no++;
                  endforeach;
                  ?>
                </tbody>
                <tfoot>
                  <tr>
                    <th>SL No.</th>
                    <th>Product Name</th>
                    <th>Product Details</th>
                    <th>Product Price</th>
                    <th>Creation Time</th>
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