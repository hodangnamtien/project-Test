
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
Giá trị mặc định:
```
  placeholder="Select"

```
# Search
### disableLocalSearch
Vô hiệu hóa tìm kiếm cho những dữ liệu cục bộ

```
  searchPlaceholder={false}
```
| Type |Default |
| ----------|-----------------|
| boolean |false |




