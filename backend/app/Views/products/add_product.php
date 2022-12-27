<?= view('layouts/header_editor'); ?>
<?= view('layouts/navbar'); ?>
<?= view('layouts/main_sidebar'); ?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Add Product</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item"><a href="/products">Products</a></li>
            <li class="breadcrumb-item active">Add Product</li>
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
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="card">
            <div class="card-header bg-primary">
              <h1 class="text-center text-light">Product Entry Form</h1>
            </div>
            <form action="/products/create" method="POST">
              <div class="card-body">
                <div class="form-group">
                  <label for="_pname"><strong>Product Name:</strong></label>
                  <input type="text" id="_pname" name="product_name" value="<?= old('product_name'); ?>" placeholder="Enter Product Name" class="form-control">
                  <?php if (isset($validation)) : ?>
                    <div class="alert alert-warning"><?php print_r($validation->getErrors()) ?></div>
                  <?php endif; ?>
                </div>
                <div class="form-group">
                  <label for="summernote"><strong>Product Details:</strong></label>
                  <textarea id="summernote" name="product_details" row="5" class="form-control"><?= old('product_details'); ?></textarea>
                </div>
                <div class="form-group">
                  <label for="_pprice"><strong>Product Price:</strong></label>
                  <input type="number" id="_pprice" name="product_price" value="<?= old('product_name'); ?>" placeholder="Enter Product Price" class="form-control">
                </div>
              </div>
              <div class="card-footer">
                <input type="submit" value="Add Product" class="btn btn-success">
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?= view('layouts/footer_editor'); ?>