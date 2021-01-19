# Bitclass
## Summary
A platform which aims to centralize all the content of the UCL Bits initiative.

## Instructions

### Setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run generate
```

### Lint

#### Lints javascript and css

```
npm run lint
```

#### Lints only javascript

```
npm run lint:js
```

#### Lints only css

```
npm run lint:style
```

## Refactoring and features suggestions

- Hide the google developer key information in environment
- Create tests for utils and api
- Create a generic video card component
- Try to use only vue animations, with vue transition tag
- Create logic for categories
  - The branch `feat/categories` contains the logic i created for video categories
  - Try to refactor the logic and use this
  - Every video on youtube has a field called tags, try to use that to store categories and fetch this information with the youtube api
    - Example: [Api fetch example][https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=JuflKzsYOf4,SLoaKDflXnY&fields=items(id,snippet(publishedAt,title,description,tags),contentDetails(duration))&key=AIzaSyB6eK43_XqoZ4wFrSzWibgmaKW-qeGI4ZU]
