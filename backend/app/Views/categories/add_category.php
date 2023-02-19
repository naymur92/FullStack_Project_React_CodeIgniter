<?php
$session = session();
if ($session->has('errors')) {
  $errors = $session->errors;
}
?>

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
          <h1 class="m-0">Add Category</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item"><a href="<?= base_url('categories') ?>">Categories</a></li>
            <li class="breadcrumb-item active">Add Category</li>
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
              <h1 class="text-center text-light">Category Entry Form</h1>
            </div>
            <form action="<?= base_url('categories/create') ?>" method="POST" enctype="multipart/form-data">
              <?= csrf_field(); ?>
              <div class="card-body">
                <div class="form-group">
                  <label for="cat_name"><strong>Category Name:</strong></label>
                  <input type="text" id="cat_name" name="category_name" value="<?= old('category_name'); ?>" placeholder="Enter category Name" class="form-control">
                  <?php if (isset($errors['category_name'])) : ?>
                    <div class="alert alert-warning my-2"><?= $errors['category_name']; ?></div>
                  <?php endif; ?>
                </div>
                <div class="form-group">
                  <label for="summernote"><strong>Category Details:</strong></label>
                  <textarea id="summernote" name="category_desc" row="5" class="form-control"><?= old('category_desc'); ?></textarea>
                  <?php if (isset($errors['category_desc'])) : ?>
                    <div class="alert alert-warning my-2"><?= $errors['category_desc']; ?></div>
                  <?php endif; ?>
                </div>

                <div class="form-group">
                  <label for="cat_image"><strong>Category Image:</strong></label>
                  <input type="file" id="cat_image" name="category_image" onchange="readURL(this)" class="form-control">
                  <?php if (isset($errors['category_image'])) : ?>
                    <div class="alert alert-warning my-2"><?= $errors['category_image']; ?></div>
                  <?php endif; ?>

                  <!-- Show selected photo -->
                  <img src="" id="showSelectedPhoto" class="img-thumbnail mt-2" width="150px" alt="selected image">
                </div>
              </div>
              <div class="card-footer">
                <input type="submit" value="Add Category" class="btn btn-success float-right">
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