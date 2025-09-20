# Node MVC CRUD Product Supplier

## Mô tả dự án
Dự án này là một ứng dụng Node.js sử dụng mô hình MVC để quản lý sản phẩm và nhà cung cấp. Ứng dụng hỗ trợ các chức năng CRUD cho sản phẩm và nhà cung cấp, sử dụng Express, MongoDB, BootStrap cho giao diện, lưu cấu hình trong file .env, và mô tả API bằng Swagger.

## Yêu cầu bắt buộc
1. **Sử dụng BootStrap cho phần view**: Giao diện sử dụng BootStrap để đảm bảo hiện đại, dễ sử dụng và responsive.
2. **Thông tin cấu hình đặt trong .env**: Các thông tin như chuỗi kết nối database, cổng server... đều được đặt trong file .env.
3. **Sử dụng gitignore không commit node_modules hoặc tập tin .env**: Đã cấu hình .gitignore để loại trừ các file này khỏi commit.
4. **Tạo file readme trong repository để mô tả dự án**: File này mô tả tổng quan, cách chạy, cấu trúc và các yêu cầu kỹ thuật.
5. **Cấu hình swagger để mô tả các Restful APIs**: Đã tích hợp Swagger để mô tả và kiểm thử các API.

## Hướng dẫn chạy dự án
1. Cài đặt dependencies:
   ```sh
   npm install
   ```
2. Tạo file `.env` theo mẫu `.env.example` và điền thông tin cấu hình.
3. Khởi động ứng dụng:
   ```sh
   npm start
   ```
4. Truy cập Swagger UI tại: `http://localhost:3000/api-docs`

## Công nghệ sử dụng
- Node.js
- Express
- MongoDB
- BootStrap
- Swagger

## Tác giả
Le Trong Hieu
# node-mvc-crud-product-supplier
