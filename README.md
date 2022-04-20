
# Placeholder
When no item is selected, the placeholder is displayed and prompts the user to select an item.
The value for single item pickers is null and for multiple item pickers it's []


```javascript
const [valueSelected, setValueSelected] = useState(null); // Single
const [valueSelected, setValueSelected] = useState([]); // Multiple

<DropDownPicker
  valueSelected={valueSelected}
  ...
/>
```
### Placeholder Text
Both of the following properties are available.

#### placeholder
```
  placeholder="Chọn" // Language VI
  placeholder="Select" // Language EN
```

