import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuDto } from '../../utilities/models'

const ViewMenu: React.FC<{
    menuList: Array<MenuDto>
  }> = (props) => {
  return (
    <>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.menuList.map((item:MenuDto) => (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                  <CardActionArea>
                      <CardMedia
                          sx={{ minHeight: "400px" }}
                          component={"img"}
                          src={`data:image/jpeg;base64,${item.image}`}
                          alt={item.location} />
                      <CardContent>
                          <Typography variant="h5" gutterBottom component={"div"}>
                              {item.location}
                          </Typography>
                          <Typography variant="body2">Bedrooms : {item.numberOfBedrooms}</Typography>
                          <Typography variant="body2">Bathrooms :{item.numberOfBathrooms}</Typography>
                          <Typography variant="body2">Living Area(sqft) :{item.livingAreaSize}</Typography>
                          <Typography variant="body2">Land Size(perch) :{item.landSize}</Typography>
                          <Typography variant="body2">Price :{item.price}</Typography>
                          <Typography variant="body2">Contact :{item.contact}</Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          ))}
      </Box>
</>
  );
};

export default ViewMenu;
