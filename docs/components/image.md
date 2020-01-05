# Image

<style>
.demo{
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 2rem 0;
}

.demo > * {
  flex-grow: 1;
}
</style>

## Usage

```js
// Global installation
import ImageInstaller from "vue-elder-image";
//...
Vue.use(ImageInstaller);

// Local installation
import { ImageComponent, setup } from "vue-elder-image";

setup({
  //Options
  upload(file, onProgress) {
    /*
      Write your custom upload function
      Call "onProgress" with a value (0-100) to change the progress
    */
  },
  serialize(val) {
    /*
      Transform value
      Expected format:
      /* Value format
        {
          url: '...',
        }
    */
  },
  dropMessage: "Drag an image here or <b>browse</b> to upload."
});

//...
components: {
  ImageComponent;
}
```

## Slots

- drop-message

## Props

- [value](#value) `Array | Object | String`
- [label](#label) `String`
- [sortable](#sortable) `Boolean`
- [multiple](#multiple) `Boolean`
- [rename](#rename) `String | Boolean`
- [upload](#upload) `Function`
- [serialize](#serialize) `Function`
- [size](#size) `String (css: background-size)`
- [placement](#placement) `String (outside|inside)`

---

## Example

```html
<image-component label="Image" multiple></image-component>
```

<div class="demo">
  <image-component label="Image" multiple></image-component>
</div>

```html
<image-component label="Image" multiple placement="inside"></image-component>
```

<div class="demo">
  <image-component label="Image" multiple placement="inside"></image-component>
</div>
