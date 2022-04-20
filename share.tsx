import { ErrorText, Icon, Separator, ThemedText, TitleText } from "@components";
import { colorOption, PAGINATION_LIMIT, TIME_DEBOUNCE } from "@constants";
import { useTheme } from "@hooks";
import { debounce } from "lodash";
import React, {
  Dispatch,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ListEmpty from "./component/ListEmpty";
import RenderLabelItem from "./component/RenderLabelItem";
import RenderListItem from "./component/RenderListItem";
import { styles } from "./styles";

type SetStateCallback<S> = (prevState: S) => S;
type SetStateValue<S> = (prevState: S) => S;

interface DropDownProps {
  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  multiple?: boolean;

  items: {
    label: string;
    value: string;
    selectable: string;
    disabled: string;
    testID: string;
  }[];

  setItems: Dispatch<SetStateCallback<any[]>>;

  setValue?: any;

  setOpen: Dispatch<SetStateValue<boolean>>;

  schema: {
    label: string;
    value: string;
    selectable: string;
    disabled: string;
    testID: string;
  };

  value?: any;

  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
  searchable?: boolean;

  /**
   * @default t('dropDownPicker.placeholder')
   */
  placeholder?: string;

  /**
   * @default t('dropDownPicker.searchPlaceholder')
   */
  searchPlaceholder?: string;

  /**
   * @default t('dropDownPicker.title')
   */
  title?: string;

  /**
   * @default t('dropDownPicker.modalTitle')
   */
  modalTitle?: string;

  /**
   * @default false
   */
  required?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default true
   */
  closeAfterSelecting?: boolean;

  /**
   *
   *
   */
  valueSelected?: any;
  setValueSelected?: any;

  /**
   * The minimum value of this component's range. (should be an integer)
   */
  min?: number | undefined;

  /**
   * The maximum value of this component's range. (should be an integer)
   */
  max?: number | undefined;

  /**
   * @default false
   */
  showAll?: boolean;

  /**
   * @default 10
   */
  showNumberItem?: number;

  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  disableLoadMore?: boolean;

  /**
   * @default false
   */
  fullWidthItemLabel: boolean;

  /**
   * @default true
   */
  showIconRemove?: boolean;

  renderLabelItem?: (item: any) => JSX.Element;

  /**
   * @default false
   */
  isValid?: boolean;

  setIsChecked?: Dispatch<boolean>;

  /**
   * @default false
   */
  disableLocalSearch?: boolean;

  /**
   * @default null
   */
  itemKey: string | null;

  /**
   * @default true
   */
  showTickIcon?: boolean;

  /**
   * @returns {JSX.Element}
   */
  renderItem?: (item: any) => JSX.Element;

  onChangeSearchValue?: (text: string) => void;
  searchValue?: string;
  setSearchValue?: any;
}

const defaultProps: DropDownProps = {
  loading: false,
  multiple: false,
  closeAfterSelecting: true,
  showAll: false,
  fullWidthItemLabel: false,
  showIconRemove: true,

  disableLocalSearch: false,

  itemKey: null,
  schema: {
    label: "",
    value: "",
    selectable: "",
    disabled: "",
    testID: "",
  },
  showTickIcon: true,
  items: [
    {
      label: "",
      value: "",
      selectable: "",
      disabled: "",
      testID: "",
    },
  ],
  setItems: function (value: SetStateCallback<any[]>): void {
    throw new Error("Function not implemented.");
  },
  showNumberItem: 10,
  setOpen: () => {},
};

const Picker: React.FC<DropDownProps> = (
  {
    value = null,
    items,
    open,
    placeholder,
    closeAfterSelecting,
    disabled,
    searchable,
    searchPlaceholder,
    modalTitle,
    schema,
    multiple,
    itemKey,

    loading = false,
    min,
    max,
    setOpen,
    setItems = () => {},

    onPress = (open: any) => {},
    onOpen = () => {},
    onClose = () => {},
    setValue = (callback: any) => {},

    onChangeSearchValue,
    disableLocalSearch = false,

    title,
    required,
    valueSelected,
    setValueSelected,
    showAll,
    onEndReached,
    disableLoadMore,
    searchValue,
    fullWidthItemLabel,
    showIconRemove,
    renderLabelItem,
    isValid,
    setIsChecked,
    renderItem,
    showNumberItem,
    showTickIcon,
    setSearchValue,
  },
  props
) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [searchText, setSearchText] = useState(searchValue);

  const pickerRef = useRef<any>(null);
  const memoryRef = useRef<any>({
    value: null,
    items: [],
  });

  /**
   * The item schema.
   * @returns {object}
   */
  const _schema = useMemo(() => ({ ...schema }), [schema]);

  /**
   * Update value in the memory.
   */
  useEffect(() => {
    memoryRef.current.value = value;
  }, [value]);

  /**
   * Validate component
   */
  useEffect(() => {
    const valueNotNull =
      value !== null && Array.isArray(value) && value.length !== 0;
    if (isValid) {
      if (required) {
        switch (multiple) {
          case true:
            if (valueNotNull) {
              setIsChecked && setIsChecked(true);
              setValid(undefined);
              return;
            } else {
              setIsChecked && setIsChecked(false);
              setValid(t("empty"));
              return;
            }
          case false:
            if (value !== null) {
              setIsChecked && setIsChecked(true);
              setValid(undefined);
              return;
            } else {
              setIsChecked && setIsChecked(false);
              setValid(t("empty"));
            }
        }
      } else {
        setIsChecked && setIsChecked(true);
        setValid(undefined);
      }
    }
  }, [required, isValid, value, multiple]);

  /**
   * onPressClose.
   */
  const onPressClose = useCallback(() => {
    setOpen(false);
    !disableLocalSearch && setSearchText("");
    onClose();
  }, [setOpen, onClose, disableLocalSearch]);

  /**
   * onPressToggle.
   */
  const onPressToggle = useCallback(() => {
    const isOpen = !open;

    setOpen(isOpen);
    !disableLocalSearch && setSearchText("");

    if (isOpen) onOpen();
    else onClose();

    return isOpen;
  }, [open, setOpen, onOpen, onClose, disableLocalSearch]);

  /**
   * The sorted items.
   * @returns {object}
   */
  const sortedItems = useMemo(() => {
    return items;
  }, [items, _schema]);

  /**
   * The items.
   * @returns {object}
   */
  const _items = useMemo(() => {
    if (searchText?.length === 0) {
      return sortedItems;
    } else {
      if (disableLocalSearch) return sortedItems;

      const values = [];
      let results = sortedItems.filter((item: { [x: string]: any }) => {
        if (
          item[_schema.label].toLowerCase().includes(searchText?.toLowerCase())
        ) {
          values.push(item[_schema.value]);
          return true;
        }

        return false;
      });

      return results;
    }
  }, [sortedItems, _schema, searchText]);

  /**
   * The value.
   * @returns {string|object|null}}
   */
  const _value = useMemo(() => {
    if (multiple) {
      if (value === null) return [];

      return [...new Set(value)];
    }

    return value;
  }, [value, multiple]);

  /**
   * Selected items only for multiple items.
   * @returns {object}
   */
  const selectedItems = useMemo(() => {
    if (!multiple) return [];

    return valueSelected;
  }, [_value, _schema, multiple, valueSelected]);

  const _placeholder = useMemo(() => {
    if (placeholder) return placeholder;
    return t("dropDownPicker.placeholder");
  }, [placeholder]);

  const isNull = useMemo(() => {
    if (_value === null || (Array.isArray(_value) && _value.length === 0))
      return true;
  }, [_value]);

  /**
   * Get the selected item.
   * @returns {object}
   */
  const getSelectedItem = useCallback(() => {
    if (multiple) return _value;

    if (isNull) return null;
  }, [_value, isNull, multiple]);

  /**
   * Get the label of the selected item.
   * @param {string|null} fallback
   * @returns {string}
   */
  const getLabel = useCallback(
    (fallback = null) => {
      const item = getSelectedItem();
      if (multiple)
        if (item.length > 0) {
          let mtext = `${t("dropDownPicker.itemSelected")}`;
          if (mtext.length === 1) {
            return (mtext = `${t("dropDownPicker.itemSelected")}`);
          } else {
            return (mtext =
              item.length + " " + t("dropDownPicker.itemsSelected"));
          }
        } else return fallback;
      try {
        return valueSelected[_schema.label];
      } catch (e) {
        return fallback;
      }
    },
    [getSelectedItem, multiple, _schema]
  );

  /**
   * The label of the selected item / placeholder.
   */
  const _selectedItemLabel = useMemo(
    () => getLabel(_placeholder),
    [getLabel, _placeholder]
  );

  const __onPress = useCallback(async () => {
    const isOpen = !open;
    onPress(isOpen);
    onPressToggle();
  }, [open, onPressToggle, onPress]);

  /**
   * The arrow component.
   * @returns {JSX.Element}
   */
  const _ArrowComponent = useMemo(() => {
    let Component;
    Component = <Icon icon={open ? "up" : "down"} color={colorOption.white} />;
    return <View style={styles.arrow}>{Component}</View>;
  }, [open]);

  /**
   * The simple body component.
   * @returns {JSX.Element}
   */
  const SimpleBodyComponent = useMemo(
    () => <ThemedText>{_selectedItemLabel}</ThemedText>,
    [_selectedItemLabel]
  );

  const onPressLabel = useCallback(
    (value) => {
      setValueSelected((state: any) => {
        let _state = [...state];
        const index = _state.findIndex((item) => item[_schema.value] === value);
        _state.splice(index, 1);

        return _state;
      });

      setValue((state: any) => {
        let _state = [...state];
        const index = _state.findIndex((item) => item === value);

        _state.splice(index, 1);

        return _state;
      });
    },
    [setValue, setValueSelected, _schema]
  );

  const [seeMore, setSeeMore] = useState(true);

  /**
   *
   * @returns {string}
   */
  const displayItem = (index: number) => {
    if (
      !showAll &&
      seeMore &&
      showNumberItem &&
      index > showNumberItem - 1 &&
      selectedItems.length > showNumberItem
    ) {
      return "none";
    } else {
      return "flex";
    }
  };

  const _renderLabel = useCallback(
    ({ item, index }) => (
      <View style={[fullWidthItemLabel && { width: "100%" }]}>
        <View
          style={{
            paddingBottom: 8,
            marginRight: 8,
            display: displayItem(index),
          }}
        >
          <RenderLabelItem
            label={item[_schema.label]}
            value={item[_schema.value]}
            onPress={onPressLabel}
            showIconRemove={showIconRemove}
            renderLabelItem={
              renderLabelItem !== undefined ? renderLabelItem(item) : undefined
            }
          />
        </View>
      </View>
    ),
    [_schema, onPressLabel, seeMore, renderLabelItem]
  );

  /**
   * The label key.
   * @returns {string}
   */
  const _itemKey = useMemo(() => {
    if (itemKey === null) return _schema.value;

    return itemKey;
  }, [itemKey, _schema]);

  /**
   * The key extractor.
   * @returns {string}
   */
  const keyExtractor = useCallback((item) => `${item[_itemKey]}`, [_itemKey]);

  const _ShowLayout = useCallback(() => {
    return SimpleBodyComponent;
  }, [SimpleBodyComponent]);

  /**
   * Seemore
   * @returns {JSX.Element}
   */
  const ListFooterComponent = useCallback(
    () => (
      <>
        {!showAll && selectedItems.length > 10 && (
          <View style={styles.viewShow}>
            {seeMore ? (
              <ThemedText
                onPress={() => {
                  setSeeMore(!seeMore);
                }}
              >
                ... {t("dropDownPicker.seeMore")}
              </ThemedText>
            ) : (
              <ThemedText
                style={styles.seeLest}
                onPress={() => {
                  setSeeMore(!seeMore);
                }}
              >
                {t("dropDownPicker.seeLest")}
              </ThemedText>
            )}
          </View>
        )}
      </>
    ),
    [_placeholder, seeMore, selectedItems, showAll]
  );

  /**
   * The label body component.
   * @returns {JSX.Element}
   */
  const LabelBodyComponent = useMemo(() => {
    return (
      <FlatList
        nestedScrollEnabled={true}
        data={selectedItems}
        renderItem={_renderLabel}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        style={styles.listBody}
        contentContainerStyle={styles.listBodyContainer}
        ListFooterComponent={ListFooterComponent}
      />
    );
  }, [selectedItems, _renderLabel, keyExtractor]);

  const _BodyComponent = useMemo(() => {
    if (multiple) {
      return LabelBodyComponent;
    }
  }, [LabelBodyComponent, multiple]);

  const onPressItem = useCallback(
    (item: never) => {
      //    Not a reliable method for external value changes.
      if (multiple) {
        if (memoryRef.current.value.includes(item[_schema.value])) {
          const index = memoryRef.current.items.findIndex(
            (x: { [x: string]: any }) =>
              x[_schema.value] === item[_schema.value]
          );
          if (index > -1) {
            memoryRef.current.items.splice(index, 1);
          }
        }
      }

      setValueSelected((state: null) => {
        if (multiple) {
          let _state = state !== null ? [...state] : [];

          if (_state.includes(item)) {
            //    Remove the value
            if (Number.isInteger(min) && min && min >= _state.length) {
              return state;
            }
            const index = _state.findIndex((x) => x === item);
            _state.splice(index, 1);
          } else {
            //    Add the value
            if (Number.isInteger(max) && max && max <= _state.length) {
              return state;
            }

            _state.push(item);
          }

          return _state;
        } else {
          return item;
        }
      });

      setValue((state: null) => {
        if (multiple) {
          let _state = state !== null ? [...state] : [];

          if (_state.includes(item[_schema.value])) {
            // Remove the value
            if (Number.isInteger(min) && min && min >= _state.length) {
              return state;
            }

            const index = _state.findIndex((x) => x === item[_schema.value]);
            _state.splice(index, 1);
          } else {
            // Add the value
            if (Number.isInteger(max) && max && max <= _state.length) {
              return state;
            }

            _state.push(item[_schema.value]);
          }

          return _state;
        } else {
          return item[_schema.value];
        }
      });

      if (closeAfterSelecting && !multiple) onPressClose();
    },
    [
      setValue,
      multiple,
      min,
      max,
      onPressClose,
      closeAfterSelecting,
      multiple,
      setItems,
      _schema,
    ]
  );

  const __renderListItem = useCallback(
    ({ item }) => {
      let isSelected;
      if (multiple) {
        isSelected = _value.includes(item[_schema.value]);
      } else {
        isSelected = _value === item[_schema.value];
      }

      return (
        <RenderListItem
          item={item}
          label={item[_schema.label]}
          selectable={item?.[_schema.selectable] ?? null}
          disabled={item?.[_schema.disabled] ?? false}
          isSelected={isSelected}
          onPress={onPressItem}
          showTickIcon={showTickIcon}
          renderItem={renderItem !== undefined ? renderItem(item) : undefined}
        />
      );
    },
    [_schema, _value, multiple, onPressItem, showTickIcon, renderItem]
  );

  /**
   *
   * @param text
   */
  const changeHandler = (text: string) => {
    setSearchValue && setSearchValue(text);
  };

  /**
   * Function debounced
   */
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, TIME_DEBOUNCE),
    []
  );

  /**
   *
   * @param text
   */
  const onChangeText = (text: string) => {
    setSearchText(text);
    debouncedChangeHandler(text);
  };

  const _searchPlaceholder = useMemo(() => {
    if (searchPlaceholder) return searchPlaceholder;
    return t("dropDownPicker.searchPlaceholder");
  }, [searchPlaceholder]);

  const _onChangeSearchText = useCallback(
    (text) => {
      switch (disableLocalSearch) {
        case true:
          return onChangeText(text);
        default:
          return setSearchText(text);
      }
      return setSearchText(text);
    },
    [onChangeSearchValue, disableLocalSearch]
  );

  const CloseIcon = useMemo(() => {
    return (
      <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
        <Icon icon={"close"} size={"large"} color={colors.icon} />
      </TouchableOpacity>
    );
  }, [onPressClose]);

  const SearchComponent = useMemo(
    () => (
      <View
        style={[
          styles.search,
          {
            borderBottomColor: colors.border,
          },
        ]}
      >
        {searchable ? (
          <TextInput
            value={searchText}
            onChangeText={_onChangeSearchText}
            style={[
              styles.searchTextInput,
              {
                borderColor: colors.border,
                color: colors.secondary_text,
              },
            ]}
            placeholder={_searchPlaceholder}
            placeholderTextColor={colors.secondary_text}
          />
        ) : (
          <View style={styles.flex}>
            <ThemedText>
              {modalTitle ? modalTitle : t("dropDownPicker.modalTitle")}
            </ThemedText>
          </View>
        )}
        {CloseIcon}
      </View>
    ),
    [
      searchable,
      modalTitle,
      _onChangeSearchText,
      _searchPlaceholder,
      searchText,
    ]
  );

  const _ListEmptyComponent = useCallback(() => {
    return <ListEmpty loading={loading} />;
  }, [loading]);

  const onRequestCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLoadMore = () => {
    if (Array.isArray(_items)) {
      if (_items?.length !== 0 && _items?.length % PAGINATION_LIMIT === 0) {
        onEndReached && onEndReached();
      }
    }
  };

  const renderFooter = useCallback(() => {
    return (
      <>
        {Array.isArray(_items) &&
          _items?.length !== 0 &&
          _items?.length % PAGINATION_LIMIT === 0 && (
            <>
              {!disableLoadMore && (
                <View style={styles.loadMore}>
                  <ActivityIndicator
                    size={"small"}
                    color={colors.primary_main}
                  />
                </View>
              )}
            </>
          )}
      </>
    );
  }, [_items, disableLoadMore]);

  const DropDownFlatListComponent = useMemo(
    () => (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flex}
        contentContainerStyle={styles.listDropDownContainer}
        ListEmptyComponent={_ListEmptyComponent}
        data={_items}
        renderItem={__renderListItem}
        keyExtractor={keyExtractor}
        extraData={_value}
        ItemSeparatorComponent={() => <Separator />}
        onEndReachedThreshold={0.4}
        ListFooterComponent={renderFooter}
        onEndReached={() => {
          handleLoadMore();
        }}
      />
    ),
    [_items, _value, __renderListItem, keyExtractor, _ListEmptyComponent]
  );

  const DropDownModalComponent = useMemo(
    () => (
      <Modal
        visible={open}
        presentationStyle="fullScreen"
        animationType={"slide"}
        onRequestClose={onRequestCloseModal}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors?.background_light,
          }}
        >
          {SearchComponent}
          {DropDownFlatListComponent}
        </SafeAreaView>
      </Modal>
    ),
    [open, SearchComponent]
  );

  const DropDownComponent = useMemo(() => {
    return DropDownModalComponent;
  }, [DropDownModalComponent]);

  const DropDownBodyComponent = useMemo(() => {
    if (open) return DropDownComponent;
    return null;
  }, [open, DropDownComponent]);

  const onRef = useCallback((ref) => {
    pickerRef.current = ref;
  }, []);

  const pointerEvents = useMemo(() => (disabled ? "none" : "auto"), [disabled]);
  const [valid, setValid] = useState<string | undefined>();

  const _ErrorComponent = useCallback(() => {
    return <View>{valid ? <ErrorText errorText={valid} /> : null}</View>;
  }, [valid]);

  return (
    <>
      <TitleText title={title} required={required} />
      <TouchableOpacity
        style={[
          styles.container,
          {
            borderColor: colors.border,
            backgroundColor: colors.background_light,
          },
        ]}
        onPress={__onPress}
        {...props}
        ref={onRef}
        disabled={disabled}
        pointerEvents={pointerEvents}
      >
        {_ShowLayout()}
        {_ArrowComponent}
      </TouchableOpacity>
      {_ErrorComponent()}
      {_BodyComponent}
      {DropDownBodyComponent}
    </>
  );
};
Picker.defaultProps = defaultProps;
export const DropDownPicker = memo(Picker);
