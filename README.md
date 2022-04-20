- [Props / params](#component-props--params-of-the-android-imperative-api)

  - [`multiple` (`optional`)](#usage)
  - [`items` (`required`)](#items-required)
  - [`setItems` (`required`)](#setitems-required)
  - [`value` (`required`)](#value-required)
  - [`setValue` (`required`)](#setvalue-required)
  - [`valueSelected` (`required`)](#valueselected-required)
  - [`setValueSelected` (`required`)](#setvalueselected-required)
  - [`disabled` (`optional`)](#)
  - [`schema` (`optional`)](#item-schema)

  - [`title` (`required`)](#title-required)
  - [`required` (`optional`)](#required-optional)
  - [`isValid` (`optional`)](#isvalid-optional)
  - [`setIsChecked` (`optional`)](#setischecked-optional)

  - [`placeholder` (`optional`)](#placeholder-optional)
  - [`showArrowIcon` (`optional`)](#showarrowicon-optional)

  - [`renderLabelItem` (`optional`)]()
  - [`showIconRemove` (`optional`)]()
  - [`fullWidthItemLabel` (`optional`)]()
  - [`showNumberItem` (`optional`)]()
  - [`showAll` (`optional`)]()

  - [`modalTitle` (`optional`)](#modaltitle)
  - [`searchable` (`optional`)](#search)
  - [`disableLocalSearch` (`optional`)](#disablelocalsearch)
  - [`searchPlaceholder` (`optional`)](#searchplaceholder)
  - [`searchValue` (`optional`)]()
  - [`setSearchValue` (`optional`)]()
  - [`onChangeSearchText` (`optional`)]()
  - [`closeAfterSelecting` (`optional`)](#closeafterselecting)
  - [`renderItem` (`optional`)]()
  - [`showTickIcon` (`optional`)]()

  - [`min` (`optional`)]()
  - [`max` (`optional`)]()

  - [`disableLoadMore` (`optional`)]()
  - [`refreshing` (`optional`)]()
  - [`onRefresh` (`optional`)]()
  - [`onEndReached` (`optional`)]()

# Usage

### Single item

Chỉ chọn 1 mục. `multiple={false}`

```js
import Selection from "@components";

const App: React.FC<Props> = (props) => {
  const [value, setValue] = useState(null);
  const [valueSelected, setValueSelected] = useState(null);
  const [items, setItems] = useState([
    { label: "Javascript", value: "1" },
    { label: "Typescript", value: "2" },
  ]);

  return (
    <Selection
      items={items}
      setItems={setItems}
      value={value}
      setValue={setValue}
      valueSelected={valueSelected}
      setValueSelected={setValueSelected}
      ...
    />
  );
};
```

### Multiple items

Chọn nhiều mục. `multiple={true}`

```js
const App: React.FC<Props> = (props) => {
  const [value, setValue] = useState([]);
  const [valueSelected, setValueSelected] = useState([]);
  const [items, setItems] = useState([
    { label: "Javascript", value: "1" },
    { label: "Typescript", value: "2" },
  ]);

  return (
    <Selection
      multiple={true}
      items={items}
      setItems={setItems}
      value={value}
      setValue={setValue}
      valueSelected={valueSelected}
      setValueSelected={setValueSelected}
      ...
    />
  );
};
```

# Item schema

### Default schema

```js
schema={{
  label: 'label', // required
  value: 'value', // required
}}
```

### Customize the schema

```js
const remoteItems = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
];

<Selection
  schema={{
    label: 'title',
    value: 'id'
  }}
  ...
/>
```

### `items` (`required`)

Biến để chứa các mục.

```js
<Selection item={items} />
```

| Type                         | Required |
| ---------------------------- | -------- |
| [`ItemType`](#item-schema)[] | true     |

### `setItems` (`required`)

`State callback` được gọi để sửa đổi, xóa bỏ, hoặc thêm những mục mới.

```js
<Selection setItems={setItems} />
```

### `value` (`required`)

Chỉ chứa những giá trị `unique` để gửi cho BE.

```js
<Selection value={value} />
```

Dành cho `single`:
| Type | Required |
| ----- | -------- |
| ValueType | true |

Dành cho `multiple`:
| Type | Required |
| ----- | -------- |
| ValueType[] | true |

> [`ValueType`]() = string | number, thuộc field `value` trong object schema

### `setValue` (`required`)

`State callback` được gọi để cập nhật khi giá trị chọn thay đổi

```js
<Selection setValue={setValue} />
```

| Type                                     | Required |
| ---------------------------------------- | -------- |
| (callback: [`SetStateAction`]()) => void | true     |

### `valueSelected` (`required`)

Chứa dữ liệu để hiển thị `label` cho những mục được chọn.

Dành cho `single`:
| Type | Required |
| ---------------------------- | -------- |
| [`ItemType`](#item-schema) | true |

Dành cho `multiple`:

| Type                         | Required |
| ---------------------------- | -------- |
| [`ItemType`](#item-schema)[] | true     |

### `setValueSelected` (`required`)

`State callback` được gọi để cập nhật khi giá trị chọn thay đổi

```js
<Selection setValueSelected={setValueSelected} />
```

| Type                                     | Required |
| ---------------------------------------- | -------- |
| (callback: [`SetStateAction`]()) => void | true     |

### `title` (`required`)

Tiêu đề của selection.

```js
<Selection title={"Title"} />
```

| Type   | Required |
| ------ | -------- |
| string | true     |

### `required` (`optional`)

```js
    required={true} // Field bắt buộc
    required={false} // Field không bắt buộc
```

```js
<Selection required={true} />
```

| Type    | Default |
| ------- | ------- |
| boolean | false   |

### `isValid` (`optional`)

Được gọi để xử lý validation cho những field bắt buộc.

> Chỉ sử dụng props này khi `required={true}`

```js
<Selection isValid={true} />
```

| Type    | Default |
| ------- | ------- |
| boolean | false   |

### `setIsChecked` (`optional`)

Được gọi để thể hiện trạng thái đã vượt qua được kiểm tra validation hay chưa.

> Chỉ sử dụng props này khi `isValid={true}`

```js
const [checked, setChecked]= useState<boolean>(false)
<Selection isValid={true} setIsChecked={setChecked} />
```

| Type              | Default    |
| ----------------- | ---------- |
| Dispatch<boolean> | underfined |

### `placeholder` (`optional`)

Hiển thị khi chưa có giá trị nào được chọn.

```js
<Selection placeholder={'select'}>
```

| Type                 | Default  |
| -------------------- | -------- |
| string or underfined | 'select' |

### `showArrowIcon` (`optional`)

Chỉ định biểu tượng "Arrow" có hay không

```js
<Selection showArrowIcon={true}>
```

| Type    | Default |
| ------- | ------- |
| boolean | true    |

### `renderLabelItem` (`optional`)

```js
renderLabelItem={(props) => <View {...props} />}
```

| Type               | Default    |
| ------------------ | ---------- |
| void or underfined | underfined |

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
