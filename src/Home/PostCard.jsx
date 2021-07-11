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
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = React.useState(props.item.support);
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
            {props.item.user}
          </Avatar>
        }
        title={props.item.user}
        subheader={props.item.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <div
        className={is ? classes.likeClicked : classes.likeNotClicked}
        onClick={is ? decc : incc}
      >
        <ThumbUpIcon
          className={is ? classes.icon_style2 : classes.icon_style1}
        />
        <h4 className={is ? classes.supportClicked : classes.supportNotClicked}>
          {count} {count > 1 ? "supports" : "support"}
        </h4>
      </div>
    </Card>
  );
}
