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
  - `assets`: Là nơi chứa ảnh, icon, và fonts của app.

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
  - `utils`: Chứa file đa ngôn ngữ.
  - `App.tsx`: Thành phần chính của app.
  - `index.js`: Điểm đầu vào của app.

## Tùy chỉnh màn hình Splash

Để tùy chỉnh màn hình splash (logo and background color), hãy sử dụng [document](https://github.com/crazycodeboy/react-native-splash-screen) sau

## Thiết lập môi trường

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

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### We manage three main folders for that:

- Assets: Here you can store all the images and icons that you need through the app. You have as an example the icon ic_home.png, to respond with the different device screen densities just create inside the same folder the image and all the scaled versions that you need. RN only handles x1, x2 and x3 in this case, you have.

  - assets
    - ic_home
      - ic_home.png
      - ic_home@2x.png
      - ic_home@3x.png

- Localization: This folder contains all the locale objects that you need to create a multilingual application. Create a file for each locale, inside define an object then maintain the nesting sorted by the screen that contains the text that you need and the text you want to show. As the last step, remember to create a reference inside the Localization.js file and add it to LocalizedStrings.
- Theme: Here you can define all the styles that you use on different screens. To make easier the interaction of the application with device options for example you can create here assets as light and dark color palette

## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.

### Controllers folder and API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `httpClient.js`. It uses interceptors to define common side effects for the responses.

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers' folder.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux store. This is useful because you can create behaviors based on those states in a quick and simple way

### Redux folders

4 folders divide the redux work

- Store: Here you define the store shape and you can configure the persistReducer and middlewares.
- Actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- Reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.
- Selectors: Create one file for each action classification. Here you define what part of the store you need to see in your interface.

## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

To keep the structure, extract the styles from the main file and place it in a {namefile.styles.js} do the same for the set of tests needed for each screen with the file {namefile.test.js}
