import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledSearch } from './style'

import search from 'Components/Search/pics/search.svg'

interface SearchProps {
    onValueTaped: (event: any) => void
}

const Search = ({ onValueTaped }: SearchProps) => {
    return (
        <StyledSearch>
            <Icon size={ICON_SIZE.MEDIUM} src={search} />
            <input
                type='text'
                placeholder={`Search anything here`}
                onChange={onValueTaped}
            />
        </StyledSearch>
    )
}

export { Search }
