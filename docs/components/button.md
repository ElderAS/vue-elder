# Button

## Usage

### from [vue-elder](https://github.com/ElderAS/vue-elder)

```js
// Global installation
import { ButtonComponentInstaller } from 'vue-elder'
//...
Vue.use(ButtonComponentInstaller)

// Local installation
import { ButtonComponent } from 'vue-elder'

//...
components: {
  ButtonComponent
}
```

### from [vue-elder-button](https://github.com/ElderAS/vue-elder-button)

```js
// Global installation
import ButtonInstaller from 'vue-elder-button'
//...
Vue.use(ButtonInstaller)

// Local installation
import { ButtonComponent } from 'vue-elder-button'

//...
components: {
  ButtonComponent
}
```

## Props

- [primary](#primary-secondary-warning-success-error) `Boolean`
- [secondary](#primary-secondary-warning-success-error) `Boolean`
- [warning](#primary-secondary-warning-success-error) `Boolean`
- [success](#primary-secondary-warning-success-error) `Boolean`
- [error](#primary-secondary-warning-success-error) `Boolean`
- [label](#label) `String`
- [icon](#icon) `String | Array`
- [loading](#loading) `Boolean`
- [promise](#promise) `Promise`
- [state-timeout](#state-timeout) `Number`
- [confirm](#confirm) `Boolean`
- [loading-label](#loading-label) `String`
- [confirm-label](#confirm-label) `String`
- [success-label](#success-label) `String`
- [error-label](#error-label) `String`

### primary (secondary, warning, success, error)

- **Type:** `Boolean`
- **Default:** `false`
- **Possible prop names:** `[primary, secondary, warning, success, error]`

#### Description

Give button a nice color

#### Example

<br>

<button-component label="Primary" primary></button-component>
<button-component label="Default"></button-component>

```html
<button-component label="Primary" primary></button-component>
<button-component label="Default"></button-component>
```

<br><br><br>

### label

- **Type:** `String`
- **Default:** `Button`

#### Description

Set button label

#### Example

<br>
<button-component label="Fancy label"></button-component>

```html
<button-component label="Fancy label"></button-component>
```

<br><br><br>

### icon

- **Type:** `String | Array`
- **Default:** `null`

#### Description

Sets the icon.
Icon is based on the [VueFontawesome](https://github.com/FortAwesome/vue-fontawesome) plugin.<br>
Make sure to [import](https://github.com/FortAwesome/vue-fontawesome#import-the-specific-icons-that-you-need) your icons **before referencing** to them.

#### Example

<br>
<button-component label="Check me" :icon="['fas', 'check']"></button-component>

```html
<button-component label="Check me" :icon="['fas', 'check']"></button-component>
```

<br><br><br>

### loading

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Activates the loading state.
Be sure to check out [promise](#promise) prop for more advanced state handling.

#### Example

<br>
<button-component loading-label="I'm busy now..." loading></button-component>

```html
<button-component loading></button-component>
```

<br><br><br>

### promise

- **Type:** `Promise`
- **Default:** `null`

#### Description

Attach promises for automated state handing like loading, success and error.

#### Example

<br>
<button-component loading-label="Will sync promise state..." loading></button-component>

```html
<button-component :promise="yourPromise"></button-component>
```

<br><br><br>

### state-timeout

- **Type:** `Number`
- **Default:** `1000`
- **Dependency:** [promise](#promise)

#### Description

The [promise](#promise) prop triggers different states based on the result of the promise (resolve, reject).<br>
This prop defines how many **milliseconds** the different states (success, error) should be visible after the promise has been resolved/rejected before returning to the original state.

#### Example

```html
<button-component :state-timeout="4000"></button-component>
```

<br><br><br>

### confirm

- **Type:** `Boolean`
- **Default:** `false`

#### Description

Add an extra click to your button for confirmation.

#### Example

<br>
<button-component label="Click me for demo" confirm-label="Are you sure?" confirm></button-component>

```html
<button-component confirm></button-component>
```

<br><br><br>

### loading-label

- **Type:** `String`
- **Default:** `Lagrer...`
- **Dependency:** [loading](#loading) | [promise](#promise)

#### Description

Set label for loading state.
Loading state is triggered by the [loading](#loading) or [promise](#promise) prop.

#### Example

<br>
<button-component loading-label="Fetching..." loading></button-component>

```html
<button-component loading-label="Fetching..." loading></button-component>
```

<br><br><br>

### confirm-label

- **Type:** `String`
- **Default:** `Er du sikker?`
- **Dependency:** [confirm](#confirm)

#### Description

Set label for confirmation state.<br>
Confirm state is triggered by the [confirm](#confirm) prop.

#### Example

<br>
<button-component confirm-label="Are you crazy?" label="Click me for demo" confirm></button-component>

```html
<button-component confirm-label="Are you crazy?" confirm></button-component>
```

<br><br><br>

### success-label

- **Type:** `String`
- **Default:** `Fullført`
- **Dependency:** [promise](#promise)

#### Description

Set label for success state.<br>
Success state is triggered by the [promise](#promise) prop.

#### Example

<br>
<button-component label="Well done" :icon="['fas', 'check']" success></button-component>

```html
<button-component success-label="Well done"></button-component>
```

<br><br><br>

### error-label

- **Type:** `String`
- **Default:** `Noe gikk galt`
- **Dependency:** [promise](#promise)

#### Description

Set label for error state.<br>
Error state is triggered by the [promise](#promise) prop.

#### Example

<br>
<button-component label="Shit happens..." :icon="['fas', 'times']" error></button-component>

```html
<button-component error-label="Shit happens..."></button-component>
```

<br><br><br>

## Events

- [click](#click)
- [onSuccess](#onsuccess)
- [onError](#onerror)

### click

- **Event trigger:** `click`

#### Description

Listen for click events.

#### Example

```html
<button-component @click="yourEvent"></button-component>
```

<br><br><br>

### onSuccess

- **Event trigger:** `Promise -> resolve`
- **Dependency:** [promise](#promise)

#### Description

Triggers an event as soon as the promise has resolved.<br>
The success event is triggered by the [promise](#promise) prop.

#### Example

```html
<button-component @onSuccess="yourHandler"></button-component>
```

<br><br><br>

### onError

- **Event trigger:** `Promise -> reject`
- **Dependency:** [promise](#promise)

#### Description

Triggers an event as soon as the promise has rejected.<br>
The error event is triggered by the [promise](#promise) prop.

#### Example

```html
<button-component @onError="yourHandler"></button-component>
```
