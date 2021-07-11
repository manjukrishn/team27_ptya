import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "99.5%",
    height: "auto",
    marginBottom: "10px",
    backgroundColor: "#F8F8F8",
    borderRadius: "25px"
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
  icon_style1: {
    fontSize: 16,
    marginLeft: 20,
    color: "#606060"
  },
  icon_style2: {
    fontSize: 16,
    marginLeft: 20,
    color: "#185ADB"
  },
  likeNotClicked: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    marginBottom: "10px",
    width: "120px",
    marginLeft: "20px",
    borderRadius: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    cursor: "pointer"
  },
  likeClicked: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    marginBottom: "10px",
    width: "120px",
    marginLeft: "20px",
    borderRadius: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "#E8E8E8",
    cursor: "pointer"
  },
  supportClicked: {
    marginLeft: 5,
    fontSize: "14px",
    color: "#185ADB"
  },
  supportNotClicked: {
    marginLeft: 5,
    fontSize: "14px",
    color: "#606060"
  },
  status_div: {
    display: "flex",
    marginLeft: 10
  },
  staus: {
    fontSize: 20,
    color: "green"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [is, setIs] = React.useState(false);

  const incc = () => {
    setCount(count + 1);
    setIs(true);
  };

  const decc = () => {
    setCount(count - 1);
    setIs(false);
  };

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
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <div className={classes.status_div}>
        <h4 className={classes.status}>Status: In progress</h4>
      </div>
    </Card>
  );
}
