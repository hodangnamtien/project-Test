- [Props / params](#component-props--params-of-the-android-imperative-api)
  - [`multiple` (`optional, required`)](#usage)

# Usage

### Single item

Chỉ chọn 1 mục.

```js
import Selection from "@components";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <Selection
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
```

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

# List and Items

### closeAfterSelecting

Đóng selection khi đã chọn 1 mục.

```javascript
  closeAfterSelecting={true}
```

> ⚠️ NOTE

> Điều này chỉ hoạt động khi `multiple={false}`

| Type    | Default |
| ------- | ------- |
| boolean | true    |
