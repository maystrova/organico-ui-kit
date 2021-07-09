import React from 'react'

import { StyledSearch } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import search from 'Components/Search/pics/search.svg'

interface SearchProps {}

const Search = ({}: SearchProps) => {
    return (
        <StyledSearch>
            <Icon size={ICON_SIZE.MEDIUM} src={search} />
            <input
                type='text'
                placeholder={`Search anything here`}
                onChange={event => event.target.value}
            />
        </StyledSearch>
    )
}

export { Search }
