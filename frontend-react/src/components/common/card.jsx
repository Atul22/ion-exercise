import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { unstable_Box as Box } from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = {
  card: {
    maxWidth: 600
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class HomeCard extends Component {
  render() {
    const { classes, media, header, lead } = this.props;
    return (
      <div>
        <Box m={2} />

        <Card className={classes.card}>
          <CardActionArea>
            {media}

            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {header}
              </Typography>

              <Typography variant="h5" component="h2">
                {lead}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomeCard);
