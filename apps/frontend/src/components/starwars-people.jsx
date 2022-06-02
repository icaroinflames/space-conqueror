import { useState } from 'react';
import { Button, LinearProgress, Box } from '@mui/material';
import useFetchSWAPI from '../hooks/useFetchSWAPI';
import PeopleGrid from './people-grid';

const StarWarsPeople = () => {

    const [page, setPage] = useState(1);
    const handleClickNext = () => setPage(page + 1);
    const handleClickPrev = () => setPage(page - 1);

    const {response, error, loading} = useFetchSWAPI(`/people/?page=${page}`, {});

    if (loading) return <LinearProgress />;
    if (error) return <p>Error: {error.message}</p>;
    if (!response) return <p>No hay datos</p>;

    return (
        <>
            <PeopleGrid data={response} />
            <Box sx={{marginTop: '1rem'}}>
                <Button variant="contained" onClick={handleClickPrev} disabled={page === 1}>Previous</Button>
                <Button variant="contained" onClick={handleClickNext} disabled={response.next === null}>Next</Button>
            </Box>
        </>
    );
};

export default StarWarsPeople;
