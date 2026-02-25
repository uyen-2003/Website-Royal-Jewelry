// Khi trang được tải, gửi yêu cầu để lấy nội dung của các file HTML và chèn vào các div tương ứng
window.addEventListener("DOMContentLoaded", function () {
  fetch("head.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("head").innerHTML = data;
    });
  fetch("head-link.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("head-link").innerHTML = data;
    });
  fetch("introduce.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("introduce").innerHTML = data;
    });
  fetch("group.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("group").innerHTML = data;
    });
  fetch("members.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("members").innerHTML = data;
    });
});
