
import {imageURL} from "../../constants/data"

import { Grid,styled} from "@mui/material"

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;





const MidSection = () => {
  //const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (<>
  <Wrapper lg={12} sm={12} md={12} xs={12} container>
  
    {
imageURL.map(image=>(
  <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} style={{ width: '100%' }} />
                        </Grid>

))
    }
  </Wrapper>
 
  </>
  )
}

export default MidSection
