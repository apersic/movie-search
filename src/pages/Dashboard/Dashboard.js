import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { useMovieService } from "../../hooks/useMovieService";

export const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, getUpcomingMovies, getMoviesByTitle } =
    useMovieService();

  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ maxWidth: 450 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          position: "sticky",
          top: "0",
          background: "#fff",
          padding: "24px 0 0",
        }}
        mb={4}
      >
        <TextField
          label="Start typing..."
          variant="outlined"
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{
            width: "100%",
          }}
        />
        <Button
          variant="outlined"
          onClick={() => getMoviesByTitle(searchQuery)}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          data.map((movie) => (
            <CardComponent
              key={movie.id}
              title={movie.titleText.text}
              year={movie.releaseYear.year}
              categories={movie.titleType.categories}
            />
          ))
        )}
      </Box>
    </Box>
  );
};
