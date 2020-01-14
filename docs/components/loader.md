# Loader

<style>
.demo{
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 2rem 0;
  background: #f9f9f9;
}

.demo > * {
  flex-grow: 1;
}
</style>

## Usage

```js
// Global installation
import LoaderInstaller from "vue-elder-loader";
//...
Vue.use(LoaderInstaller);

// Local installation
import { LoaderComponent, setup } from "vue-elder-loader";

//...
components: {
  LoaderComponent;
}
```

## Slots

- default
- success
- error
- message

## Props

- [value](#value) `Boolean | Promise`
- [theme](#theme) `String (overlay, default)`
- [message](#message) `String`
- [icon](#icon) `String | Object | Array`
- [delay](#delay) `Number`

---

## Example

```html
<loader-component :value="true"></loader-component>
```

<div class="demo">
  <loader-component
  :value="true"
></loader-component>
</div>
