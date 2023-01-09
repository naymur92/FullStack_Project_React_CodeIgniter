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
          <h1 class="m-0">Categories</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= site_url(); ?>">Home</a></li>
            <li class="breadcrumb-item active">All Categories</li>
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
              <h3 class="card-title">Category List</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Create Date</th>
                    <th>Update Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  foreach ($categories as $category) :
                  ?>
                    <tr>
                      <td><?= $category['cat_id'] ?></td>
                      <td><?= $category['category_name'] ?></td>
                      <td><?= $category['category_desc'] ?></td>
                      <td>
                        <img src="/assets/images/categories/<?= $category['category_image']; ?>" class="img-thumbnail" width="100px" alt="">
                      </td>
                      <td><?= date("d M, Y - h:i A", strtotime($category['created_at'])); ?></td>
                      <td><?= $category['updated_at'] == 0 ? '' : date("d M, Y - h:i A", strtotime($category['updated_at'])); ?></td>
                      <td class="d-flex justify-content-center">
                        <!-- <a href="<?php // echo site_url('categories/show/' . $category['cat_id']); 
                                      ?>" class="mx-2"><i class="fa fa-eye text-primary"></i></a> -->
                        <a href="<?= site_url('categories/edit/' . $category['cat_id']); ?>" class="mx-2"><i class="fa fa-pen text-success"></i></a>
                        <a href="<?= base_url('categories/delete/' . $category['cat_id']); ?>" class="mx-2 delete" onclick="confirm('Are you sure want to delete?')"><i class="fa fa-trash text-danger"></i></a>
                      </td>
                    </tr>
                  <?php
                  endforeach;
                  ?>
                </tbody>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Create Date</th>
                    <th>Update Date</th>
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

    $(".delete").click(function(e) {
      e.preventDefault();
      var link = this.href;
      var dataJson = {
        [csrfName]: csrfHash
      };

      $.ajax({
        url: link,
        type: 'post',
        data: dataJson,
        success: function() {
          location.reload();
        }
      });
    });
  });
</script>