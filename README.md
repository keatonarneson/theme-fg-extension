# Cookie Changer

Cookie Changer is a Chrome extension that changes a cookie value from light to dark to classic on localhost. This is useful for testing and debugging purposes.

## Features

-   Changes the `theme-fg` cookie value cyclically between `light`, `dark`, and `classic`.
-   Automatically reloads the page to apply the new cookie value.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory where you downloaded/cloned this repository.

## Usage

1. Navigate to a page on `http://localhost`.
2. Click the Cookie Changer extension icon.
3. The `theme-fg` cookie will be changed and the page will be reloaded to reflect the new cookie value.

## Files

-   `manifest.json`: The manifest file that defines the extension's settings and permissions.
-   `background.js`: The background script that handles the cookie changing logic and page reload.
-   `icons/`: Directory containing the extension icon in various sizes.

## Icon

The extension icon is available in the following sizes:

-   16x16
-   32x32
-   48x48
-   128x128

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
