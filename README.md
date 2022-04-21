## Cấu trúc thư mục

```JS
+-- coverage // Lưu kết quả sau khi test
+-- db_schema // Các file sql để tạo database
+-- dist // Code sau khi đã build
+-- docker // Docker cho các môi trường
+-- src
|   +-- common
|   |   +-- config // Các cấu hình kết nối cho từng môi trường
|   |   +-- language
|   |   |   +-- error // Các file thông báo lỗi theo từng ngôn ngữ
|   |   |   +-- success // Các file thông báo thành công theo từng ngôn ngữ
|   |   +-- service
|   |   +-- type // Lưu các type/interface custom
|   |   +-- util // Nest Filters
|   |   |   +-- Common.ts // Các hàm dùng chung
|   +-- entity // Các model mapping với table trong database
|   +-- graphql
|   |   +-- input
|   |   +-- resolver // 1 resolver chỉ dùng cho 1 API
|   |   +-- response
|   |   +-- type_def
|   |   +-- NameQuery.ts // Lưu các tên query
|   +-- * // Các module khác
+-- test // Các file test
|   +-- Register.test.ts // 1 file test cho 1 api

// Cấu trúc 1 module
// Khi muốn export các file trong thư mục thì phải thông qua 1 file index
+-- src/employee
|   +-- controller
|   |   +-- Register.controller.ts // 1 file controller chỉ dùng cho 1 resolver graphql (API)
|   |   +-- index.ts
|   +-- service
|   |   +-- Employee.service.ts // 1 file tương ứng 1 table trong DB
|   |   +-- index.ts
|   +-- greeter.module.ts
|   +-- index.ts
```
