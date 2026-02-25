//xử lý ảnh sản phẩm bên trái
function changeProductImage(imageSrc) {
    var mainProductImage = document.getElementById('mainProductImage');
    mainProductImage.src = imageSrc;
}
  
function showDetails(element) {
  var content = element.querySelector('div');
  content.style.display = 'block';
}

function hideDetails(element) {
  var content = element.querySelector('div');
  content.style.display = 'none';
}
//nút thêm - bớt số lượng
function decreaseQuantity() {
  var quantityInput = document.querySelector('.quantity');
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}

function increaseQuantity() {
  var quantityInput = document.querySelector('.quantity');
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

//nút yêu thích sản phẩm
$(document).ready(function() {
  $('.btn-like').click(function() {
    var icon = $(this).find('i');
    
    if (icon.hasClass('far')) {
      icon.removeClass('far fa-heart');
      icon.addClass('fa fa-heart');
    } else {
      icon.removeClass('fa fa-heart');
      icon.addClass('far fa-heart');
    }
  });
});

//nút thêm vào giỏ hàng
document.getElementById("addToCart").addEventListener("click", function() {
  Swal.fire({
    title: "Add to cart successfully",
    text: "The product has been added to cart !",
    icon: "success",
    confirmButtonText: "Close",
    iconColor: "#4e7a64",
    customClass: {
      confirmButton: "custom-confirm-button-class"
    }
  });
});
