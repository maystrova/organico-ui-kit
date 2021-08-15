import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledSearch } from './style'

import search from 'Components/Search/pics/search.svg'

interface SearchProps {
    onValueTaped: (event: any) => void
    onSearchClick?: () => void
    onEnterClick?: (event: any) => void
    value: string
}

const Search = ({
    onValueTaped,
    onSearchClick,
    onEnterClick,
    value,
}: SearchProps) => {
    return (
        <StyledSearch>
            <Icon size={ICON_SIZE.MEDIUM} src={search} />
            <input
                onClick={onSearchClick}
                type='text'
                placeholder={`Search anything here`}
                onChange={onValueTaped}
                onKeyDown={onEnterClick}
                value={value}
            />
        </StyledSearch>
    )
}

export { Search }
