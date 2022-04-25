# STUDY SPACE APP

## Điều kiện tiên quyết

- [Node.js > v16](https://nodejs.org) and [yarn](https://yarnpkg.com/)
- [Xcode >12](https://developer.apple.com/xcode)
- [Cocoapods 1.11.2](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Phụ thuộc

- [axios](https://github.com/axios/axios) gọi api.
- [react-navigation](https://reactnavigation.org/) điều hướng màn hình.
- [redux](https://redux.js.org/) quản lý `global state`.
- [redux-toolkit](https://redux-toolkit.js.org/)
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) lưu dữ liệu vào local.
- [redux-persist](https://github.com/rt2zz/redux-persist) lấy dữ liệu đã lưu vào local và đưa vào redux.
- [redux-saga](https://redux-saga.js.org/)
- [redux-unfold-saga](https://github.com/manhhailua/redux-unfold-saga)
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [jest](https://facebook.github.io/jest/) kiểm thử.
- [react-vector-icons](https://github.com/oblador/react-native-vector-icons) lấy icon cho app.
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) code hiệu ứng cho app.
- [react-native-calendars](https://github.com/wix/react-native-calendars) cấu hình component lịch cho app.
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) xử lý khi dữ liệu trả về có nhiều hình ảnh.
- [react-native-fbsdk-next](https://github.com/thebergamo/react-native-fbsdk-next) tích hợp tính năng đăng nhập Facebook.
- [@react-native-google-signin/google-signin](https://github.com/react-native-google-signin/google-signin) tích hợp tính năng đăng nhập Google.
- [@react-native-community/push-notification-ios]() bắn thông báo cho ios.
- [react-native-push-notification](https://github.com/zo0r/react-native-push-notification)
- [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info) lấy thông tin của thiết bị.
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) các thư viện khác yêu cầu.
- [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker) crop hình ảnh.
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient) tạo nền linear-gradient.
- [react-native-modalize](https://github.com/jeremybarbet/react-native-modalize) xử lý bottomSheet
- [@gorhom/portal](https://github.com/gorhom/react-native-portal)
- [@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [react-native-text-ticker](https://github.com/deanhet/react-native-text-ticker)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-screens](https://github.com/software-mansion/react-native-screens)
- [react-native-slider](https://github.com/callstack/react-native-slider)
- [react-native-responsive-fontsize](https://www.npmjs.com/package/react-native-responsive-fontsize)
- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen)
- [react-i18next](https://react.i18next.com/)
- [moment](https://momentjs.com/docs/)
- [lodash](https://github.com/lodash/lodash)
- [@react-navigation/bottom-tab](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [react-native-background-timer](https://github.com/ocetnik/react-native-background-timer)
- [react-native-snap-carousel](https://github.com/meliorence/react-native-snap-carousel)
- [react-native-camera](https://github.com/react-native-camera/react-native-camera)
- [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)
- [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg)
- [react-native-video](https://github.com/react-native-video/react-native-video)
- [yup](https://github.com/jquense/yup)
- [react-native-permissions](https://github.com/zoontek/react-native-permissions)
- [react-native-elements](https://reactnativeelements.com/)
- [react-native-dropdownalert](https://github.com/testshallpass/react-native-dropdownalert)
- [react-native-animatable](https://github.com/oblador/react-native-animatable)
- [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)

## Cấu trúc thư mục

- `src`: Thư mục này là nơi chứa chính của tất cả mã bên trong app.

  - `api`: Nơi chứa các api.
  - `assets`:
    Tại đây bạn có thể lưu trữ tất cả các hình ảnh và biểu tượng mà bạn cần thông qua ứng dụng. Ví dụ, bạn có biểu tượng ic_home.png, để đáp ứng với các mật độ màn hình thiết bị khác nhau, chỉ cần tạo bên trong cùng một thư mục hình ảnh và tất cả các phiên bản được chia tỷ lệ mà bạn cần. RN chỉ xử lý x1, x2 và x3 trong trường hợp này, bạn có.

    - ic_home
      - ic_home.png
      - ic_home@2x.png
      - ic_home@3x.png

    > Quy tắc đặt tên cho image, ví dụ như sau: classrom, course_list

    > Quy tắc đặt tên cho icon, ví dụ như sau: ic_profile, ic_error

  - `components`: Chứa các thành phần được sử dụng phổ biến (ví dụ như button, input, selection,...),
  - `config`: Nơi khai báo tên các "Màn hình" của app.

    > Toàn bộ các tên Màn hình trong app sẽ đặt trong file Screens.ts với Cấu trúc “TÊN_MÀN_HÌNH"=”TÊN_MÀN HÌNH“

    > Ví dụ như sau "CREATE_STUDENT" = "CREATE_STUDENT"

  - `constants`: Chứa những biến global state, các funtion phổ biển, các hằng số, ...

    > FontIcons.ts chứa tất cả vector-icon được dùng cho toàn app.

    > Images.ts chứa tất cả đường dẫn ảnh dùng cho app.

    > Reponsive.ts chứa thông tin về thông số kích thước màn hình, fontScale chữ.

    > Global.ts chứa thông tin về các biến global variables.

  - `containers`: Chứa các màn hình của app.
    - `Screen`: Mỗi màn hình sẽ được lưu trữ bên trong thư mục của nó và bên trong nó là một tệp cho mã của nó.
      - `component`: các component được dùng riêng cho thư mục này.
      - `Screen.tsx` chứa UI.
      - `styles.ts`: chứa css.
      - `hook.ts`: chưa logic, state.
  - `helpers`: Thư mục này chứa các function hỗ trợ việc showUI.
  - `hook`: Chứa các function xử lý logic được tái sử dụng nhiều.
  - `models`: Chứa các interface hoặc type của app định nghĩa kiểu dữ liệu.
  - `navigation`: Quản lý điều hướng màn hình.
  - `redux`:
  - `shared`: Chứa những css dùng chung.
  - `types`: Chứa type `navigation` của màn hình.
  - `utils`: Lưu trữ file ngôn ngữ, các chức năng định dạng như (format ngày tháng,...).
  - `App.tsx`: Thành phần chính của app.
  - `index.js`: Điểm đầu vào của app.

## Tùy chỉnh màn hình Splash

Để tùy chỉnh màn hình splash (logo and background color), hãy sử dụng [document](https://github.com/crazycodeboy/react-native-splash-screen) sau

## Thiết lập môi trường

### Thiết lập các đường đẫn động

Chỉnh sửa file `tsconfig.ts` để cập nhật đường dẫn:

```js
  "paths": {
      "@navigation": ["./src/navigation"],
      "@shared": ["./src/shared"],
      "@api": ["./src/api"],
      "@configs": ["./src/configs"],
      "@redux": ["./src/redux"],
      "@models": ["./src/models"],
      "@components": ["./src/components"],
      "@container": ["./src/container"],
      "@helpers": ["./src/helpers"],
      "@utils": ["./src/utils"],
      "@constants": ["./src/constants"],
      "@hooks": ["./src/hooks"],
      "@types": ["./src/types"]
    }
```

và ở mỗi bên trong 1 cây thư mục lớn sẽ có file `package.json` :

```js
{
  "name": "@navigation"
}



```

và file index.ts như sau:

```js
export * from "./MainContainer/MainContainer";
```

và cách sử dụng

```js
import {Button} from '@component'

thay cho

import {Button} from './src/component/Button'
```

### Sử dụng mã script

Thêm lệnh thực thi nhanh nếu cần trong tệp package.json:
Ví dụ:

```js
 "scripts": {
   "android": "react-native run-android",
   "apk": "cd android &&./gradlew clean && ./gradlew assembleRelease && cd ..",
   "app-apk": "cd android &&./gradlew app:assembleRelease && cd ..",
   "variant": "react-native run-android --variant=release",
   "rm-apk": "adb shell pm uninstall --user 0 vn.studyspace",
   "clear-cache": "adb shell pm clear vn.studyspace",
   "aab": "cd android &&./gradlew clean && ./gradlew bundleRelease && cd ..",
   "rm": "rm -rf ./node_modules",
   "rm-pod": "cd ios && rm Podfile.lock",
   "pod": "npx pod-install",
   "link": "npx react-native link",
   "upgrade": "npx react-native upgrade",
   "ios": "react-native run-ios",
   "start": "react-native start",
   "test": "jest",
   "lint": "eslint ."
 },
```

## Tối ưu mã

Dùng extension "Prettier - Code formatter" đề định dạng lại code.
Dùng tổ hợp phím "Command + Shift + 0" để xóa những thứ import thừa thãi.

## Quy tắc code

    Các component phải viết hoa chữ đầu, ví dụ:
        ButtonGroup, Input

Không đặt tên bằng Số, tiếng Việt , không đúng nghĩa hoặc vô nghĩa.

1. Cách khai báo function (chủ yếu dùng function arrow)

```js
interface Props {}
export const MyButton: React.FC<Props> = () => {
  return <View></View>;
};
```

2. Sử dụng component `MainContainer` cho toàn bộ màn hình.
3. Text sử dụng component `ThemedText`.
4. Sử dụng component `MainImage` cho những list có ảnh từ sever trả về.
5. Sử dụng useNavigation và useRoute cho custom hook phải khải báo kiểu navigtionProp và routeProp.
6. Về màu sắc

- Các trạng thái màu sắc của chữ, icon không phụ thuộc vào `theme` được dùng như sau:

```js
import { colorOption } from "@constans";

const CustomButton = () => {
  return (
    <View style={styles.viewColor}>
      <Text>Màu chữ</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewColor: colorOption.red,
});
```

- Các trạng thái màu sắc của chữ, icon thay đổi theo `theme` được dùng như sau:

```js
import { colorOption } from "@constans";

import { useTheme } from "@hooks";
const CustomButton = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.viewColor}>
      <Text style={{ color: colors.primary_text }}>Màu chữ</Text>
    </View>
  );
};
```

- Đối với các trạng thái màu sắc opacity: sử dụng theo cấu trúc như sau:

  ```js
  `${colorOption.red}20`; // Màu đỏ 20%
  ```

### Api connection handler

App sử dụng `Axios` để gọi các api của nền tảng Study Space.
Ngoài ra có sử dụng method `fetch` để gọi các api third party, ví dụ như api liên quan tới việc upload ảnh lên AWS.

Cấu trúc:

- `api`

  - `CallApi`: Chứa các api của app.

        > Quy tắc đặt tên api:

        Để danh từ số ít cho các tác vụ.

        xem tạo, sửa, xoá, xác nhận và thêm các động từ Get, Create, Update, Delete phía đầu.

    | Tác vụ | Đặt tên |

    | ------------ | ------------ |
    | Xem | Get |
    | Tạo | Create |

  Cú pháp: `create/update/delete/get/confirm + danh từ số ít`.

Ví dụ: createEmployee, getEmployee, deleteEmployee, createEmployeeCategory

- Để danh từ số ít cho trường hợp lấy thông tin bộ lọc.

  Cú pháp: `get + danh từ số ít + filters`

Ví dụ: getEmployeeFilter, getEmployeeCategoryFilters.

- `Service`:
  - `endPoint.ts`: Chứa các biến URL `Application Configuration Endpoint` môi trường, bao gồm: DEV , STAGING, PROD.
  - `Services.ts`: Config base call api chung.

Quy ước đặt tên api sử dụng trong app:

### HTTP status code và message

`200`: Mọi thứ đang hoạt động.

`400`: Bad request - Yêu cầu không hợp lệ.

`403`: Forbidden resource - Tài nguyên bị cấm.

`404`: Lỗi ứng dụng khách hoạt động sai (có thể do truyền sai giá trị, ...).

`500`: Lỗi máy chủ nội bộ.

### Phân trang - Paging:

Thay vì lấy toàn bộ records, chúng ta sẽ lấy với số lượng nhất định => Điều này cũng giúp giảm tải cho server.

Để lấy các records theo trang, chúng ta truyền tham số như : `offset` và `limit` để lấy ra những dữ liệu phù hợp.
Cấu trúc kiểu dữ liệu của `input` phân trang như sau:

```js
pagination: {
  limit: number;
  offset: number;
}
```

Ví dụ ta cần lấy 10 records thì input như sau:

```js
pagination: {
  limit: 10;
  offset: 1;
}
```

Đối với tham số `offset` app sẽ sử dụng theo công thức tính như sau:

```js
offset: (page - 1) * limit;
```

> Trong đó để gọi 10 records đầu tiên của danh sách thì giá trị tham số page truyền vào sẽ bằng 1. Sau đó, nếu tiếp tục lấy thêm 10 records thì khi đó tham số page truyền vào sẽ bằng `page hiện tại + 1`, kết quả page =2.
