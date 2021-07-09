import React from 'react'

import { StyledSearch } from './style'
import { Icon, ICON_SIZE } from 'Components/Icon'
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
                onChange={event => onValueTape(event)}
            />
        </StyledSearch>
    )
}

export { Search }
