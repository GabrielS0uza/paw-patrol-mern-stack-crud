import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { getById } from '../../services/dogService.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = {
    listVaccines: {
        width: '100%',
        maxHeight: 'calc(100% - 60px)',
        overflow: 'auto',
        borderRadius: '6px',
        boxShadow: '0 0 40px 0 rgba(0,0,0,.15)'
    },
    listItem: {
        padding: '25px',
        fontSize: '18px !important',
        color: 'rgb(160,160,160)'
    },

    itemText: {
        marginRight: '25px',
        color: 'sienna'
    },
    loaderWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-55px',
        height: '100%',

    },
    loader: {
        color: 'sienna'
    }
};

class DogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {},
            isLoading: false,
            open: false
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    };

    componentWillMount() {
        this.setState({ isLoading: true });
        this.loadDog();
    }

    loadDog = async () => {
        const dog = await getById(this.props.match.params.id);
        this.setState({ dog: dog, isLoading: false })
    }

    listVaccines() {
        const { classes } = this.props;
        const { dog, isLoading } = this.state;

        if (!isLoading) {
            return (
                dog.listVaccines.map((vaccine, index) => {
                    return (
                        <ListItem className={classes.listItem} button key={index}>
                            <span className={classes.itemText}>{index + 1}:</span>
                            <ListItemText primary={vaccine} />
                        </ListItem>
                    )
                })
            )
        }
    }

    render() {
        const { classes } = this.props;
        const { isLoading } = this.state;
        const { name, breed, age } = this.state.dog;

        let content;
        if (isLoading) {
            content = <div className={classes.loaderWrap}>
                <CircularProgress className={classes.loader} />
            </div>
        } else {
            content =
                <List
                    component="nav"
                    className={classes.listVaccines}
                >
                    <ListItem className={classes.listItem} button>
                        <span className={classes.itemText}>Name:</span>
                        <ListItemText primary={name} />
                    </ListItem>
                    <ListItem className={classes.listItem} button>
                        <span className={classes.itemText}>Breed:</span>
                        <ListItemText primary={breed} />
                    </ListItem>
                    <ListItem className={classes.listItem} button>
                        <span className={classes.itemText}>Age:</span>
                        <ListItemText primary={age === 0 ? 'Less than a year old' : age + ' years old'} />
                    </ListItem>
                    <ListItem className={classes.listItem} button onClick={this.handleClick.bind(this)}>
                        <span className={classes.itemText}>List of Vaccines:</span>
                        <ListItemText primary="" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {this.listVaccines()}
                        </List>
                    </Collapse>
                </List>
        }

        return (
            <div className="dog">
                <div className="dog-title">
                    <h1>Dog</h1>
                </div>

                {content}

            </div >
        )
    }
}

export default withStyles(useStyles)(DogPage);