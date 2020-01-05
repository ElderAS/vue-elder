# File

<style>
.demo{

  border-radius: 3px;
  margin: 2rem 0;

}
</style>

## Usage

```js
// Global installation
import FileInstaller from "vue-elder-file";
//...
Vue.use(FileInstaller);

// Local installation
import { FileComponent, setup } from "vue-elder-file";

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
          name: '...',
          url: '...',
          size: ...,
          type: '...'
        }
    */
  },
  dropMessage: "Drag a file here or <b>browse</b> to upload.",
  nofilesMessage: "-",
  icons: [{ pattern: /text.*/, icon: "file-alt" }]
});

//...
components: {
  FileComponent;
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

---

## Example

```html
<file-component label="File"></file-component>
```

<div class="demo">
  <file-component label="File" multiple></file-component>
</div>
