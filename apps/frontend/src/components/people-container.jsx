import { Typography, Box } from "@mui/material";
import StarWarsPeople from "./starwars-people";

const PeopleContainer = () => {

    return (
        <div className="people-container">
            <Typography variant="h2" sx={{fontWeight: 'bold', margin:'1em'}}>Star Wars People</Typography>
            <Box sx={{margin: '1rem'}}>
                <StarWarsPeople />
            </Box>
        </div>
    );
}

export default PeopleContainer;