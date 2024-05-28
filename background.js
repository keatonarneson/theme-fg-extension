chrome.action.onClicked.addListener(async tab => {
    if (!tab.url?.startsWith('http')) {
        console.error('Invalid URL:', tab.url);
        alert(
            'This extension can only be used on valid webpages (starting with http:// or https://).'
        );
        return;
    }

    try {
        const cookie = await chrome.cookies.get({
            url: 'http://localhost',
            name: 'theme-fg',
        });

        if (!cookie) {
            console.warn('Cookie not found. Setting default value.');
        }

        const currentValue = cookie?.value || 'light';
        const nextValue = {
            light: 'dark',
            dark: 'classic',
            classic: 'light',
        }[currentValue];

        // Set the new cookie value
        await chrome.cookies.set({
            url: 'http://localhost',
            name: 'theme-fg',
            value: nextValue,
        });

        console.log(`Cookie changed to ${nextValue}`);

        // Reload the current tab to apply changes
        chrome.tabs.reload(tab.id, { bypassCache: true });
    } catch (error) {
        console.error('Error getting or setting cookie:', error);
        alert(
            'An error occurred while trying to change the cookie. Please check the console for details.'
        );
    }
});
