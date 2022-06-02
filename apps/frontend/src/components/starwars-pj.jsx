import { Card, CardContent, Typography } from '@mui/material';
const StarWarsPJ = ({data}) => {

    return (
        <Card>
            <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: '500' }} color="text.secondary" gutterBottom>
                {data.name}
                </Typography>   
                <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                Altura: {data.height}
                </Typography>   
            </CardContent>
        </Card>
    );   
};

export default StarWarsPJ;