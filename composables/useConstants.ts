export function useConstants() {
    const configStore = useConfigStore();
    const websiteLinks = [
        {
            name: configStore.msg.navBar.home,
            elementId: "",
        },
    ];

    return {
        websiteLinks,
    };
}
