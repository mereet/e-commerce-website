import { useState,useContext } from "react";
import { authenticateSignup ,authenticateLogin} from "../../services/api";
import { Dialog ,TextField,Box,Typography,styled,Button} from "@mui/material";
import { DataContext } from "../../context/DataProvider";

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    flex: 1;
    
    
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    
`;
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 82%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone : ''
};
const loginInitialValues = {
    username: '',
    password: ''
};
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`










const LoginDialog = ({open,setOpen}) => {
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, setError] = useState(false);
    const {setAccount}=useContext(DataContext)

const handleClose=()=>{
    setOpen(false);
    toggleAccount(accountInitialValues.login);
setError(false);
}
const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
}
const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
}

const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
}

const loginUser = async() => {
    let response = await authenticateLogin(login);
    //if(!response) 
      //  showError(true);
    //else {
      //  showError(false);
        //handleClose();
        //setAccount(login.username);
    //}
    console.log(response);
    if(response.status===200){
        handleClose();
        setAccount(response.data.data.firstname);
    }else{
        setError(true);
    }
}


const signupUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
}




  return (
    <Dialog open={open} onClose={handleClose}>
<Component>
    <Box style={{display:'flex', height:'100%'}}>
    <Image>
    <Typography variant="h5">{account.heading}</Typography>
    <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>


       </Image>
       {account.view==='login'?
        <Wrapper>
<TextField variant="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter Username"/>
{ error&& <Error>Please enter valid username or password</Error>}
<TextField variant="standard"  onChange={(e)=>onValueChange(e)} name='password' label="Enter Password"/>
<Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
<LoginButton onClick={()=>loginUser()}>Login</LoginButton>
<Typography style={{textAlign:'center'}}>OR</Typography>
<RequestOTP>Request OTP</RequestOTP>
<CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
        </Wrapper>
       
:
<Wrapper>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter First Name"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Last Name"/>
<TextField variant="standard"  onChange={(e)=>onInputChange(e)}  name="username" label="Enter Username"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)}  name="email" label="Enter Email"/>
<TextField variant="standard"  onChange={(e)=>onInputChange(e)}  name="password" label="Enter Password"/>
<TextField variant="standard"  onChange={(e)=>onInputChange(e)}  name="phone" label="Enter Phone "/>
<LoginButton onClick={() => signupUser()} >Continue</LoginButton>
</Wrapper>
}
   
    </Box>
</Component>
    </Dialog>
  )
}

export default LoginDialog

