import React from 'react'
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const SearchBar = () => {
    const Search = styled('div')(() => ({
        position: 'relative',
  
        backgroundColor: "white",
        '&:hover': {
          backgroundColor: "blue",
        },
        borderBottom:"1px solid grey",
        marginRight: 2,
        marginLeft: 0,
        width: '100%',
      
      }));
      
      const SearchIconWrapper = styled('div')(() => ({
        padding: 2,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(() => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: 2,
        
          paddingLeft: "2em",
         
          width: '100%',
       
        },
      }));
  return (
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'search' }}
        />
  </Search>
    
  )
}

export default SearchBar