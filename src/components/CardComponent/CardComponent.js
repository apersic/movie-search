import { Box, Card, CardContent, Typography } from "@mui/material";

export const CardComponent = ({ title, year, categories }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {year}
          </Typography>
          <Typography variant="body2">
            Categories:{" "}
            {categories ? categories.map((category) => category.value.toUpperCase()) : 'NONE'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
