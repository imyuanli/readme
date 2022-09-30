import yayJpg from '../assets/yay.jpg';
import {Button, TextField} from "@mui/material";
import Title from "@/components/title";

export default function HomePage() {
    const  handleChange = ()=>{

    }
    return (
        <div className='p-3'>
            <Title handleChange={handleChange}/>
            <Button  variant="contained">生成</Button>
        </div>

    );
}
