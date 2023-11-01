import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Widget = ({type}) => {

    let data;
    

//temprorary
    const amount=100;
    const diff=20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isCount:true,
                link:"See all Users",
                icon:(
                    <Person2OutlinedIcon className="icon"/>
                )
            };
            break;
        case "product":
            data={
                title:"PLANTS",
                isCount:false,
                link:"See all Plants",
                icon:(
                    <GrassOutlinedIcon className="icon"/>
                )
            };
            break;
        case "weather":
            data={
                title:"WEATHER",
                isCount:false,
                link:"See Weather Details",
                icon:(
                    <CloudQueueOutlinedIcon className="icon"/>
                )
            };
            break;
        case "email":
            data={
                title:"EMAIL",
                isCount:true,
                link:"See all Emails",
                icon:(
                    <EmailOutlinedIcon className="icon"/>
                )
            };
            break;
        default:
            break;
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isCount}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget