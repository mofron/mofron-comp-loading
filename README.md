# mofron-comp-loading
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

loading component for mofron

it's component for display when loading

## Feature
 - the display position is automatically centered
 - this component is displayed like a modal window

# Install
```
npm install mofron mofron-comp-loading
```

# Sample
```html
<setting>
    <tag load="mofron-comp-loading">Loading</tag>
</setting>

<script>
    loading.visible(true);
</script>

<Loading name=loading>Loading...</Loading>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | loadComp | component | replace loading component |
| ◯  | text | mixed | string: string for display |
| | | | mofron-comp-text: text component for display |

