// Video dự thi: chỉ tải YouTube khi người xem bấm (trang mở nhanh hơn).
document.querySelectorAll('.player[data-youtube]').forEach(function (box) {
  var btn = box.querySelector('.player__btn');
  if (!btn) return;
  // Ảnh bìa YouTube không tải được (mạng chặn) → dùng ảnh đội.
  var cover = btn.querySelector('img');
  if (cover) {
    var useFallback = function () { cover.src = 'assets/team/doi.jpg'; cover.style.objectPosition = 'center 30%'; };
    cover.addEventListener('error', useFallback, { once: true });
    if (cover.complete && cover.naturalWidth === 0) useFallback();
  }
  btn.addEventListener('click', function () {
    var id = box.getAttribute('data-youtube');
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1';
    frame.title = 'Video dự thi Chợ Số Tây Bắc';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    box.replaceChild(frame, btn);
  });
});

// Bật một clip demo thì dừng các clip khác.
var clips = document.querySelectorAll('.demo video');
clips.forEach(function (v) {
  v.addEventListener('play', function () {
    clips.forEach(function (o) { if (o !== v) o.pause(); });
  });
});
