[![MIT License][license-badge]][license-url]
[![Stargazers][stars-badge]][stars-url]
[![Contributors][contributors-badge]][contributors-url]
[![Forks][forks-badge]][forks-url]
[![Issues][issues-badge]][issues-url]
![Minified size][npm-size-badge]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sanoofp/is-malayalam">
    <img src="docs/title.png" alt="Logo" width="600" height="120">
  </a>

  <h3 align="center">is-malayalam</h3>

  <p align="center">
    Script to check whether the provided string contains at least one Malayalam character.
    <br />
    <a href="https://github.com/sanoofp/is-malayalam"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/sanoofp/is-malayalam/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details >
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#basic-usage">Basic Usage</a></li>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#sources">Sources</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>

  </ol>
</details>

<!-- GETTING STARTED -->

## Basic Usage

Install using `npm`

```sh
npm install is-malayalam --save
```

Then, use the script in your project;

```JS
const isMalayalam = require("is-malayalam");

console.log(isMalayalam("മലയാളം")) // true
console.log(isMalayalam("Malayalam മലയാളം")) // true
console.log(isMalayalam("Malayalam")) // false
```

<!-- ABOUT THE PROJECT -->

## About The Project

`is-malayalam` is a small javascript script to check whether the provided string contains at least one Malayalam character.

This function checks for the Unicode of each character in the given string, and returns `true` if any of the Unicodes lies between `U+0D00` and `U+0D7F`

## Sources

- [Malayalam Unicode - Wikipedia](https://en.wikipedia.org/wiki/Malayalam_script#Unicode)
- [Malayalam Unicode Chart](https://www.unicode.org/charts/PDF/U0D00.pdf)
- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

See the [open issues](https://github.com/sanoofp/is-malayalam/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-badge]: https://img.shields.io/github/contributors/sanoofp/is-malayalam?style=for-the-badge
[contributors-url]: https://github.com/sanoofp/is-malayalam/graphs/contributors
[forks-badge]: https://img.shields.io/github/forks/sanoofp/is-malayalam?style=for-the-badge
[forks-url]: https://github.com/sanoofp/is-malayalam/network/members
[stars-badge]: https://img.shields.io/github/stars/sanoofp/is-malayalam?style=for-the-badge
[stars-url]: https://github.com/sanoofp/is-malayalam/stargazers
[issues-badge]: https://img.shields.io/github/issues/sanoofp/is-malayalam?style=for-the-badge
[issues-url]: https://github.com/sanoofp/is-malayalam/issues
[license-badge]: https://img.shields.io/github/license/sanoofp/is-malayalam?style=for-the-badge
[license-url]: https://github.com/sanoofp/is-malayalam/blob/master/LICENSE
[github-downloads-badge]: https://img.shields.io/github/downloads/sanoofp/is-malayalam/total?style=for-the-badge
[npm-size-badge]: https://img.shields.io/bundlephobia/min/is-malayalam?style=for-the-badge
[title-url]: docs/title.png
