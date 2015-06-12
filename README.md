This is a tiny library that helps in dealing with the cordova `deviceready` event.

The event is triggered on the `document`, this is problematic when the application uses `addEventListener` after the event has been triggered.

This version can be used at any time, just like `$(document).ready(...)`.

## Installation

```javascript
bower install cordova-ondeviceready --save
```

## Usage

```html
<script type="text/javascript" src="bower_components/cordova-ondeviceready/onCordovaDeviceReady.js"></script>
<script type="text/javascript" src="cordova.js"></script>
```
