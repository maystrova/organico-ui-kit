const getSearchHistoryList = async (): Promise<string[]> => {
    const storageSearchHistory = await window.localStorage.getItem(
        'search-history',
    )
    if (storageSearchHistory) {
        return JSON.parse(storageSearchHistory)
    }

    return []
}

export { getSearchHistoryList }
