import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height:"auto",
    marginBottom:"10px"
  },
  media: {
    height: 0
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  icon_style1:{
    fontSize:25,
    marginLeft:50,
    color:"gray"
  },
  icon_style2:{
    fontSize:25,
    marginLeft:50,
    color:"red"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [is, setIs] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const incc = () =>{
    setCount(count+1);
    setIs(true);
  }

  const decc = () =>{
    setCount(count-1);
    setIs(false);
  }

  return (
    <Card className={classes.root} elevation="0">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.item}
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <div style={{
        display:"flex",
        alignItems:"center",
        marginTop:-5,
        borderWidth:1,
      }}
      onClick={is?decc:incc}
      >

      <ThumbUpIcon className={is?classes.icon_style2:classes.icon_style1} /> 
      <h4 style={{marginLeft:5}}>Support</h4>
      </div>
     
    </Card>
  );
}
