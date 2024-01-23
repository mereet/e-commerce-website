//import React from 'react'

import { InputBase,Box ,styled,List,ListItem} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import { useState, useEffect } from 'react';
import { useSelector} from "react-redux"
import { getProducts  } from "../../redux/actions/productActions";
import {Link }from "react-router-dom";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;


const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;


const SearchIconWrapper = styled(Box)`
color:blue;
  margin-left: auto;
  padding: 5px;
  display: flex;
  
`;

const Search = () => {
  const [ text, setText ] = useState('');


  const {products} = useSelector(state => state.getProducts);


  const getText = (text) => {
    setText(text);
    //setOpen(false)
}

  return (
    <SearchContainer>
   <InputSearchBase placeholder='Search for products,brands and more'
   onChange={(e)=>getText(e.target.value)}
   value={text}/>

<SearchIconWrapper>
    <SearchIcon/>
</SearchIconWrapper>
{
              text && 
              <ListWrapper >
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </SearchContainer>

    
      
    
  )
}

export default Search
