module.exports = {
    async processSuggestions(suggestions, queryString, queryTerms) {
        masterSuggestions = suggestions.filter((_s) => _s.path.indexOf(`/pages/master/`) == 0);
        if (masterSuggestions && masterSuggestions.length > 0){
            suggestions = masterSuggestions
        }
        if (queryString) {
            // add a suggestion to start a search in an external service
            suggestions.push({
                path: 'https://sourcegraph.com/search?patternType=standard&sm=0&q=context:global+repo:github.com/dromara/liteflow+',
                slug: queryString,
                parentPageTitle: 'Sourcegraph',
                title: '搜索源码',
                contentStr: '仓库内搜索 "' + queryString + '" 相关源码',
                external: true,
            })
        }
        return suggestions
    },

    async onGoToSuggestion(index, suggestion, queryString, queryTerms) {
        // e.g. create an analytics event

        // return true if you want to prevent default navigation
        return true
    },
}