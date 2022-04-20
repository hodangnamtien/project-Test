# Placeholder

Khi không có mục nào được chọn. Giá trị cho bộ chọn một mục là rỗng và đối với nhiều bộ chọn mục là []

```javascript
const [valueSelected, setValueSelected] = useState(null); // Single
const [valueSelected, setValueSelected] = useState([]); // Multiple

<DropDownPicker
  valueSelected={valueSelected}
  ...
/>
```

### Placeholder Text

#### placeholder

Default:

```javascript
placeholder = "Select";
```

# Search

### disableLocalSearch

Vô hiệu hóa tìm kiếm cho những dữ liệu có sẵn.

```javascript
  searchPlaceholder={false}
```

| Type    | Default |
| ------- | ------- |
| boolean | false   |

### searchPlaceholder

Default:

```javascript
  searchPlaceholder={'Search'}
```

# Modal

### modalTitle

Nếu `searchable={false}`.

```javascript
  modalTitle={''}
```

> Tao là siêu nhân

# List and Items

### closeAfterSelecting

Đóng selection khi đã chọn 1 mục.

```javascript
  closeAfterSelecting={true}
```

| Type    | Default |
| ------- | ------- |
| boolean | true    |
