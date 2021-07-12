import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledSearch } from './style'

import search from 'Components/Search/pics/search.svg'

interface SearchProps {
    onValueTape: (event: any) => void
}

const Search = ({ onValueTape }: SearchProps) => {
    return (
        <StyledSearch>
            <Icon size={ICON_SIZE.MEDIUM} src={search} />
            <input
                type='text'
                placeholder={`Search anything here`}
                onChange={onValueTape}
            />
        </StyledSearch>
    )
}

export { Search }
