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

### from [vue-elder](https://github.com/ElderAS/vue-elder)

```js
// Global installation
import { InputComponentInstaller } from 'vue-elder'
//...
Vue.use(InputComponentInstaller)

// Local installation
import { InputComponent } from 'vue-elder'

//...
components: {
  InputComponent
}
```

### from [vue-elder-input](https://github.com/ElderAS/vue-elder-input)

```js
// Global installation
import InputInstaller from 'vue-elder-input'
//...
Vue.use(InputInstaller)

// Local installation
import { InputComponent } from 'vue-elder-input'

//...
components: {
  InputComponent
}
```

## Slots

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
- [type](#type) `String`
- [disabled](#disabled) `Boolean`
- [readonly](#readonly) `Boolean`
- [required](#required) `Boolean`
- [autofocus](#autofocus) `Boolean`
- [validate](#validate) `Boolean`
- [placeholder](#placeholder) `String`
- [pattern](#pattern) `String`
- [prefix](#prefix) `String`
- [suffix](#suffix) `String`
- [icon](#icon) `String | Array`
- [align](#align) `String`
- [mask](#mask) `Object`

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

### type

- **Type:** `String`
- **Default:** `text`

#### Description

Set the input type. Use regular [html input types](https://www.w3schools.com/html/html_form_input_types.asp)

#### Example

```html
<input-component type="number" value="1200"></input-component>
```

<div class="demo">
  <input-component type="number" value="1200"></input-component>
</div>

---

### disabled

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Disables the input.

#### Example

```html
<input-component disabled ></input-component>
```

<div class="demo">
<input-component disabled value="I'm disabled"></input-component>
</div>

---

### readonly

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Makes the input readonly.

#### Example

```html
<input-component readonly></input-component>
```

<div class="demo">
  <input-component readonly value="I'm readonly"></input-component>
</div>

---

### required

- **Type:** `Boolean`
- **Default:** `false`

#### Description

This specifies that an input field must be filled out before submitting the form.
If a [#label](label) is set, a red asterisk character will appear.

#### Example

```html
<input-component required label="Age"></input-component>
```

<form class="demo">
  <input-component required label="Age" />
  <button-component label="Submit" style="margin-top: 1rem" primary/>
</form>

---

### autofocus

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Set focus on when input loads.

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

### placeholder

- **Type:** `String`
- **Default:** `null`

#### Description

Set placeholder for input. Uses [HTML input placeholder attribute](https://www.w3schools.com/tags/att_input_placeholder.asp).

#### Example

```html
<input-component label="Name" placeholder="Your name..."></input-component>
```

<div class="demo">
  <input-component label="Name" placeholder="Your name..."></input-component>
</div>

---

### pattern

- **Type:** `String`
- **Default:** `null`

#### Description

Set pattern for input validation. Uses [HTML input pattern attribute](https://www.w3schools.com/tags/att_input_pattern.asp). Works very nice together with [validate](#validate).

#### Example

```html
<input-component label="Name" pattern="[A-Za-z]{3}" validate required></input-component>
```

<form class="demo">
  <input-component label="Name" pattern="[A-Za-z]{3}" value="Alf" readonly validate required></input-component>
  <button-component label="Submit" style="margin-top: 1rem" primary/>
</form>

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
<input-component label="Sample" :icon="['fas', 'check-circle']"></input-component>
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
<input-component label="Value" prefix="NOK" type="number" :mask="{ mask: Number, thousandsSeparator: ' ', unmask: true }"></input-component>
```

<div class="demo">
  <input-component label="Value" type="number" prefix="NOK" :mask="{ mask: Number, thousandsSeparator: ' ', unmask: true }" :value="4500000"></input-component>
</div>
