# Input

<style>
.demo{
  padding: 2rem;
  border-radius: 3px;
  margin: 2rem 0;
  background: #f9f9f9;
}
</style>

## Usage

```js
// Global installation
import InputInstaller from "vue-elder-input";
//...
Vue.use(InputInstaller);

// Local installation
import { InputComponent } from "vue-elder-input";

//...
components: {
  InputComponent;
}
```

## Slots

- default
- left
- right
- icon
- prefix
- suffix
- icon
- validation-message

This component accepts a default slot. The slot replaces the input element.
This is very convenient if you need a more complex input element.
e.g. Google Autocomplete

```html
<input-component>
  <google-autocomplete></google-autocomplete>
</input-component>
```

## Props

- [value](#value) `String | Number | Date`
- [label](#label) `String`
- [validate](#validate) `Boolean`
- [prefix](#prefix) `String`
- [suffix](#suffix) `String`
- [icon](#icon) `String | Array`
- [align](#align) `String`
- [mask](#mask) `Object`

**You can use all standard input attributes like: type, placeholder, autofocus, etc.**

---

### value

- **Type:** `String | Number | Date`
- **Default:** `null`
- **Required:** `true`

#### Description

Give the input some value. Usually this is handled with `v-model`.

#### Example

```html
<input-component value="John Doe"></input-component>
```

<div class="demo">
  <input-component value="John Doe"></input-component>
</div>

### label

- **Type:** `String`
- **Default:** `null`

#### Description

Set input label

#### Example

```html
<input-component label="Fancy label"></input-component>
```

<div class="demo">
<input-component label="Fancy label"></input-component>
</div>

---

### validate

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Show a checkmark when the input is valid.
Works very well with [required](#required) and [pattern](#pattern).

#### Example

```html
<input-component label="Name" required validate></input-component>
```

<div class="demo">
  <input-component label="Name" required value="John Doe" validate></input-component>
</div>

---

### prefix

- **Type:** `String`
- **Default:** `null`

#### Description

Show a prefix before the input.

#### Example

```html
<input-component value="450" prefix="NOK"></input-component>
```

<div class="demo">
  <input-component value="450" prefix="NOK"></input-component>
</div>

---

### suffix

- **Type:** `String`
- **Default:** `null`

#### Description

Show a suffix before the input.

#### Example

```html
<input-component value="450" suffix="NOK"></input-component>
```

<div class="demo">
  <input-component value="450" suffix="NOK"></input-component>
</div>

---

### icon

- **Type:** `String | Array`
- **Default:** `null`

#### Description

Sets an icon.
Icon is based on the [VueFontawesome](https://github.com/FortAwesome/vue-fontawesome) plugin.<br>
Make sure to [import](https://github.com/FortAwesome/vue-fontawesome#import-the-specific-icons-that-you-need) your icons **before referencing** to them.

#### Example

```html
<input-component
  label="Sample"
  :icon="['fas', 'check-circle']"
></input-component>
```

<div class="demo">
  <input-component label="Sample" :icon="['fas', 'check-circle']"></input-component>
</div>

---

### align

- **Type:** `String`
- **Default:** `left`
- **Allowed values:** `left | center | right`

#### Description

Sets the input value alignment.

#### Example

```html
<input-component label="Value" align="right"></input-component>
```

<div class="demo">
  <input-component label="Value" align="right" value="450"></input-component>
</div>

---

### mask

- **Type:** `Object`
- **Default:** `null`

#### Description

Mask your input to make it easier to read and input data.
Masking is based on [vue-imask](https://github.com/uNmAnNeR/imaskjs) and [imaskjs](https://unmanner.github.io/imaskjs/guide.html). For more information about the mask object [check out this documentation](https://unmanner.github.io/imaskjs/guide.html).

#### Example

```html
<input-component
  label="Value"
  prefix="NOK"
  type="number"
  :mask="{ mask: Number, thousandsSeparator: ' ', unmask: true }"
></input-component>
```

<div class="demo">
  <input-component label="Value" type="number" prefix="NOK" :mask="{ mask: Number, thousandsSeparator: ' ', unmask: true }" :value="4500000"></input-component>
</div>
