# Navigation

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
import NavigationInstaller from "vue-elder-navigation";
//...
Vue.use(NavigationInstaller);

// Local installation
import { NavigationComponent, setup } from "vue-elder-navigation";

//...
components: {
  NavigationComponent;
}
```

## Slots

- default
- before

## Props

- [logo](#logo) `String | Object`
- [animate](#animate) `Boolean`
- [height](#height) `Number`
- [padding](#padding) `String`
- [title](#title) `String`
- [breakAt](#breakAt) `Number`
- [action](#action) `Object, String, Function`
- [items](#items) `Array`

---

## Example

```html
<navigation-component
  :logo="{ src: 'https://elder.no/wp-content/uploads/sites/14/2019/10/logo-e1574108269330.png', height: 40}"
  :items="[{ label: 'Home', action: '#' }, { label: 'About', action: '#' }]"
></navigation-component>
```

<div class="demo">
  <navigation-component
  :logo="{ src: 'https://elder.no/wp-content/uploads/sites/14/2019/10/logo-e1574108269330.png', height: 40}"
  :items="[{ label: 'Home', action: '#' }, { label: 'About', action: '#' }]"
></navigation-component>
</div>
