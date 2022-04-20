- [Props / params](#component-props--params-of-the-android-imperative-api)

  - [`multiple` (`optional`)](#usage)
  - [`items` (`required`)](#)
  - [`setItems` (`required`)](#)
  - [`value` (`required`)](#)
  - [`setValue` (`required`)](#)
  - [`valueSelected` (`required`)](#)
  - [`setValueSelected` (`required`)](#)
  - [`disabled` (`optional`)](#)
  - [`schema` (`optional`)](#)

  - [`title` (`required`)](#)
  - [`required` (`optional`)](#)
  - [`isValid` (`optional`)](#)
  - [`setIsChecked` (`optional`)](#)

  - [`placeholder` (`optional`)](#usage)
  - [`showArrowIcon` (`optional`)](#)

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

### `value` (`required`)

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
