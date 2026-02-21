// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code

    $w('#wixChat1').onViewportEnter(() => {
        // There is no documented method to programmatically open the Wix Chatbox via Velo code.
        // The chatbox will appear according to its own settings and triggers.
        // This handler is included in case future APIs allow programmatic control.
    });
});