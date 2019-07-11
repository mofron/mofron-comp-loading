# mofron-comp-loading
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

loading component for mofron

it is a component to display when loading

## Feature
 - the display position is automatically centered
 - this comp is displayed like a modal window

# Install
```
npm install mofron mofron-comp-loading
```

# Sample
```html
<require>
    <tag module="mofron-comp-loading">Loading</tag>
</require>

<script>
loading.visible(true);
</script>

<Loading name=loading></Loading>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | loadComp | component | replace loading component |

