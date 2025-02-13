document.getElementById("yes").addEventListener("click", function () {
  // Cập nhật hình nền từ URL S3 (hoặc bất kỳ URL nào bạn muốn)
  document.getElementById("screen1").style.display = "none";
  document.getElementById("back-button").style.display = "flex";
  // Hiển thị trái tim sau khi người dùng nhấn vào "Có"
  document.getElementById("heart").style.display = "block"; // Hiển
  document.getElementById("text_troll").style.display = "block";
});

document.getElementById("back-button").addEventListener("click", function () {
  document.getElementById("back-button").style.display = "none";
  document.getElementById("screen1").style.display = "block";
  document.getElementById("heart").style.display = "none";
  let yesButton = document.getElementById("yes");
  let noButton = document.getElementById("no");

  // Đặt lại vị trí ban đầu của nút "Có" và "Không"
  yesButton.style.position = "relative";
  yesButton.style.left = "0";
  yesButton.style.top = "0";

  noButton.style.position = "relative";
  noButton.style.left = "0";
  noButton.style.top = "0";
  document.getElementById("text_troll").style.display = "none";
});

document.getElementById("no").addEventListener("click", function () {
  // Khi người dùng click vào "Không", nút "Không" sẽ nhảy đi
  let noButton = document.getElementById("no");
  let parentContainer = document.querySelector(".choices");
  let randomX = Math.random() * (300 - noButton.offsetWidth);
  let randomY = Math.random() * (250 - noButton.offsetHeight);

  // Di chuyển nút "Không" trong vùng 200px
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  noButton.style.position = "absolute";
});
