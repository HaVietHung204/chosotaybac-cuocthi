# Trang giới thiệu dự thi — Chợ Số Tây Bắc

Trang tĩnh (HTML/CSS/JS, không cần build) để giới thiệu dự án và chiếu video dự thi.
Chạy riêng, không liên quan máy chủ chosotaybac.vn.

## Đưa lên GitHub Pages (miễn phí)

1. Tạo repo **công khai** mới trên GitHub, ví dụ `chosotaybac-cuocthi`, rồi đưa toàn bộ thư mục này lên (gồm cả file `.nojekyll`).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, thư mục `/ (root)` → Save.
   Sau 1–2 phút trang chạy ở `https://<tên-tài-khoản>.github.io/chosotaybac-cuocthi/`.

## Gắn tên miền phụ (tuỳ chọn), ví dụ `cuocthi.chosotaybac.vn`

1. Cloudflare → DNS → thêm bản ghi **CNAME**: Tên `cuocthi`, Trỏ tới `<tên-tài-khoản>.github.io`, **mây xám (DNS only)**.
2. GitHub repo → Settings → Pages → *Custom domain*: `cuocthi.chosotaybac.vn` → Save → đợi rồi bật **Enforce HTTPS**.
3. Nên xác minh tên miền: GitHub → Settings (tài khoản) → Pages → *Add a domain* (thêm bản ghi TXT mà GitHub đưa ra vào Cloudflare).

Web chính chosotaybac.vn không bị ảnh hưởng.

## Sửa nội dung

- **Đổi video**: trong `index.html` tìm `t3buCFcvXBs` (3 chỗ) và thay bằng mã video mới (phần sau `youtu.be/`).
  Video trên YouTube để chế độ *Không công khai* hoặc *Công khai*, và bật *Cho phép nhúng*.
- **Ảnh đội**: `assets/team/hung.jpg`, `assets/team/dung.jpg` (640×800), `assets/team/doi.jpg` (1200×900). Thay file cùng tên là xong.
- **Clip demo**: `assets/demo/demo-1..7.mp4` + ảnh bìa `.jpg`. Mỗi file phải dưới 100 MB (giới hạn của GitHub).
- Không đưa số liệu chưa có thật lên trang.
