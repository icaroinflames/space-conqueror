import { Grid } from '@mui/material';
import StarWarsPJ from './starwars-pj';

//Grid container component that contains the starwars-pj components
const PeopleGrid = ({data}) => {
    return (
        <Grid container spacing={2}>
            {data.results.map(person => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={person.name}>
                    <StarWarsPJ data={person} />                    
                </Grid>
            ))}
        </Grid>
    );
};

export default PeopleGrid;